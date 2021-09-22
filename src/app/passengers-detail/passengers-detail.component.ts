import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SelectedBusService } from '../selected-bus.service';
import { Router } from '@angular/router';

import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-passengers-detail',
  templateUrl: './passengers-detail.component.html',
  styleUrls: ['./passengers-detail.component.css']
})
export class PassengersDetailComponent implements OnInit {
   passengerForm: FormGroup;
   select: any;
   passengerArray:FormArray;
  constructor(
    private _snackBar: MatSnackBar,
    private customerservice:CustomerService ,
    private selectedbusservice:SelectedBusService,
    private fb:FormBuilder,
    private route:Router
  ) { 
     this.passengerArray = this.fb.array([]);
     this.passengerForm=this.fb.group({
       passengerArray:this.fb.array([this.createItem()]),
     })
  }


  createItem(): FormGroup {
    return this.fb.group({
      name: '',
      mobileNumber: '',
      age: ''
    });
  }


  onSubmit(){

      let data = this.passengerForm.value

     this.customerservice.setPassengerData(data.passengerArray)
     this.gotoPage('invoice')
    this.customerservice.passenger= data.passengerArray;
   
   

   
  

     console.log(data);
     this.customerservice.addPassenger(data).subscribe(data => {
       this._snackBar.open(data.message,  "your response submitted sucessifully !", {
        duration: 5 * 1000,
       });
     });

  }

  ngOnInit(): void {
     this.selectedbusservice.bookedBusData.subscribe( data=> {
      for(let i=1; i < data.quantity; i++){
       this.passengerArray = this.passengerForm.get('passengerArray') as FormArray;
        this.passengerArray.push(this.createItem());
       }
     })
}
gotoPage(pageName:string):void{
  this.route.navigate([`${pageName}`]);
}

get userFormGroups () {
  return this.passengerForm.get('passengerArray') as FormArray
}

}
