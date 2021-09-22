import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  passenger = new BehaviorSubject<any>([]);

 passengerData= this.passenger.asObservable();
 

 url= 'http://localhost:8080/customer/';
  constructor(
    private http:HttpClient
  ) { }

   addCustomer(data:any) : Observable<any>{

    let url = this.url + "add";
     return this.http.post(url+'',data)
 
 
   }
   getCustomer(data:any):Observable<any>{
     let url=this.url+"addCustomer";
     return this.http.get(url);
   }
  addPassenger(data:any) : Observable<any>{
    let url= 'http://localhost:8080/passenger/add';
    return this.http.post(url+'',data)
 
 
  }
  getPassenger():Observable<any>{
    let url= 'http://localhost:8080/passenger/get';
    return this.http.get(url);
  }
  addTicket(data:any) : Observable<any>{
    let url= 'http://localhost:8080/Ticket/addTicket';
    return this.http.post(url+'',data)
 
 
  }
  getTicket():Observable<any>{
    let url= 'http://localhost:8080/Ticket/getTicket';
    return this.http.get(url);
  }
   getAllCustomer() :Observable<any> {
     let url=this.url+"all";
     return this.http.get(url);
   }
   public deleteCustomer(id: any){

     let url=this.url+"deleteCustomer?id=" +id;
     return this.http.delete(url);
   }
   public updateCustomer(data:any):Observable<any>{
     let url=this.url+"updateCustomer";
     return this.http.put(url+'',data);
   }

   setPassengerData(data:any){

    this.passenger.next(data);
   }
   public deleteTicket(id: any){

    let url= 'http://localhost:8080/Ticket/deleteTicket?id= '+id;
    return this.http.delete(url);
  }
}

//  let url=this.url+"deleteTicket?id=" +id;

