import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { CustomerService } from '../customer.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-cust-dialog',
  templateUrl: './cust-dialog.component.html',
  styleUrls: ['./cust-dialog.component.css']
})
export class CustDialogComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);
 
  
  constructor(private customerservice:CustomerService,
    private _snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data:any) { }

  
  onSubmit(value:any){
    console.log(value); 
   
  }
  updateCustomer(){
    this.customerservice.updateCustomer(this.data).subscribe(
      (data)=>{
 console.log(data);

      }
    );
    
  }
  openSnackBar(message: string ,action: string)  {
    this._snackBar.open(message,action);
}

 getErrorMessage() {
   if (this.email.hasError('required')) {
     return 'You must enter a value';
   }

   return this.email.hasError('email') ? 'Not a valid email' : '';
 }

  ngOnInit(): void {
  }

}
