import { Component } from '@angular/core';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent {
q() {
throw new Error('Method not implemented.');
}
  
  num1:number=0;
  sum:number=0;
  a(){
    this.sum=this.num1*this.num1*3.14;
  }
  p(){
    this.sum=2*3.14*this.num1;
  }
  

}
