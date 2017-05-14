import { ComponentFixture,TestBed,ComponentFixtureAutoDetect,async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { ApprovalsComponent } from './approvals.component';
import { Helper } from '../services/helper';
import { SpContext } from '../services/spcontext';
import { AppContext } from '../models/appcontext';

describe('ApprovalComponent',()=>{
    let comp:ApprovalsComponent;
    let fixture:ComponentFixture<ApprovalsComponent>;
    let de:DebugElement;
    let el:HTMLElement;

    beforeEach(async(()=>{
        let spContextStub={
            appContext:new AppContext()
        };

        spContextStub.appContext.HostUrl='test';

        TestBed.configureTestingModule({
            declarations:[ApprovalsComponent],
            providers:[{provide:SpContext, useValue:spContextStub},Helper]
        })
        .compileComponents();
    }));

    beforeEach(()=>{
        fixture=TestBed.createComponent(ApprovalsComponent);
        comp=fixture.componentInstance;
        let spContext=TestBed.get(SpContext);
        de=fixture.debugElement.query(By.css('.output'));
        el=de.nativeElement;
    });

    it('Should display the default title',()=>{
        fixture.detectChanges();
        console.log(el.textContent);
        expect(el.textContent).toEqual('test');
    });

});
