import { ComponentFixture,TestBed,ComponentFixtureAutoDetect } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { AppLauncherComponent } from './applauncher.component';

describe('AppLauncherComponent',()=>{
    let comp:AppLauncherComponent;
    let fixture:ComponentFixture<AppLauncherComponent>;
    let de:DebugElement;
    let el:HTMLElement;

    beforeEach(()=>{
        TestBed.configureTestingModule({
            declarations:[AppLauncherComponent],
            providers:[
                {provide:ComponentFixtureAutoDetect, useValue:true}
            ]
        });
        fixture=TestBed.createComponent(AppLauncherComponent);
        comp=fixture.componentInstance;
        de=fixture.debugElement.query(By.css('h1'));
        el=de.nativeElement;
    })

    it('should display original title', () => {
    expect(el.textContent).toContain(comp.title);
    });

    it('should still see original title after comp.title change', () => {
    const oldTitle = comp.title;
    comp.title = 'Test Title';
    // Displayed title is old because Angular didn't hear the change :(
    expect(el.textContent).toContain(oldTitle);
    });


    it('should display a different test title', () => {
    comp.title = 'Test Title';
    fixture.detectChanges();
    expect(el.textContent).toContain('Test Title');
    });

});
