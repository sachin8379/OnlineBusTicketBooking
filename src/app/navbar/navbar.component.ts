import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private service:LoginService) { }
 login:any;

 
  ngOnInit(): void {
      this.service.LoginData.subscribe((data)=>
      {
          console.log(data);
          this.login=data.code;
         
     });
  
  }

}
