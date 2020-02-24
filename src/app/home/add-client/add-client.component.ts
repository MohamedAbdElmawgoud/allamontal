import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { StorageService } from 'src/app/admin/storage.service';
import { Storage } from '@ionic/storage';
import { AlertController } from "@ionic/angular";

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss'],
})
export class AddClientComponent implements OnInit {
  customer_name;
  constructor(
    private storage: Storage,
    public modalController: ModalController,
    public alertController: AlertController
    
  ) { }

  ngOnInit() { }
  async  addClient() {
    if(!this.customer_name){
      this.presentAlert('تحذير', 'من فضلك ادخل اسم العميل')
    }
    else {
    await this.storage.set(this.customer_name, {
      name: this.customer_name,
      notes: [],
      created_at: new Date()
    })
    await this.modalController.dismiss()
  }
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
