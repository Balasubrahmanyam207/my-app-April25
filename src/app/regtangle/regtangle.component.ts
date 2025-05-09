import { Component } from '@angular/core';

@Component({
  selector: 'app-regtangle',
  templateUrl: './regtangle.component.html',
  styleUrls: ['./regtangle.component.css']
})
export class RegtangleComponent {

  
  num1:number=0;
  num2:number=0;
  sum:number=0;
  a(){this.sum=this.num1*this.num2;

  } 
  p(){this.sum=2*this.num1+2*this.num2;}
  
  
}
