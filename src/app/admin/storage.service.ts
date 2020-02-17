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

makas_eldalfa(width ,hight){
  let mkas = { width : width/2 , hight : hight-6.5};
  //console.log(mkas);
  return mkas ;
}
makas_elezaz(width ,hight)
{
  let mkas = { width : (width/2)-11 , hight : (hight-6.5)-11};
  return mkas;
}

wazn_el7elkan(width ,hight){
  let wazn =   ((width+12)*2 + (hight+12)*2)*(6/6.5);
  return wazn;
}

wazn_eldalfa(width ,hight){
  let wazn =   ((width)*4 + (hight)*4)*(3.3/6.5);
  return wazn;
  }


wazn_elsekena(width ,hight){
  let wazn = (hight*2)*(2/6.5);
  return wazn;
    }


else3r(width ,hight,price){
  let els3r = (width/100)*(hight/100)*price;
  return els3r ;
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
