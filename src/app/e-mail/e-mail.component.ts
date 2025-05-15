import { Component } from '@angular/core';
import { EMailService } from '../e-mail.service';

@Component({
  selector: 'app-e-mail',
  templateUrl: './e-mail.component.html',
  styleUrls: ['./e-mail.component.css']
})
export class EMailComponent {
  mail:any=[];
constructor(private _mail:EMailService){
 this._mail.email().subscribe((data:any)=>{
  console.log(data);
  this.mail=data;
  console.log(this.mail);
 }
 )
}
}
