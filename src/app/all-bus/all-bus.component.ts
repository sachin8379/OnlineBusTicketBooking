import { Component, OnInit } from '@angular/core';
import {MatTableDataSource, MatTableModule} from  '@angular/material/table';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BusDetailService } from '../bus-detail.service'
import { HttpClient } from '@angular/common/http';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';








@Component({
  selector: 'app-all-bus',
  templateUrl: './all-bus.component.html',
  styleUrls: ['./all-bus.component.css']
})
export class AllBusComponent implements OnInit {

    displayedColumns: string[] = ['id','busclass', 'buscode', 'name', 'totalseat','Edit','Delete'];
    BusDetail=null
    dataSource:any;
   
  


  
    
constructor( private busdetailservice:BusDetailService,
    private http:HttpClient,
    public dialog: MatDialog

   
    ) {
   }
   openDialog(data:any) {
    this.dialog.open(DialogComponent , {
      width: '250px',
      data:data
    });
  }

   ngOnInit(): void {
    this.getAllBuses();
   }
 

   getAllBuses(){
  this.busdetailservice.getAllBuses().subscribe(data => {
    console.log(data);
   this.dataSource = new MatTableDataSource(data);
  });

}
  deleteBusDetail(busdetail: { id: any; }){
    this.busdetailservice.deleteBusDetail(busdetail.id).subscribe(data=>{
      console.log(data);
      this.getAllBuses();
      },
        err => console.log(err)
      );
  }

 

}
