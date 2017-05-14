import { Component,OnInit } from '@angular/core';
import { Helper } from '../services/helper';
import { SpContext } from '../services/spcontext';

@Component({
    selector:'my-approvals',
    templateUrl:'./approvals.component.html'
})
export class ApprovalsComponent{
    queryString:string;
    constructor(private spContext:SpContext,private helper:Helper){
        this.queryString=this.spContext.appContext.HostUrl;
    }
 }