import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private http:HttpClient) { }

  url= 'http://localhost:8080/master/';

  addBusCity(data:any) : Observable<any>{
    let url = this.url + "addBusCity";
    return this.http.post(url+'',data)
  }
  getBusCity() : Observable<any> {
    let url = this.url + "cities";
    return this.http.get(url);
  }
  
}
