import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ClassService {

  url= 'http://localhost:8080/master/';
  constructor(private http:HttpClient) { }

  addBusClass(data:any) : Observable<any>{
    let url = this.url + "addBusClass";
    return this.http.post(url+'',data)
 
 
  }
  getBusClass() : Observable<any> {
    let url = this.url + "busclasses";
    return this.http.get(url);
  }
}
