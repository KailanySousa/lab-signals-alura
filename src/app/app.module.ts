import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignalsIntroComponent } from './components/signals-intro/signals-intro.component';
import { EffetcsComponent } from './components/effetcs/effetcs.component';

@NgModule({
  declarations: [AppComponent, SignalsIntroComponent, EffetcsComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
