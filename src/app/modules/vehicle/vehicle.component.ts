import { Component, OnInit } from '@angular/core';
import { Resume } from 'src/app/models/resume';
import { Vehicle } from 'src/app/models/vehicle';
import { VehicleService } from 'src/app/services/vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {

  listVehicles: Vehicle[] = []
  listResume: Resume[] = [];

  constructor(private vehicleService: VehicleService) { }

  ngOnInit(): void {
    this.vehicleService.getVehicles().subscribe(result =>{
      this.listVehicles = result as Vehicle[];
      this.getTotal()
    });
  }

  getTotal(){
    this.listVehicles.forEach(vehicle =>{
      let existeVehiculo = this.listResume.find(x => x.marca == vehicle.marca)
      if(existeVehiculo != undefined){
        existeVehiculo.cantidad = existeVehiculo.cantidad + 1
      }else{
        let nuevaMarca: Resume = new Resume(vehicle.marca, 1)
        this.listResume.push(nuevaMarca)
      }
    });
  }

}
