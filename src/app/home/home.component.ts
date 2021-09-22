import { Component, OnInit,} from '@angular/core';
import { CityService } from '../city.service';
import { SelectedBusService } from '../selected-bus.service';
import {Router,ActivatedRoute}  from '@angular/router'
import { FormGroup,FormControl,Validators } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public classes: any;
  form: any;
  select: any;
  data: any;

  
  constructor(private cityservice:CityService,
    private router:Router,
    private route:ActivatedRoute,
    private selectedbusservice:SelectedBusService) { 

      this.form=new FormGroup(
        {
            From_city : new FormControl("",Validators.required),
            To_city : new FormControl("",Validators.required) ,
           Date : new FormControl("",Validators.required) 
        }
      )
    }

  onSubmit(value:any){
    console.log(value);
      this.selectedbusservice.addSelectedBus(value).subscribe(data => {
        this.selectedbusservice.setSelectedBusData(data);
        if(data.length > 0)
        this.gotoPage('search-bus');
        else alert("No bus found");
       console.log(data);
       this.data=data;
        });
  }

  ngOnInit(): void {
    this.getBusCity();
    
   }
 

getBusCity(){
  this.cityservice.getBusCity().subscribe((data) => {
    console.log(data);
    this.classes = data;
  });
}
gotoPage(pageName:string):void{


 this.router.navigate([`${pageName}`]);
}
}
