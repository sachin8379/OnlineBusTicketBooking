import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BusDetailService } from '../bus-detail.service';
import { BusScheduleService } from '../bus-schedule.service';
import {Router}  from '@angular/router'
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  public classes: any;
 public class: any;
 public name: any;
 public data : any = {};
 
 

 
  

  constructor(private busscheduleservice:BusScheduleService,
    private busdetailservice:BusDetailService,
    private _snackBar: MatSnackBar,
    private router:Router
  ) { }

  onSubmit(value:any){
    console.log(value); 
    this.busscheduleservice.addBusSchedule(value).subscribe(data => {
      
      this._snackBar.open(data.message,  "your response submitted sucessifully !", {
        duration: 5 * 1000,
      });
      this.gotoPage('schedule-bus');
    });
  
}


 

  getBusCity(){
    this.busscheduleservice.getBusCity().subscribe((data) => {
      console.log(data);
      this.class = data;
    });
  }
   getBusName(){

     this.busdetailservice.getBusName().subscribe((data) =>{
       console.log(data);
       this.name = data;

     });
   }
   getBusSchedule(){
    this.busscheduleservice.getBusSchedule().subscribe((data) => {
      console.log(data);
      this.classes = data;
    });
  }
  gotoPage(pageName:string):void{
    this.router.navigate([`${pageName}`]);
  }
  ngOnInit(): void {

    
    this.getBusCity();
    this.getBusName();
    this.getBusSchedule();
  }
 
}
