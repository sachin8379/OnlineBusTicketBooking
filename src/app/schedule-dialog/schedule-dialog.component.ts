import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { BusDetailService } from '../bus-detail.service'
import { BusScheduleService } from '../bus-schedule.service';

@Component({
  selector: 'app-schedule-dialog',
  templateUrl: './schedule-dialog.component.html',
  styleUrls: ['./schedule-dialog.component.css']
})
export class ScheduleDialogComponent implements OnInit {
 
  public classes: any;
  public class: any;
  public name: any;
  
  
  dataSource:any;

  constructor(private busscheduleservice:BusScheduleService,
    private busdetailservice:BusDetailService,
    private _snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data:any) { }


  
    getBusCity(){
      this.busscheduleservice.getBusCity().subscribe((data) => {
        console.log(data);
        this.class = data;
        this.dataSource = new MatTableDataSource(data);
      });
    }
     getBusName(){
  
       this.busdetailservice.getBusName().subscribe((data) =>{
         console.log(data);
         this.name = data;
         this.dataSource = new MatTableDataSource(data);
       });
     }
     getBusSchedule(){
      this.busscheduleservice.getBusSchedule().subscribe((data) => {
        console.log(data);
        this.classes = data;
        this.dataSource = new MatTableDataSource(data);
      });
     }
  updateBusSchedule(){
    this.busscheduleservice.updateBusSchedule(this.data).subscribe(
      (data)=>{
 console.log(data);

      }
    );
  }
  openSnackBar(message: string ,action: string)  {
    this._snackBar.open(message,action);
}


  ngOnInit(): void {
    this.getBusCity();
    this.getBusName();
    this.getBusSchedule();
  }

}
