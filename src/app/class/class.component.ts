import { Component, OnInit } from '@angular/core';
import { ClassService } from '../class.service';
import {MatSnackBar} from '@angular/material/snack-bar';




@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {

  url= 'http://localhost:8080/master/addBusClass';
  
  value:any;
  userForm: any;
  constructor(
    private service:ClassService,
    private _snackBar: MatSnackBar
   ) { 
    
  }

  

  onSubmit(value:any){
    console.log(value); 
    this.service.addBusClass(value).subscribe(data => {
      if(data.code == 0){
        this.value= null;
      }
      
    //this.service.getBusClass(data);
      
      
      
      this._snackBar.open(data.message,  "Ok", {
        duration: 5 * 1000,
      });
    });
    
}


  ngOnInit(): void {
  }

}



