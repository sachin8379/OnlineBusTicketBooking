import { Component, OnInit } from '@angular/core';
import { CityService } from '../city.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {
  value:any;

  url= 'http://localhost:8080/master/addBusCity';

  constructor( private cityservice:CityService) { }

  onSubmit(value:any){
    console.log(value); 
    this.cityservice.addBusCity(value).subscribe(data => {
      if(data.code == 0){
        this.value= null;
      }
    
  });
}

  ngOnInit(): void {
  
  }
}



