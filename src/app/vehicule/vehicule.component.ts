import { Component, OnInit } from '@angular/core';
import { Vehicule } from './vehicule';
import { MatTableDataSource } from '@angular/material/table';
import { VehiculeService } from './vehicule.service';
import { MatDialog } from '@angular/material/dialog';
import { VehiculeDialogComponent } from './vehicule-dialog/vehicule-dialog.component';

@Component({
  selector: 'app-vehicule',
  templateUrl: './vehicule.component.html',
  styleUrls: ['./vehicule.component.css']
})
export class VehiculeComponent implements OnInit{

  displayedColumns: string[] = ['id', 'matricule', 'brand', 'currentKm'];

  dataSource !: MatTableDataSource<Vehicule>;

  constructor(private vehiculeService : VehiculeService, 
              public dialog: MatDialog
              ) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.vehiculeService.getVehicules());
    this.vehiculeService.vehiculeChanged.subscribe(() => 
        this.dataSource = new MatTableDataSource(this.vehiculeService.getVehicules())
    )
  }

  openDialog(): void {
    this.dialog.open(VehiculeDialogComponent, {
      data:new Vehicule(),
    });
  }

  updateVehicule(id: number): void {
    this.dialog.open(VehiculeDialogComponent, {
      data:this.vehiculeService.getVehiculeById(id),
    });
  }
}
