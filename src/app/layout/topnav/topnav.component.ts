import { Component } from '@angular/core';
import { TopNav } from '../../models/topnav';

@Component({
    selector:'my-topnav',
    templateUrl:'./topnav.component.html'
})
export class TopNavComponent{
    topNavItems:TopNav[]=[];

    constructor(){
        this.topNavItems.push(new TopNav('Home','#'));
        this.topNavItems.push(new TopNav('About','#'));
        this.topNavItems.push(new TopNav('Projects','#'));
        this.topNavItems.push(new TopNav('Contact','#'));
    }
    
 }