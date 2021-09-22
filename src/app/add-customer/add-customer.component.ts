import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BusDetailService } from '../bus-detail.service';
import { ClassService } from '../class.service';
import { CustomerService } from '../customer.service';
import {Router}  from '@angular/router'

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  public customer : any = {};
  public classes: any;

  email = new FormControl('', [Validators.required, Validators.email]);

  constructor( private customerservice:CustomerService,
                private classsercice:ClassService,
                private busdetailservice:BusDetailService,
                private router:Router,
                private _snackBar: MatSnackBar) { }

  onSubmit(value:any){
     console.log(value); 
     this.customerservice.addCustomer(value).subscribe(data => {
      this._snackBar.open(data.message,  "your response submitted sucessifully !", {
        duration: 5 * 1000,
      });

      this.gotoPage('customer');
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

  gotoPage(pageName:string):void{
    this.router.navigate([`${pageName}`]);
  }

}
