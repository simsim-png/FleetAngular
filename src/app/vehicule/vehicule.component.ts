import { Component, OnInit } from '@angular/core';
import { Vehicule } from './vehicule';
import { MatTableDataSource } from '@angular/material/table';
import { VehiculeService } from './vehicule.service';

@Component({
  selector: 'app-vehicule',
  templateUrl: './vehicule.component.html',
  styleUrls: ['./vehicule.component.css']
})
export class VehiculeComponent implements OnInit{

  displayedColumns: string[] = ['id', 'matricule', 'brand', 'currentKm'];

  dataSource !: MatTableDataSource<Vehicule>;

  constructor(private vehiculeService : VehiculeService) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.vehiculeService.getVehicules());
  }
}
