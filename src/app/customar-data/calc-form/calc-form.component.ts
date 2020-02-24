import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TYPES } from '../../admin/configuration';
import { ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { AlertController } from "@ionic/angular";

@Component({
  selector: 'app-calc-form',
  templateUrl: './calc-form.component.html',
  styleUrls: ['./calc-form.component.scss'],
})
export class CalcFormComponent implements OnInit {
  note: any;
  customer;
  equationName: string;
  equationType: string;
  width;
  hight;
  price;
  types =  TYPES;
  id ;
  constructor(private router: Router, private storage: Storage,
    public modalController: ModalController,
    public alertController: AlertController

  ) { }

  ngOnInit() { 
    console.log(this);
    
  }


  async saveProcess(equationName ,equationType ,width, hight) {
   if(!equationName || !equationType || !width || !hight){
       this.presentAlert('تحذير','ادخل كل البيانات من فضلك')
   } else{
    let user= (await this.storage.get(this.customer));
    if(!this.id){
      user.notes.push({
        equationName ,
        equationType ,
        width ,
        hight,
        createdAt : new Date(),
        id : Math.floor(Math.random() * 1000) + user.notes.length

      })
    }else{
      user.notes = user.notes.map(ele=>{
        if(ele.id == this.id){
          return {
            equationName ,
            equationType ,
            width ,
            hight,
            createdAt :ele.createdAt,
            id : ele.id
    
          }
        }
          return ele;
      })
    }

    await this.storage.set(this.customer , user )
    this.modalController.dismiss()
  } 
}
  close(){
    this.modalController.dismiss()
  }
  async presentAlert(title: string, content: string) {
    const alert = await this.alertController.create({
      header: title,
      message: content,
      buttons: ['حسنا']
    });

    await alert.present();
  }
}



