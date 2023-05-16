import { map, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { MapTilerResponseInterface } from '../interface/mapTilerResponse.interface';
import { MapLocationsInterface } from '../interface/mapLocations.interface';

const httpOptions = {
  headers: new HttpHeaders({
    skip: 'true',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  constructor(private http: HttpClient) {}
  getLocations(query: string): Observable<MapLocationsInterface[]> {
    console.log(query);
    return this.http
      .get<MapTilerResponseInterface>(
        `https://api.maptiler.com/geocoding/${query}.json?key=KPOlDn1YjHHmA6pUZnAQ`,
       httpOptions
      )
      .pipe(map((data) => data.features));
  }
}
