import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BusDetailService } from '../bus-detail.service';
import { SelectedBusService } from '../selected-bus.service';
import {Router,ActivatedRoute}  from '@angular/router'
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-search-bus',
  templateUrl: './search-bus.component.html',
  styleUrls: ['./search-bus.component.css']
})
export class SearchBusComponent implements OnInit {
  name: any;
 
  dataSource: any;
  select: any;
  quantity:[] = [];
  
 
  
 
 
     constructor(private busdetailservice:BusDetailService,
      private router:Router,
      private route:ActivatedRoute,
        private selectedbusservice:SelectedBusService) { }

        onSubmit(value:any){
          console.log(value);
        }

        gotoPage(pageName:string):void{
          this.router.navigate([`${pageName}`]);
        }
  ngOnInit(): void {
   this.selectedbusservice.selectedBusData.subscribe((data)=>
   {

      console.log(data);
      this.select=data;
      this.select.forEach((element:any) => {
        element.quantity = 1;
        element.price = element.busfare;
      
      });
   });
  
   }
   plus(i:number){
   
     if (this.select[i].available_seats > this.select[i].quantity) 
     {
        this.select[i].quantity++;
        this.select[i].price = this.select[i].busfare* this.select[i].quantity;

      }
      

         
   }
    minus(i:number){
   
    if(this.select[i].quantity > 1 )
    {
    this.select[i].quantity--;
    this.select[i].price = this.select[i].price - this.select[i].busfare;
    }
   }
   bookTicket(i:number){
   
    this.selectedbusservice.setBookedBusData(this.select[i]);
     
     console.log(this.select[i]);
   
    
       
   
 }
}

export declare class MatDividerModule {
}


// this.selectedbusservice.selectedBusData.subscribe((data)=>
// {
     
// });