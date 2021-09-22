import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { ClassService } from '../class.service';
import { BusDetailService } from '../bus-detail.service'
import { MatSnackBar } from '@angular/material/snack-bar';
import {Router}  from '@angular/router'



@Component({
  selector: 'app-bus-detail',
  templateUrl: './bus-detail.component.html',
  styleUrls: ['./bus-detail.component.css']
})
export class BusDetailComponent implements OnInit {  
  value :any
  public classes: any;
  public busDetails : any = {};
  onSubmit(value:any){
    console.log(value); 
    this.busdetailservice.addBusDetail(value).subscribe(data => {
      
      this._snackBar.open(data.message,  "your response submitted sucessifully !", {
        duration: 5 * 1000,
      });
      this.gotoPage('all-bus');
    });
      
    }
  
   constructor(
    private service:ClassService,
    private busdetailservice:BusDetailService,
    private _snackBar: MatSnackBar,
    private router:Router
  
   
   
    
  ) {
    
   }

  ngOnInit(): void {
   this.getBusClass();
  }
  


  getBusClass(){
    this.service.getBusClass().subscribe(data => {
      console.log(data);
      this.classes = data;
    });
  }
    gotoPage(pageName:string):void{
    this.router.navigate([`${pageName}`]);
  }

    
}