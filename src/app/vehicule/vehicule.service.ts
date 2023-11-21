import { Injectable } from '@angular/core';
import { Vehicule } from './vehicule';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehiculeService {
  
  vehicules : Vehicule[] = [
    new Vehicule(0, "Toyota", "ABQ123", 2000),
    new Vehicule(1, "Kia", "BZA456", 7894),
    new Vehicule(2, "Renault", "RTK412", 5642)
  ]

  vehiculeChanged = new Subject<void>();

  constructor() { }

  getVehicules(): Vehicule[]{
    return this.vehicules;
  }

  getVehiculeById(id: number): Vehicule{
    return this.vehicules[id];
  }

  saveVehicule(vehicule: Vehicule){
    if(vehicule.id){
      this.vehicules[vehicule.id] = vehicule;
    }
    else{
      vehicule.id = this.vehicules.length;
      this.vehicules.push(vehicule);
    }
  }
}
