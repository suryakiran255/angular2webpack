import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
    selector:'emp-list',
    templateUrl:'./employeelist.component.html'
})
export class EmployeeListComponent implements OnInit{
    @Input() inputEmployee;
    @Output() selectEmployee=new EventEmitter<Employee>();
    selectedEmployee:Employee=null;
    employeeList:Employee[]=[];
    
    constructor(){
        this.employeeList.push(new Employee('Surya','Kiran',true,'VISA','English'));
        this.employeeList.push(new Employee('Sudheer','Kumar',true,'VISA','English'));
        this.employeeList.push(new Employee('Lakshmi','Vara',true,'VISA','English'));
        this.employeeList.push(new Employee('Viswa','Kalyan',true,'VISA','English'));
        
    }

    ngOnInit(){
        if(this.inputEmployee!=null){
            this.selectedEmployee=this.inputEmployee;
            this.selectEmployee.emit(this.selectedEmployee);
        }
    }

    OnSelectChange(employee){
        if(employee!=null){
            this.selectedEmployee=employee;
        }
        else{
            this.selectedEmployee=null;
        }
        this.selectEmployee.emit(this.selectedEmployee);
    }

    CheckIfRequired(event){
        if(event!=null && this.selectedEmployee!=null){
            return event.firstName==this.selectedEmployee.firstName;
        }
    }
}