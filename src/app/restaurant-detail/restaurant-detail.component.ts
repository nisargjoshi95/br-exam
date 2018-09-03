import { Component, OnInit, ViewChildren, ElementRef, Input } from '@angular/core';
import { MapsAPILoader, AgmMap } from '@agm/core';
import { GoogleMapsAPIWrapper } from '@agm/core/services';

import { DataService } from '../data.service';
import { Restaurant } from '../restaurant';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.pug',
  styleUrls: ['./restaurant-detail.component.sass']
})
export class RestaurantDetailComponent implements OnInit {

  @Input() restaurant: Restaurant;

  constructor(private _dataService: DataService) {
  }

  ngOnInit() {
  }

}
