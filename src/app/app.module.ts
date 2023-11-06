import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutMyComponent } from './components/about-my/about-my.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HeaderComponent, AboutMyComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
