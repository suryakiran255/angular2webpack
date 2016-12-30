import { Component } from '@angular/core';

import '../styles/app.css';
import '../styles/style.css';

@Component({
    selector:'my-app',
    templateUrl:'./app.component.html',
    styleUrls:['./app.component.css']
})
export class AppComponent{
    title:string='Angular 2 App with Webpack';
}

