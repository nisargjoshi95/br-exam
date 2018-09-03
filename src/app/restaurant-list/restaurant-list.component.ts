import { Component, OnInit, Output } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Observable } from 'rxjs';
import { EventEmitter } from '@angular/core';

import { DataService } from '../data.service';
import { Restaurant } from '../restaurant';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.pug',
  styleUrls: ['./restaurant-list.component.sass']
})
export class RestaurantListComponent implements OnInit {

  @Output() restaurantSelected = new EventEmitter();

  public restaurants: Restaurant[] = [];
  private _data: Observable<Restaurant>;

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this._dataService.getData()
      .subscribe((data) => {
        // Doing this temp variable instead of 'data: any' as parameter
        // because it is structured strangely - throws an error if you try
        // to acces data.restaurants directly
        // TODO: investigate, its probably how its structured in the service
        let tmp: any = data;
        this.restaurants = tmp.restaurants;
        console.log(this.restaurants);
      });
  }

  onSelect(restaurant): void {
    // this._dataService.chooseRestaurant(restaurant);
    this.restaurantSelected.emit(restaurant);
    // console.log(restaurant);
  }

}