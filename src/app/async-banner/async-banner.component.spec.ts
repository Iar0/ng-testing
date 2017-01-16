import {ComponentFixture, TestBed, ComponentFixtureAutoDetect, async} from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import {AsyncBannerComponent} from "./async-banner.component";

describe('BannerComponent (extenal template)', () => {

    let comp:    AsyncBannerComponent;
    let fixture: ComponentFixture<AsyncBannerComponent>;
    let de:      DebugElement;
    let el:      HTMLElement;


    beforeEach(() => {  // before each spec ex
        TestBed.configureTestingModule({
            declarations: [ AsyncBannerComponent ], // declare the test component
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: false }
            ]
        });

        fixture = TestBed.createComponent(AsyncBannerComponent);

        comp = fixture.componentInstance; // BannerComponent test instance

        // query for the title <h1> by CSS element selector
        // The query method takes a predicate function and searches the fixture's entire DOM tree for the first element that satisfies the predicate. The result is a different DebugElement, one associated with the matching DOM element.
        de = fixture.debugElement.query(By.css('h1'));
        el = de.nativeElement;
    });

    it('should display original title', () => {
        fixture.detectChanges();
        expect(el.textContent).toEqual("Async Banner Component");
    });

});

