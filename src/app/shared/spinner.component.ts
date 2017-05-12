import { Component } from '@angular/core';

@Component({
    selector:'spinner-component',
    template:`<div class="loading-overlay">
                <img src="/images/loader_new.gif" alt="">
              </div>`
})
export class SpinnerComponent{}
export class SpinnerPage{
    public loading:boolean;
    constructor(val:boolean){
        this.loading=val;
    }

    standby():void{
        this.loading=true;
    }

    ready():void{
        this.loading=false;
    }
}