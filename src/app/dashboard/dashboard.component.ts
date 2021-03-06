import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
    <app-dashboard-hero [hero]="hero" (selected)="onSelected($event)"></app-dashboard-hero>
  `,
  styles: []
})
export class DashboardComponent {

  hero = 'Michele';

  onSelected(hero) {
    console.log(hero);
  }

}
