/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import {DebugElement, Component} from '@angular/core';

import { DashboardHeroComponent } from './dashboard-hero.component';


/* Test Host */
@Component({
  template: `
    <app-dashboard-hero [hero]="hero"  (selected)="onSelected($event)"></app-dashboard-hero>`
})

class TestHostComponent {
  hero = 'Fabio';
  selectedHero: string;
  onSelected(hero: string) { this.selectedHero = hero; }
}


describe('DashboardHeroComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let heroEl: DebugElement;
  let heroNativeElement: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardHeroComponent, TestHostComponent ]
    });

    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    heroEl   = fixture.debugElement.query(By.css('.hero')); // find hero
    heroNativeElement = heroEl.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display passed hero name', () => {
    fixture.detectChanges();
    const expectedName = component.hero;
    expect(heroNativeElement.textContent).toContain(expectedName);
  });

  it('should raise selected event when clicked', () => {
    fixture.detectChanges();
    heroEl.triggerEventHandler('click', null);
    // selected hero should be the same data bound hero
    expect(component.selectedHero).toBe(component.hero);
  });
});

