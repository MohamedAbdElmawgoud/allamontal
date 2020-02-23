import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http : HttpClient) { }

  login(data : {
    accessCode : string
  }){
    return this.http.post('https://t5smat.herokuapp.com/user/login' , data)
  }
}
