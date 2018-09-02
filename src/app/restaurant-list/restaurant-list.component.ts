import { Component, OnInit } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { DataService } from '../data.service';
import { Restaurant } from '../restaurant';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.pug',
  styleUrls: ['./restaurant-list.component.sass']
})
export class RestaurantListComponent implements OnInit {

  public restaurants: Restaurant[] = [];
  private _data: Observable<Restaurant>;

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this._dataService.getData()
      .subscribe((data) => {
        // Doing this temp variable instead of 'data: any' as parameter
        // because I want data to be type checked by the function but
        // it is structured strangely - throws an error if you try
        // to acces data.restaurants directly
        // TODO: investigate, its probably how its structured in the service
        let tmp: any = data;
        this.restaurants = tmp.restaurants;
        console.log(this.restaurants);
      });
  }

  onSelect(restaurant: Restaurant): void {
    // this._dataService.chooseRestaurant(restaurant);
    console.log(restaurant);
  }

}