import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { BusDetailService } from '../bus-detail.service'
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnakbarComponent } from '../snakbar/snakbar.component';



@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  

  constructor(
    private busdetailservice:BusDetailService,
    private _snackBar: MatSnackBar,
    public dialog:MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any) 
     { 
     }
  public busDetails : any = {};
  public classes: any;
  
  onSubmit(value:any){
    console.log(value); 
    
  }
  updateBusDetail(){
    this.busdetailservice.updateBusDetail(this.data).subscribe(
      (data)=>{
 console.log(data);

      }
    );
  }
    openSnackBar(message: string ,action: string)  {
      this._snackBar.open(message,action);
  }

  

  ngOnInit(): void {
  }

}


