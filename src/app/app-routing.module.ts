import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DriverDetailsComponent } from './driver/driver-details/driver-details.component';
import { DriverListComponent } from './driver/driver-list/driver-list.component';
import { DriverComponent } from './driver/driver.component';
import { VehiculeComponent } from './vehicule/vehicule.component';



const appRoutes: Routes = [
  {path: '', redirectTo: '/drivers', pathMatch: 'full'},
  {path: 'drivers', component: DriverComponent, children: [
      {path: '', component: DriverListComponent},
      {path: 'new', component: DriverDetailsComponent},
      {path: ':id', component: DriverDetailsComponent}
    ]},
  {path: 'vehicles', component: VehiculeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
