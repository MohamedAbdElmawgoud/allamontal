import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { AlertController, ToastController } from "@ionic/angular";

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  note: any = [];
  date: any;
  notes: any = [];
  // { title: string , content: string , customer_name: number , date: Data}[] = [] ;

  constructor(public storage: Storage, public alertController: AlertController, public toastController: ToastController) { }
 
  saveNote(customer_name , width , hight, price) {
    // tslint:disable-next-line:prefer-const
    let data = {customer_name : customer_name , width : width , hight:hight , price: price};
    // console.log(data);
    if (!data.customer_name) {
      this.presentAlert('تحذير!', 'ادخل اسم العميل');

    } else {
      
      this.note.push(data);
     // console.log(this.note);
      this.storage.set('notes', this.note);
      this.presentToast('تم اضافه متطلبات العميل بنجاح');
    }


   

  }
  async getAllNotes() {
    return this.storage.get('notes').then((note) => {
      // console.log(this.note);
      this.note = note;
      // console.log(this.note);
      return this.note;
    });
  }


  deleteNote(customer_name: string) {
    this.note = this.note.filter((note) => {
      return note.cre !== customer_name;
    });
    this.storage.set('notes', this.note);
  }


  getNote(customer_name: string) {
    let count = 0;
    let not: any = [];
    let temp ;
    return this.storage.get('notes').then((note) => {
          this.note.forEach(element => {

                    not.push (element);
                    // console.log(not[count].customer_name);

                    if (customer_name === not[count].customer_name ) {
                      temp = not[count];

                        }
                    count += 1;

          });


         // console.log(temp);
          return temp;
    });

  }













  async presentAlert(title: string, content: string) {
    const alert = await this.alertController.create({
      header: title,
      message: content,
      buttons: ['OK']
    });

    await alert.present();
  }
  async presentToast(messag: string) {
    const toast = await this.toastController.create({
      message: messag,
      duration: 1000,
    });
    toast.present();
  }


}
