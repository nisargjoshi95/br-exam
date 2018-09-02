import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Restaurant } from './restaurant';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private _CORS: string = 'https://cors-anywhere.herokuapp.com/';
  private _url: string = 'https://s3.amazonaws.com/br-codingexams/restaurants.json';

  private _selectedRestaurant: Restaurant;

  constructor(private http: HttpClient) { }

  getData(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(this._CORS + this._url);
  }
}
