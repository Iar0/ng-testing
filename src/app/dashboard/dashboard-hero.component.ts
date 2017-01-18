import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-dashboard-hero',
  template: `
    <p class="hero" (click)="onClick()">{{hero}}</p>
  `,
  styles: []
})
export class DashboardHeroComponent {

  @Input() hero = 'Michele';
  @Output() selected = new EventEmitter();

  onClick() {
    this.selected.emit(this.hero);
  }
}
