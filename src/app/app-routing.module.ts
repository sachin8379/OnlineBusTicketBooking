import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AllBusComponent} from './all-bus/all-bus.component';

const routes: Routes = [
  {path:'all-bus',component:AllBusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
