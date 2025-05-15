import { Component } from '@angular/core';
import { VehiclesService } from '../vehicles.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent {
pagination() {
throw new Error('Method not implemented.');
}
Limit: any;
page: any;
sort() {
throw new Error('Method not implemented.');
}
  vehicles:any=[];
  constructor(private _vehicleSerevice:VehiclesService) {this.loadVehicles();}

  loadVehicles(){
    {this._vehicleSerevice.getVehicles().subscribe((data:any)=>{
    console.log(data);
    this.vehicles=data;
    console.log(this.vehicles);
  },(err:any)=>{
    alert("Internal Server Error")}
  )};
}


 keywords:any='';
 search()
{ this._vehicleSerevice.filteredVehicles(this.keywords).subscribe(
  (data:any)=>{this.vehicles=data}
)};

column:any='';
order:any='';
Sort(){
  this._vehicleSerevice.sortedVehicles(this.column,this.order).subscribe(
    (data:any)=>{
      console.log(data);
      this.vehicles=data
    },(err:any)=>{
      alert("Internal Server Error!;")
    }
  )
}

limit:number=0;
Page:number=0;
Pagination(){
  this._vehicleSerevice.paginatedVehicles(this.limit,this.page).subscribe(
    (data:any)=>{
      console.log(data);
      this.vehicles=data;
    },(err:any)=>{
      alert("internal server error")
    }
  )
}
 Keywords:any=''

delete(id:number){
  if(confirm("Are you sure to delete?")==true){

   this._vehicleSerevice.deleteVehicles(id).subscribe(
  (data:any)=>{
    alert("record deleted successfully");
    },(err:any)=>{
      alert('internalserver error')
    }

)}else{
  alert("You have cancelled delete")
}
}

}
function keywords(keywords: any, any: any) {
  throw new Error('Function not implemented.');
}

