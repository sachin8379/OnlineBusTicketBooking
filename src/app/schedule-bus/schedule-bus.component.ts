import { Component, OnInit } from '@angular/core';
import { BusScheduleService } from '../bus-schedule.service';
import { BusDetailService } from '../bus-detail.service'
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ScheduleDialogComponent } from '../schedule-dialog/schedule-dialog.component';
@Component({
  selector: 'app-schedule-bus',
  templateUrl: './schedule-bus.component.html',
  styleUrls: ['./schedule-bus.component.css']
})
export class ScheduleBusComponent implements OnInit {
  hide = true;
  
  displayedColumns: string[] = ['busname', 'from_city', 'to_city', 'from_duration','to_duration','depature_time','arrival_time','busfare','available_seats','Edit','Delete'];
  BusDetail=null
  dataSource:any;
  class:any;
  name:any;
  classes:any;
  
  constructor( private busscheduleservice:BusScheduleService,
     private busdetailservice:BusDetailService,
     public dialog: MatDialog){}

     openDialog(data:any) {
      this.dialog.open(ScheduleDialogComponent , {
        width: '50%',
        height: '100%',
       
        data:data
      });
    }

  onSubmit(value:any){
    console.log(value); 
   }
  getBusCity(){
    this.busscheduleservice.getBusCity().subscribe((data) => {
      console.log(data);
      this.class = data;
      this.dataSource = new MatTableDataSource(this.class);
    });
  }
   getBusName(){
     this.busdetailservice.getBusName().subscribe((data) =>{
       console.log(data);
       this.name = data;
       this.dataSource = new MatTableDataSource(this.name);
     });
   }
   getBusSchedule(){
    this.busscheduleservice.getBusSchedule().subscribe((data) => {
      console.log(data);
      this.classes = data;
      this.dataSource = new MatTableDataSource(this.classes);
    });
  }
  deleteBusSchedule(busdetail: { id: any; }){
    this.busscheduleservice.deleteBusSchedule(busdetail.id).subscribe(data=>{
      console.log(data);
      this.getBusSchedule();
      },
        err => console.log(err)
      );
  }
  ngOnInit(): void {

    this.getBusCity();
    this.getBusName();
    this.getBusSchedule();
   }
}

