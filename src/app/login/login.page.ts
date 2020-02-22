import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  accessCode : string;
  hasErr ;
  constructor(private loginService : LoginService,
              private storage : Storage ,
              private route : Router
    ) { }

  ngOnInit() {
  }

  async login(){
    let loginResult : any = await this.loginService.login({
      accessCode : this.accessCode
    }).toPromise()
    if(loginResult.canLogin){
     await this.storage.set('token' ,  {
        time : new  Date(),
        name : this.accessCode
      })
      this.route.navigate(['/home'])
    }else {
      this.hasErr = true;
    }
    
  }

}
