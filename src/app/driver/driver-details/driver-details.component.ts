import { Component, Input, OnInit } from '@angular/core';
import { Vehicule } from 'src/app/vehicule/vehicule';
import { Driver } from '../driver';
import { VehiculeService } from 'src/app/vehicule/vehicule.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DriverService } from '../driver.service';

@Component({
  selector: 'app-driver-details',
  templateUrl: './driver-details.component.html',
  styleUrls: ['./driver-details.component.css']
})
export class DriverDetailsComponent implements OnInit{

  @Input() driver !: Driver;
  id!: number;
  editMode: boolean = false;
  vehicules : Vehicule[] = this.vehiculeService.getVehicules();
  

  constructor(private vehiculeService : VehiculeService, 
              private activatedRoute: ActivatedRoute, 
              private driverService: DriverService,
              private router: Router) { }

  ngOnInit(): void {
    this.id =+ this.activatedRoute.snapshot.params["id"];
    this.editMode = this.id != null && !isNaN(this.id);
    if(!this.editMode){
      this.driver = new Driver();
      this.driver.vehicule = new Vehicule();
    }
  }

  saveDriver(){
    this.driverService.saveDriver(this.driver);
    this.router.navigate(["/drivers"]);
  }



}
