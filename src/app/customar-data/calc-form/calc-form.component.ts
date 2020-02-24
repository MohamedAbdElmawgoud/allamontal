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
  constructor( public alertController: AlertController,private router: Router, private storage: Storage,
    public modalController: ModalController

  ) { }

  ngOnInit() { }
  async saveNotes(equationName ,equationType ,width, hight) {
console.log(equationType);
   if (!equationType || !equationName || !width|| !hight){
     this.presentAlert('تحذير','من فضلك ادخل البيانات كامله')
   }
   else {
    let user= (await this.storage.get(this.customer));
    user.notes.push({
      equationName ,
      equationType ,
      width ,
      hight,
      createdAt : new Date(),
      id : user.notes.length + 1
    })
    await this.storage.set(this.customer , user )
    this.modalController.dismiss()
  }}

  async presentAlert(title: string, content: string) {
    const alert = await this.alertController.create({
      header: title,
      message: content,
      buttons: ['حسنا']
    });

    await alert.present();
  }
}
