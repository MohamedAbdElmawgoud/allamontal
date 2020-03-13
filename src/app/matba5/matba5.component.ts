import { Component, OnInit } from '@angular/core';
import { matb5 } from "src/app/admin/configuration";
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController,AlertController } from "@ionic/angular";
import { FirebaseAnalytics } from "@ionic-native/firebase-analytics/ngx";
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-matba5',
  templateUrl: './matba5.component.html',
  styleUrls: ['./matba5.component.scss'],
})
export class Matba5Component implements OnInit {
  customer: any;
  id: any;
  note:any= [];
  calculationResult;
  calculationResultView = [];

  constructor(private router: Router, private route: ActivatedRoute,
    private storage: Storage,
    public modalController: ModalController,
    public alertController: AlertController,
    private firebaseAnalytics: FirebaseAnalytics
  ) { }
  
  ngOnInit() {
   




  }

  
  async saveProcess(equationName, equationType,
    width, hight,
    width_Raf ,
    hight_Raf,
    el_Omk,
    width_dalfa,
    hight_dalfa
    
   ) {

   let token = await this.storage.get('token')
// console.log(width, hight ,width_Raf ,hight_Raf,el_Omk,width_dalfa,hight_dalfa);

   await this.firebaseAnalytics.logEvent(token.name, { equationType })
   if (!width || !hight) {
     this.presentAlert('تحذير', 'ادخل كل البيانات من فضلك')
   } else {
     let user = (await this.storage.get('محمد'));
     console.log(user);
     if (!this.id) {
       user.notes.push({
         equationName,
         equationType,
         width,
         hight,
         width_Raf ,
         hight_Raf,
         el_Omk,
         width_dalfa,
         hight_dalfa,
         
         createdAt: new Date(),
         id: Math.floor(Math.random() * 1000) + user.notes.length

       })
     } else {
       user.notes = user.notes.map(ele => {
         if (ele.id == this.id) {
           return {
            equationName,
            equationType,
            width,
            hight,
            width_Raf ,
            hight_Raf,
            el_Omk,
            width_dalfa,
            hight_dalfa,
             createdAt: ele.createdAt,
             id: ele.id

           }
         }
         return ele;
       })
     }

     await this.storage.set(this.customer, user)
     await this.modalController.dismiss()
   }
 }
 close() {
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
