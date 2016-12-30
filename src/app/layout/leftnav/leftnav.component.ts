import { Component } from '@angular/core';
import { LeftNav } from '../../models/leftnav';

@Component({
    selector:'my-leftnav',
    templateUrl:'./leftnav.component.html'
})
export class LeftNavComponent{
    leftNavItems:LeftNav[]=[];
    constructor(){
        this.leftNavItems.push(new LeftNav('Home','/home',false,false));
        this.leftNavItems.push(new LeftNav('Programs','/programs',false,false));
        this.leftNavItems.push(new LeftNav('Manage Approvals','/approvals',false,false));
        this.leftNavItems.push(new LeftNav('New Programs','/approvals',true,false));
        this.leftNavItems.push(new LeftNav('Bulk Fare Card','/bfc',true,false));
        this.leftNavItems.push(new LeftNav('Reports','/reports',false,false));
        this.leftNavItems.push(new LeftNav('Sub Report1','http://www.google.com',true,true));
        this.leftNavItems.push(new LeftNav('Sub Report2','http://www.angular.io',true,true));
    }
}