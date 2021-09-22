import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SelectedBusService } from '../selected-bus.service';
import { CustomerService } from '../customer.service';
import { MatTableDataSource } from '@angular/material/table';




@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  

  displayedColumns: string[] = ['name', 'mobileNumber', 'age'];
  select: any;
  dataSource: any;
  invoice: any;
  name: any;
  mobNo: any;
  age: any;
  

  constructor(  private selectedbusservice:SelectedBusService,
    private customerservice:CustomerService

  ) { }

     

  ngOnInit(): void {

   

   
    let invoice:any = {};

     this.selectedbusservice.bookedBusData.subscribe((data)=>
     {
      
        console.log(data);
        this.select=data;
    
   });

  this.customerservice.passengerData.subscribe((data)=>{
   this.invoice= data;
 console.log(this.invoice);
 this.dataSource = new MatTableDataSource(this.invoice);
 this.invoice.forEach((element:any) => {
       
  this.name = element.name;
  this.mobNo = element.mobileNumber;
  this.age = element.age;
 




});


});

invoice=this.select;
invoice.name=this.name;
invoice.mobNo=this.mobNo;
invoice.age=this.age;

this.customerservice.addTicket(invoice).subscribe(data=>{
  console.log(data);
});

  }
  ticketBooked(){

    alert("Your ticket booked successfully !");
  }
 

  printTicket(){
const printContent:any = document.getElementById("componentID");
const WindowPrt:any = window.open('', '', 'left=0,top=0,width=900,height=900,toolbar=0,scrollbars=0,status=0');
WindowPrt.document.write(printContent.innerHTML);
WindowPrt.document.close();
WindowPrt.focus();
WindowPrt.print();
WindowPrt.close();
  }
  
  confirm(value:any){

  }

 

  
}
