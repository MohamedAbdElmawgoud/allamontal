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
  // { title: string , content: string , createDate: number , date: Data}[] = [] ;

  constructor(public storage: Storage, public alertController: AlertController, public toastController: ToastController) { }
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
















  saveNote(title, content) {
    // tslint:disable-next-line:prefer-const
    let data = { tit: title, con: content, cre: Date.now()};
    // console.log(data);
    if (!data.tit) {
      this.presentAlert('تحذير!', 'ادخل اسم العميل');

    } else {
      this.note.push(data);
     // console.log(this.note);
      this.storage.set('notes', this.note);
      this.presentToast('تم اضافه متطلبات العميل بنجاح');
    }


    // this.notes.title = title;
    // this.notes.content = content;
  }
  async getAllNotes() {
    return this.storage.get('notes').then((note) => {
      // console.log(this.note);
      this.note = note;
      // console.log(this.note);
      return this.note;
    });
  }
  deleteNote(createDate: number) {
    this.note = this.note.filter((note) => {
      return note.cre !== createDate;
    });
    this.storage.set('notes', this.note);
  }
  getNote(createDate: number) {
    let count = 0;
    let not: any = [];
    let temp ;
    return this.storage.get('notes').then((note) => {
          this.note.forEach(element => {

                    not.push (element);
                    // console.log(not[count].cre);

                    if (createDate === not[count].cre ) {
                      temp = not[count];

                        }
                    count += 1;

          });


         // console.log(temp);
          return temp;
    });

  }
}
