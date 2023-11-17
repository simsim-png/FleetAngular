import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiculeDialogComponent } from './vehicule-dialog/vehicule-dialog.component';
import { VehiculeComponent } from './vehicule.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    VehiculeComponent,
    VehiculeDialogComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    VehiculeComponent
  ]
})
export class VehiculeModule { }
