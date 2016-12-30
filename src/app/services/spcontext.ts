import { Injectable } from '@angular/core';
import { Helper } from './helper';
import { AppContext } from '../models/appcontext';
import { CookieService } from 'angular2-cookie/core';

@Injectable()
export class SpContext{
    appContext:AppContext=null;
    helper:Helper=null;
    cookieService:CookieService=null;
    constructor(_helper:Helper,_cookieService:CookieService){
        this.helper=_helper;
        this.cookieService=_cookieService;
        this.appContext=new AppContext()
        if(decodeURIComponent(this.helper.getQueryStringValue('SPHostUrl'))=='undefined'){
            this.loadSpAppContext();
        }
        else{
            this.createSpAppContext();
        }
    }

    loadSpAppContext(){
        this.appContext.AppWebUrl=this.cookieService.get('SPAppWebUrl');
        this.appContext.HostUrl=this.cookieService.get('SPHostUrl');
        this.appContext.HostTitle=this.cookieService.get('SPHostTitle');
        this.appContext.HostLogoUrl=this.cookieService.get('SPHostLogoUrl');

        return this.appContext;
    }

    createSpAppContext(){
        this.appContext.AppWebUrl=decodeURIComponent(this.helper.getQueryStringValue('SPAppWebUrl'));
        this.cookieService.put('SPAppWebUrl',this.appContext.AppWebUrl);

        this.appContext.HostUrl=decodeURIComponent(this.helper.getQueryStringValue('SPHostUrl'));
        this.cookieService.put('SPHostUrl',this.appContext.HostUrl);

        this.appContext.HostTitle=decodeURIComponent(this.helper.getQueryStringValue('SPHostTitle'));
        this.cookieService.put('SPHostTitle',this.appContext.HostTitle);

        this.appContext.HostLogoUrl=decodeURIComponent(this.helper.getQueryStringValue('SPHostLogoUrl'));
        this.cookieService.put('SPHostLogoUrl',this.appContext.HostLogoUrl);

        //window.location.href=this.appContext.AppWebUrl+'/dist/main.html';
        window.location.href='/home';
    }
}