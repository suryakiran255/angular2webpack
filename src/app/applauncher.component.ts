import { Component } from '@angular/core';
import { Helper } from './services/helper';
import { SpContext } from './services/spcontext';
import { AppContext } from './models/appcontext';

@Component({
    providers:[Helper, SpContext, AppContext],
    selector:'app-launcher',
    template:``
})
export class AppLauncherComponent {
    helper:Helper=null;
    constructor(_helper:Helper,spContext:SpContext){
        this.helper=_helper;
        spContext.appContext;
    }
 }