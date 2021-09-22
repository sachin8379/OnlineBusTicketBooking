import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusDetailService {

  url= 'http://localhost:8080/busdetails/';
  
  constructor(
    private http: HttpClient
   ) { }

  addBusDetail(data:any): Observable<any>{
    let url=this.url+"add";
    return this.http.post(url+'',data)
  }
  getBusDetail(data:any):Observable<any>{
    let url=this.url+"addBusDetail";
    return this.http.get(url);
  }

  getAllBuses() :Observable<any> {
    let url=this.url+"all";
    return this.http.get(url);
  }
 
  public deleteBusDetail(id: any){

    let url=this.url+"deleteBusDetail?id=" +id;
    return this.http.delete(url);
  }
  public updateBusDetail(data:any):Observable<any>{
    let url=this.url+"updateBusDetail";
    return this.http.put(url+'',data);
  }
   getBusName():Observable<any>{
       let url=this.url+"getBusName";
       return this.http.get(url);
   }
}
