import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
calculate() {
throw new Error('Method not implemented.');
}

 
  num1:number=0;
  num2:number=0;
  sum:number=0;
  
  

  Sum(){
    this.sum=this.num1+this.num2;
    
  }
  Sub(){
    this.sum=this.num1-this.num2;
    
  }
  Mul(){
    this.sum=this.num1*this.num2;
  }
  div(){
    this.sum=this.num1/this.num2;
  }


}
