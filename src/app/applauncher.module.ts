import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';
import { AppLauncherComponent } from './applauncher.component';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { SharedService } from './services/shared.service'
import { MyDatePickerModule } from 'mydatepicker'
import { AppRoutingModule,routableComponents } from './app-routing.module';
import { EmployeeListComponent } from './employee/employeelist.component';
import { EchoPipe } from './filters/echo.pipe';

@NgModule({
    imports:[BrowserModule, MyDatePickerModule, AppRoutingModule, FormsModule],
    declarations:[AppLauncherComponent,routableComponents,EmployeeListComponent,EchoPipe],
    bootstrap:[AppLauncherComponent],
    providers:[CookieService,SharedService]
})
export class AppLaucherModule{ }