import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { element } from 'protractor';
import { CustomerService } from '../customer.service';
import { SelectedBusService } from '../selected-bus.service';

@Component({
  selector: 'app-ticket-print',
  templateUrl: './ticket-print.component.html',
  styleUrls: ['./ticket-print.component.css']
})
export class TicketPrintComponent implements OnInit {

  displayedColumns: string[] = ['busname', 'from_city', 'to_city','busfare', 'mobileNumber', 'age', 'name', 'quantity','price','Delete'];
  invoice: any;
  select: any;
  dataSource: any;
  name: any;
  mobNo: any;
  age: any;
  ticket: any;
 

  constructor(private customerservice:CustomerService,
    private  selectedbusservice:SelectedBusService) { }

  ngOnInit(): void {

     this.getBusTicket();

    let ticketdetails:any = []
     let ticket:any = {};
     ticket.nmobileNumber = '888888888'
    

      this.selectedbusservice.bookedBusData.subscribe((data)=>
      {
      
       
          this.select=data;
          console.log(this.select);
      
      
         });

    this.customerservice.passengerData.subscribe((data)=>{
   
    this.invoice= data;
  console.log(this.invoice);
  
      this.invoice.forEach((element:any) => {
       
        this.name = element.name;
        this.mobNo = element.mobileNumber;
        this.age = element.age;
       

  
  
  
   });



  
 
  });

  ticket=this.select;
  ticket.name=this.name;
  ticket.mobNo=this.mobNo;
  ticket.age=this.age;
  ticketdetails.push(ticket);
  // this.dataSource = new MatTableDataSource(ticketdetails);


   }
   getBusTicket(){

    this.customerservice.getTicket().subscribe(data=>{

      console.log(data);
      this.ticket=data;
      this.dataSource = new MatTableDataSource(this.ticket);


    });
  }
  deleteTicket(busdetail: { id: any; }){
    this.customerservice.deleteTicket(busdetail.id).subscribe(data=>{
      console.log(data);
      this.getBusTicket();
      },
        err => console.log(err)
      );
  }
   

}
