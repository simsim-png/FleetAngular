import { Injectable } from '@angular/core';
import { Vehicule } from './vehicule';

@Injectable({
  providedIn: 'root'
})
export class VehiculeService {
  
  vehicules : Vehicule[] = [
    new Vehicule(0, "Toyota", "ABQ123", 2000),
    new Vehicule(1, "Kia", "BZA456", 7894),
    new Vehicule(2, "Renault", "RTK412", 5642)
  ]

  constructor() { }

  getVehicules(): Vehicule[]{
    return this.vehicules;
  }
}
