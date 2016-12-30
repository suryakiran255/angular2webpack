import { Component } from '@angular/core';
import { LeftNav } from './models/leftnav';

@Component({
    selector:'my-leftnav',
    templateUrl:'./leftnav.component.html'
})
export class LeftNavComponent{
    leftNavItems:LeftNav[]=[];
    constructor(){
        this.leftNavItems.push(new LeftNav('Home','/home'));
        this.leftNavItems.push(new LeftNav('Programs','/programs'));
        this.leftNavItems.push(new LeftNav('Manage Approvals','/approvals'));
        this.leftNavItems.push(new LeftNav('Reports','/reports'));
    }
}