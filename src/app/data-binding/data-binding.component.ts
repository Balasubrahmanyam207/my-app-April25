import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
// sum: any;
// calculate() {
// throw new Error('Method not implemented.');
// }

  message:string='Good Moring Everyone!'
isDisabled:boolean=true;
name:string='Balu'

mobile:string='+91';
// num1: any;
// num2: any;
submit(){
  alert(this.mobile);
}


  greet(){
    alert("Good Morning")
  }
typing() {
alert('Typing...............');
}
state(){
  alert("state")
}

num1:number=0;
num2:number=0;
sum:number=0;
calculate(){
  this.sum=this.num1+this.num2;
}
}



