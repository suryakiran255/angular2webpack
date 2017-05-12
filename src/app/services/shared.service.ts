import { Injectable } from '@angular/core';

@Injectable()
export class SharedService{
    public myModel:MyModel

    createObject(_id:string,_name:string,_desc:string){
        this.myModel=new MyModel();

        this.myModel.id=_id;
        this.myModel.name=_name;
        this.myModel.description=_desc;
    }

    getObject(){
        return this.myModel;
    }
}

export class MyModel{
    id:string;
    name:string;
    description:string;
}