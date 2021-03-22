import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  _url:string = "http://localhost:5488/api/cities"
  constructor(private _http: HttpClient) { 
  }


  getCities(): any{
    return this._http.get(this._url);
  }

}
