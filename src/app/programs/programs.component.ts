import { Component,OnInit } from '@angular/core';
import { SharedService,MyModel } from '../services/shared.service'

@Component({
    selector:'my-programs',
    templateUrl:'./programs.component.html',
})
export class ProgramsComponent {
    model:MyModel=null;
    constructor(private sharedService:SharedService){
        if(sharedService.getObject()!=null){
            this.model=sharedService.getObject()
        }
    }
 }