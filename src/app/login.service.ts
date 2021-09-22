import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  Login = new BehaviorSubject<any>([]);

  LoginData= this.Login.asObservable();
  
  url= 'http://localhost:8080/login/';

  constructor( private http:HttpClient) { }

  addLogin(data:any) : Observable<any>{

    let url = this.url + "addLogIn";
     return this.http.post(url+'',data)
 
 
   }
   getLogin(data:any):Observable<any>{
     let url=this.url+"getLogIn";
     return this.http.get(url);
   }

   login(data:any):Observable<any>{
     let url=this.url+"getAdmin";
     return this.http.post(url+'',data);

   }
   
   getAdmin():Observable<any>{
     let url=this.url+"getAdmin";
    return this.http.get(url);
   }

   setAdminData(data:any){

    this.Login.next(data);
   }
}
