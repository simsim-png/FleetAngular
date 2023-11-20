import { Injectable } from '@angular/core';
import { VehiculeService } from '../vehicule/vehicule.service';
import { Driver } from './driver';

@Injectable({
  providedIn: 'root'
})
export class DriverService {


  drivers : Driver[] = [
    new Driver(0, "Mohammed", "SAFIR", this.vehiculeService.getVehicules()[0],'assets/img/driver-1.png'),
    new Driver(1, "Mohammed", "BOUSSAID", this.vehiculeService.getVehicules()[1],'assets/img/driver-2.png'),
    new Driver(2, "Ayyoub", "TELMOUDY", this.vehiculeService.getVehicules()[2],'assets/img/driver-3.png')
  ]

  constructor(private vehiculeService : VehiculeService) { }

  getDrivers(): Driver[]{
    return this.drivers;
  }

  getDriverById(id: number): Driver{
    return  this.drivers[id];
  }

  saveDriver(driver: Driver){
    this.drivers.push(driver);
  }

}
