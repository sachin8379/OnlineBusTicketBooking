import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectedBusService {

  selectedData = new BehaviorSubject<any>([]);

  selectedBusData= this.selectedData.asObservable();

  bookedData = new BehaviorSubject<any>([]);

  bookedBusData= this.bookedData.asObservable();

  constructor(private http:HttpClient) { }
  url= 'http://localhost:8080/busschedule/';
  addSelectedBus(data:any) : Observable<any>{
    let url=this.url+"addSelectedBus";
    return this.http.post(url,data)
  }

  setSelectedBusData(data:any)
  { this.selectedData.next(data);
   }

   setBookedBusData(data:any){

    this.bookedData.next(data);
   }

 }
