import { Component } from '@angular/core';
import { EmailValidator, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-marks',
  templateUrl: './marks.component.html',
  styleUrls: ['./marks.component.css']
})
export class MarksComponent {
CONTROLS: any;
constructor(){
    this.userform.get('type')?.valueChanges.subscribe(
      (data:any)=>{
        if(data=='daysholar'){
        this.userform.addControl('busFee',new FormControl());
        this.userform.removeControl('hostelFee');
      }else{
        this.userform.addControl('hostelFee',new FormControl());
        this.userform.removeControl('busFee');
      }
      }
    )
  }
  public userform:FormGroup=new FormGroup({
    name:new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(12)]),
    class:new FormControl(),
    FatherName:new FormControl(),
    Email:new FormControl(),
    Dob:new FormControl(),
    Address:new FormGroup({
      city:new FormControl(),
      state:new FormControl(),
      pin:new FormControl(),
    }),
    type:new FormControl(),
    // busFee:new FormControl(),
    // hostelFee:new FormControl(),
    cards:new FormArray([])

  })

  get CardsFormArray(){
    return this.userform.get('cards') as FormArray;
  }

  addCard(){
    this.CardsFormArray.push(
      new FormGroup({
        number:new FormControl(),
        name:new FormControl(),
        expiry:new FormControl(),
        CVV:new FormControl()
      })
    )
  }

  deleteCard(i:number){
    this.CardsFormArray.removeAt(i);
  }

  
  submit(){
    console.log(this.userform.value);
  }

}


