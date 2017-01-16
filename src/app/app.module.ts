import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AsyncBannerComponent } from './async-banner/async-banner.component';
import { WelcomeComponent } from './welcome/welcome.component';
import {UserService} from "./model/user.service";
import {BannerComponent} from "./banner-inline.component";

@NgModule({
  declarations: [
    AppComponent,
    AsyncBannerComponent,
    WelcomeComponent,
      BannerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [UserService],
  bootstrap: [WelcomeComponent]
})
export class AppModule { }
