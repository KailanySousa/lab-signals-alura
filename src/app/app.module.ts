import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignalsIntroComponent } from './components/signals-intro/signals-intro.component';
import { EffetcsComponent } from './components/effetcs/effetcs.component';
import { ElementListComponent } from './components/element-list/element-list.component';
import { ElementDetailsComponent } from './components/element-details/element-details.component';
import { ComputedSignalComponent } from './components/computed-signal/computed-signal.component';
import { ElementsComponent } from './components/elements/elements.component';

@NgModule({
  declarations: [
    AppComponent,
    SignalsIntroComponent,
    EffetcsComponent,
    ElementListComponent,
    ElementDetailsComponent,
    ComputedSignalComponent,
    ElementsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
