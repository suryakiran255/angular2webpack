import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppLauncherComponent } from './applauncher.component';
import { CookieService } from 'angular2-cookie/services/cookies.service';

@NgModule({
    imports:[BrowserModule],
    declarations:[AppLauncherComponent],
    bootstrap:[AppLauncherComponent],
    providers:[CookieService]
})
export class AppLaucherModule{ }