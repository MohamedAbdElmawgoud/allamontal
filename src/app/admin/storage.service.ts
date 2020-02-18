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

  async saveNote(customer_name, width, hight, price) {
    // tslint:disable-next-line:prefer-const
    let data = { customer_name: customer_name, width: width, hight: hight, price: price };
    if (!data.customer_name) {
      this.presentAlert('تحذير!', 'ادخل اسم العميل');

    } else {
      let notes = await this.storage.get('notes')
      notes.push(data);

      this.storage.set('notes', notes);
      this.presentToast('تم اضافه متطلبات العميل بنجاح');
    }




  }
  async getAllNotes() {
    return this.storage.get('notes');
  }


  deleteNote(customer_name: string) {
    this.note = this.note.filter((note) => {
      return note.cre !== customer_name;
    });
    this.storage.set('notes', this.note);
  }


  async  getNote(customer_name: string) {

    let data = await this.storage.get('notes');
    return data.filter(ele => ele.customer_name == customer_name)[0]
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
