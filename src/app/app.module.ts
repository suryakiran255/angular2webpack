import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { AppComponent } from './app.component';
import { TopNavComponent } from './layout/topnav/topnav.component';
import { LeftNavComponent } from './layout/leftnav/leftnav.component';
import { FooterComponent } from './layout/footer/footer.component';

import { AppRoutingModule,routableComponents } from './app-routing.module';

@NgModule({
    imports:[BrowserModule, AppRoutingModule],
    providers:[CookieService],
    declarations:[AppComponent, TopNavComponent, LeftNavComponent, FooterComponent, routableComponents],
    bootstrap:[AppComponent]
})
export class AppModule{ }