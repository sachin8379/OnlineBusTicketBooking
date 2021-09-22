import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { CustomerService } from '../customer.service';
import { BusDetailService } from '../bus-detail.service'
import { ClassService } from '../class.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import {MatTableDataSource, MatTableModule} from  '@angular/material/table';
import { CustDialogComponent } from '../cust-dialog/cust-dialog.component';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);

  
  displayedColumns: string[] = ['name','mobNo', 'email', 'gender', 'address','Edit','Delete'];
  customer=null;
  dataSource:any;
 

  constructor( private customerservice:CustomerService, private classsercice:ClassService,
     private busdetailservice:BusDetailService,
                public dialog: MatDialog,
                private _snackBar: MatSnackBar) { }

                
                onSubmit(value:any){
                  console.log(value); 
                  
                }
  

                openDialog(data:any) {
                  this.dialog.open(CustDialogComponent , {
                    width: '250px',
                    data:data
                  });
                }           
  ngOnInit(): void {
    
      this.getAllCustomer();
  }

  getAllCustomer(){
    this.customerservice.getAllCustomer().subscribe(data => {
      console.log(data);
     this.dataSource = new MatTableDataSource(data);
    });
  
  }
  deleteCustomer(customer: { id: any; }){
    this.customerservice.deleteCustomer(customer.id).subscribe(data=>{
      console.log(data);
      this.getAllCustomer();
      },
        err => console.log(err)
      );
  }

}
