import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EMailService {

  constructor(private _http:HttpClient) { }
  email():Observable<any>{
return this._http.get('https://jsonplaceholder.typicode.com/todos')
  }

  
}
