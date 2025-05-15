import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VehiclesService } from '../vehicles.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createvehicle',
  templateUrl: './createvehicle.component.html',
  styleUrls: ['./createvehicle.component.css']
})
export class CreatevehicleComponent {
  constructor(private _vehicleService:VehiclesService, private _router:Router){}

  public vehicleForm:FormGroup= new FormGroup({
    Vehicle:new FormControl(),
    color:new FormControl(),
    cost:new FormControl(),
    fuel:new FormControl(),
    manufacturer:new FormControl(),
    image:new FormControl(),
    model:new FormControl(),
    type:new FormControl(),
    tyres:new FormControl(),


  })
  submit(){
    console.log(this.vehicleForm.value);
    this._vehicleService.createVehicles(this.vehicleForm.value).subscribe(
      (data:any)=>{
        console.log(data);
        alert("Vehicle Created Successfully😊");
        this._router.navigateByUrl('/dashboard/vehicles');
      },(err:any)=>{
        alert("internal server error!")
      })
  }
}
