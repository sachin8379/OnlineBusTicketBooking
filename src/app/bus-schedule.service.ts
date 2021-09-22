import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BusScheduleService {

  constructor(private http: HttpClient) { }
  url= 'http://localhost:8080/busschedule/';
  

  addBusCity(data:any) : Observable<any>{
    let url=this.url+"add";
    return this.http.post(url,data)
  }
  getBusCity() : Observable<any> {
    let url = " http://localhost:8080/master/cities";
    return this.http.get(url);
  }
  addBusSchedule(data:any):Observable<any>{
    let url =" http://localhost:8080/busschedule/add";
    return this.http.post(url,data)

  }
  getBusSchedule() : Observable<any> {
    let url = " http://localhost:8080/busschedule/get";
    return this.http.get(url);
  }
  public deleteBusSchedule(id: any){

    let url=this.url+"deleteBusSchedule?id=" +id;
    return this.http.delete(url);
  }
  public updateBusSchedule(data:any):Observable<any>{
    let url=this.url+"updateBusSchedule";
    return this.http.put(url+'',data);
  }
}
