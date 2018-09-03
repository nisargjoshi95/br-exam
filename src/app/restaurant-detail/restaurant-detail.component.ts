import { Component, OnInit, ViewChildren, ElementRef, Input } from '@angular/core';
import { MapsAPILoader, AgmMap } from '@agm/core';
import { GoogleMapsAPIWrapper } from '@agm/core/services';

import { Restaurant } from '../restaurant';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.pug',
  styleUrls: ['./restaurant-detail.component.sass']
})
export class RestaurantDetailComponent implements OnInit {

  @Input() restaurant: Restaurant;
  public gmapURL: string;

  constructor() { }

  ngOnInit() { }

  ngOnChanges() {
    this.gmapURL = this.restaurant ? 'https://www.google.com/maps/dir/?api=1&destination=' + encodeURIComponent(this.restaurant.location.address): '';
    console.log(this.gmapURL, 'changed')
  }

}
