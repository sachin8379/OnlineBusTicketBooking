import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl,  FormGroup,  NgForm, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  
  login:any;
  loginForm: FormGroup;
  hide = true;
 
   constructor( private fb:FormBuilder,private loginservice:LoginService,
    private route:Router) {
    this.loginForm = this.fb.group(

      {
        userName : new FormControl('',[Validators.required,Validators.minLength(4)]),
         password:new FormControl('',[Validators.required,Validators.minLength(6)])
       }
     )
    }

  ngOnInit(): void {

    
  }
  
  onSubmit(value:any){
     console.log(value);
     this.loginservice.login(value).subscribe(data=>{
      this.loginservice.setAdminData(data);
      if(data.code==1)
      this.gotoPage('/schedule-bus');
     if(data.code==0)
     alert("Invalid email or password !");
     

     });

  }
 
  gotoPage(pageName:string):void{
    this.route.navigate([`${pageName}`]);
  }

  onLogin(){}

}
