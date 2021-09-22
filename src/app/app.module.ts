import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BusDetailComponent } from './bus-detail/bus-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { ClassComponent } from './class/class.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import {HttpClientModule} from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSelectModule} from '@angular/material/select';
import { MatTableModule} from '@angular/material/table';
import { AllBusComponent } from './all-bus/all-bus.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import { from } from 'rxjs';
import { DialogComponent } from './dialog/dialog.component';
import { SnakbarComponent } from './snakbar/snakbar.component';
import { CustomerComponent } from './customer/customer.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { CustDialogComponent } from './cust-dialog/cust-dialog.component';
import { HomeComponent } from './home/home.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import {MatCardModule}  from '@angular/material/card';
import {MatIconModule}  from '@angular/material/icon';
import { CitiesComponent } from './cities/cities.component';
import { ScheduleBusComponent } from './schedule-bus/schedule-bus.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { AddComponent } from './add/add.component';
import { ScheduleDialogComponent } from './schedule-dialog/schedule-dialog.component';
import { SearchBusComponent } from './search-bus/search-bus.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { PassengersDetailComponent } from './passengers-detail/passengers-detail.component';
import { AdminComponent } from './admin/admin.component';
import { TicketPrintComponent } from './ticket-print/ticket-print.component';






const appRoutes: Routes=[
  {path:'class',component: ClassComponent},
  {path:'city',component: CitiesComponent},
  {path:'all-bus',component:AllBusComponent},
  {path:'all-bus',component:AllBusComponent},
  {path:'bus-detail',component: BusDetailComponent},
  {path:'add-customer',component: AddCustomerComponent},
  {path:'',component: HomeComponent},
  {path:'customer',component: CustomerComponent},
  {path:'schedule-bus',component: ScheduleBusComponent},
  {path:'add',component: AddComponent},
  {path:'search-bus',component: SearchBusComponent},
  {path:'invoice',component: InvoiceComponent},
  {path:'passenger_detail',component: PassengersDetailComponent},
  {path:'admin',component: AdminComponent},
  {path:'ticket_print',component: TicketPrintComponent},
  {path:'register-user',component: RegisterUserComponent}
  
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BusDetailComponent,
    ClassComponent,
    AllBusComponent,
    DialogComponent,
    SnakbarComponent,
    CustomerComponent,
    AddCustomerComponent,
    HomeComponent,
    CustDialogComponent,
    RegisterUserComponent,
    CitiesComponent,
    ScheduleBusComponent,
    AddComponent,
    ScheduleDialogComponent,
    SearchBusComponent,
    InvoiceComponent,
    PassengersDetailComponent,
    AdminComponent,
    TicketPrintComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    MatSnackBarModule,
    MatSelectModule,
    MatTableModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatDividerModule,
    MatCardModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgxMaterialTimepickerModule
    
    
    
  ],
  providers: [
    {provide : ErrorStateMatcher,
      useClass:ShowOnDirtyErrorStateMatcher}
  ],
  bootstrap: [AppComponent],
  entryComponents:[DialogComponent,CustDialogComponent]
})
export class AppModule { }
