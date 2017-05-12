import { ComponentFixture,TestBed,ComponentFixtureAutoDetect,async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { ApprovalsComponent } from './approvals.component';

describe('ApprovalComponent',()=>{
    let comp:ApprovalsComponent;
    let fixture:ComponentFixture<ApprovalsComponent>;
    let de:DebugElement;
    let el:HTMLElement;

    beforeEach(async(()=>{
        TestBed.configureTestingModule({
            declarations:[ApprovalsComponent],
        })
        .compileComponents();
    }));

    beforeEach(()=>{
        fixture=TestBed.createComponent(ApprovalsComponent);
        comp=fixture.componentInstance;
        de=fixture.debugElement.query(By.css('h1'));
        el=de.nativeElement;
    });

    it('Should display the default title',()=>{
        expect(el.textContent).toContain('This is Approvals Page');
    });

});
