import { Component } from '@angular/core';
import { IMyOptions, IMyDateModel} from 'mydatepicker';

@Component({
    selector:'app-launcher',
    template:`
    <h1>{{title}}</h1>
    `
})
export class AppLauncherComponent {
    title:string="My Title";
    selectedDate:string=null;
    mymodel:Model;
    text:string='foo';

    private myDatePickerOptions:IMyOptions={
        dateFormat:'dd.mm.yyyy',
        width:'250px',
        showClearDateBtn:true
    };

    constructor(){
        this.mymodel=new Model();
        this.mymodel.mydate=this.convertToJSONDate("23/03/2017");
    }

    onDateChanged(event:IMyDateModel){
        if(event.jsdate==null){
            this.selectedDate="";
        }
        else{
            this.selectedDate=event.jsdate.toLocaleDateString();
        }
    }
    convertToJSONDate(strDate: string) {
        let splitted = strDate.split("/");
        return <Object>{ date: { year: Number(splitted[2]), month: Number(splitted[1]), day: Number(splitted[0]) } };
    }
 }

 export class Model{
     mydate:any;
 }