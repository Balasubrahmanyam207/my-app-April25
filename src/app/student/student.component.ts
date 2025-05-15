import { Component } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  students:any=[];
  constructor(private _student:StudentService){
    this._student.student().subscribe((data:any)=>{
      console.log(data);
      this.students=data;
      console.log(this.students);
    }),(err:any)=>{
    alert('internal server error')
    }
  }
}