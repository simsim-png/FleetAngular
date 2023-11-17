import { Component, Input } from '@angular/core';
import { Vehicule } from 'src/app/vehicule/vehicule';
import { Driver } from '../driver';
import { VehiculeService } from 'src/app/vehicule/vehicule.service';

@Component({
  selector: 'app-driver-details',
  templateUrl: './driver-details.component.html',
  styleUrls: ['./driver-details.component.css']
})
export class DriverDetailsComponent {

  @Input() driver !: Driver;
  vehicules : Vehicule[] = this.vehiculeService.getVehicules();
  

  constructor(private vehiculeService : VehiculeService) { }
}
