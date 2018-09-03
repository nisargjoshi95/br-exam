import { Component, OnInit, Input } from '@angular/core';
import { trigger, transition, animate, state, style } from '@angular/animations';

import { Restaurant } from '../restaurant';

@Component({
  selector: 'app-slide-in-panel',
  templateUrl: './slide-in-panel.component.pug',
  styles: [
    `@media only screen and (min-width: 768px) {
      .parent
        height: 100%
        width: 100%

        display: flex
        div
          flex: 1
    }`
  ],
  styleUrls: ['./slide-in-panel.component.sass'],
  animations: [
    trigger('slideInOut', [
      // transition(':enter', [
      //   style({transform: 'translateX(100%)'}),
      //   animate('200ms ease-in', style({transform: 'translateX(0%)'}))
      // ]),
      // transition(':leave', [
      //   animate('200ms ease-in', style({transform: 'translateX(100%)'}))
      // ]),
      state('left', style({transform: 'translateX(0)'})),
      state('right', style({transform: 'translateX(-50%)'})),
      transition('* => *', animate(300))
    ])
  ],
})
export class SlideInPanelComponent implements OnInit {

  public restaurant: Restaurant;
  public activePanel: string = 'left';
  public desktopView: boolean = false;
  width: any;

  constructor() {
    this.width = (window.screen.width);
    console.log(this.width);
  }

  ngOnInit() {
  }

  ngOnChanges(changes) {
    console.log('changes', changes);
  }

  ngOnDestroy() {
  }

  openView(data) {
    this.activePanel = this.width >= 768 ? 'left': 'right';
    this.restaurant = data;
    // console.log('toggle', data);
  }

  closeView() {
    this.activePanel = 'left';
  }

}
