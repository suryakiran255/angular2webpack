import { Component } from '@angular/core';
import { Helper } from '../services/helper';
import { SpContext } from '../services/spcontext';
import { AppContext } from '../models/appcontext';
import { Employee } from '../models/employee.model'
import { SharedService } from '../services/shared.service'
// import { Router } from '@angular/router'

@Component({
    selector:'my-home',
    templateUrl:'./home.component.html',
    providers:[SpContext, Helper],
})

export class HomeComponent{
    employee:Employee=null
    employeeObj=new Employee('Viswa','Kalyan',true,'VISA','English');
    constructor(private sharedService:SharedService){
        
    }

    getSelectedEmployee(emp){
        if(emp!=null){
            this.employee=new Employee(emp.firstName,emp.lastName,emp.isFullTime,emp.paymentType,emp.primaryLangauge);
            this.sharedService.createObject(this.employee.firstName,this.employee.lastName,this.employee.paymentType);

        }
        else{
            this.employee=null;
        }
    }
 }