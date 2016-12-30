import { Component } from '@angular/core';
import { Helper } from '../services/helper';
import { SpContext } from '../services/spcontext';
import { AppContext } from '../models/appcontext';

@Component({
    selector:'my-home',
    templateUrl:'./home.component.html',
    providers:[SpContext, Helper]
})
export class HomeComponent{
    appContext:AppContext=null;
    constructor(_helper:Helper,_spContext:SpContext){
        this.appContext=_spContext.appContext;
    }
 }