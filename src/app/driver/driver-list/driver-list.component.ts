import { Component, EventEmitter, Output } from '@angular/core';
import { Vehicule } from 'src/app/vehicule/vehicule';
import { Driver } from '../driver';
import { DomSanitizer } from '@angular/platform-browser';
import { VehiculeService } from 'src/app/vehicule/vehicule.service';
import { DriverService } from '../driver.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-driver-list',
  templateUrl: './driver-list.component.html',
  styleUrls: ['./driver-list.component.css']
})
export class DriverListComponent {
  @Output() driverSelected = new EventEmitter<Driver>();
  drivers : Driver[] = this.driverService.getDrivers();

  constructor(private vehiculeService : VehiculeService, private driverService :  DriverService, 
    private router: Router, private activatedRoute: ActivatedRoute) { }

  onDriverSelected(drv : Driver){
    this.driverSelected.emit(drv);
  }

  addDriver() {
     this.router.navigate(["new"], {relativeTo:this.activatedRoute});
  }
  

}
