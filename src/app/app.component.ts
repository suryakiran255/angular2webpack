import { Component, Input } from '@angular/core';
import { Router,Event as RouterEvent, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

import '../styles/app.css';
import '../styles/style.css';

@Component({
    selector:'my-app',
    templateUrl:'./app.component.html',
    styleUrls:['./app.component.css']
})
export class AppComponent{
    title:string='Angular 2 App with Webpack';
    @Input() loading:boolean=true;

    constructor(private router:Router){
        this.router.events.subscribe((event:RouterEvent) => {
            this.navigationInterceptor(event);
        })
    }

    navigationInterceptor(event:RouterEvent):void{
        if(event instanceof NavigationStart){
            this.loading=true;
        }
        if(event instanceof NavigationEnd){
            setTimeout(() => this.loading = false, 1000);
            //this.loading=false;
        }
        if(event instanceof NavigationCancel){
            setTimeout(() => this.loading = false, 1000);
        }
        if(event instanceof NavigationError){
            setTimeout(() => this.loading = false, 1000);
        }
    }
}