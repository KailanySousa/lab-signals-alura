import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignalsIntroComponent } from './components/signals-intro/signals-intro.component';
import { EffetcsComponent } from './components/effetcs/effetcs.component';
import { ElementListComponent } from './components/element-list/element-list.component';
import { ElementDetailsComponent } from './components/element-details/element-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'elements', pathMatch: 'full' },
  { path: 'intro', component: SignalsIntroComponent },
  { path: 'effects', component: EffetcsComponent },
  {
    path: 'elements',
    children: [
      { path: '', component: ElementListComponent, outlet: 'list' },
      {
        path: 'details',
        component: ElementDetailsComponent,
        outlet: 'details',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
