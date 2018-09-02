/// <reference types="@types/googlemaps" />
import { Component, OnInit, ViewChildren, ElementRef, Input } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';
import { MapsAPILoader, AgmMap } from '@agm/core';
import { GoogleMapsAPIWrapper } from '@agm/core/services';

import { DataService } from '../data.service';
import { Restaurant } from '../restaurant';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',  // Using html insted of pug here bc this implementation of pug/angular doesn't deal with template reference variables correctly
  styleUrls: ['./restaurant-detail.component.sass'],
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
export class RestaurantDetailComponent implements OnInit {

  @Input() restaurant: Restaurant;
  @ViewChildren('gmap') elementQuery: any;
  private gmapElement: any;
  private map: google.maps.Map;

  constructor(private _dataService: DataService) {
  }

  ngOnInit() {
  }

}
