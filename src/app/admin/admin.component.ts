import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  passwordInput= new FormControl('', [Validators.required, Validators.min(3) ])
  hide = true;
  constructor(private loginservice:LoginService) {
  
  
    }
   onSubmit(value:any){
    console.log(value);
    this.loginservice.addLogin(value).subscribe(data=>{

     //console.log(data);
     

    });

 }


  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  ngOnInit(): void {
  }

}
