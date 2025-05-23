import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  rounter: any;
  constructor(private _loginservice:LoginService, private _router:Router){}
  public loginForm:FormGroup=new FormGroup({
    email:new FormControl(),
    password:new FormControl()
  })

  login(){
    console.log(this.loginForm.value);
    this._loginservice.userLogin(this.loginForm.value).subscribe(
      (data:any)=>{
        console.log(data);
        alert("Login successful");
        sessionStorage.setItem('token',data.token);
        this._router.navigateByUrl('/dashboard');
      },(err:any)=>{
        alert("Internal Server Error");
      }
    )
  }
}
