import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AsyncBannerComponent } from './async-banner/async-banner.component';
import { WelcomeComponent } from './welcome/welcome.component';
import {UserService} from "./model/user.service";
import {BannerComponent} from "./banner-inline.component";
import { TwainComponent } from './twain/twain.component';
import {TwainService} from "./model/twain.service";
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardHeroComponent } from './dashboard/dashboard-hero.component';

@NgModule({
  declarations: [
    AppComponent,
    AsyncBannerComponent,
    WelcomeComponent,
      BannerComponent,
      TwainComponent,
      DashboardComponent,
      DashboardHeroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [UserService, TwainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
