import { Component, OnInit, Input } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';

import { Restaurant } from '../restaurant';

@Component({
  selector: 'app-slide-in-panel',
  templateUrl: './slide-in-panel.component.pug',
  styleUrls: ['./slide-in-panel.component.sass'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translateX(100%)'}),
        animate('200ms ease-in', style({transform: 'translateX(0%)'}))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({transform: 'translateX(100%)'}))
      ])
    ])
  ]
})
export class SlideInPanelComponent implements OnInit {
  @Input() restaurant: Restaurant = null;
  private _activePane: string = 'left';

  constructor() { }

  ngOnInit() {
  }

}
