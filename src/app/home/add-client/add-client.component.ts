import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { StorageService } from 'src/app/admin/storage.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss'],
})
export class AddClientComponent implements OnInit {
  customer_name;
  constructor(
    private storage: Storage,
    public modalController: ModalController
  ) { }

  ngOnInit() { }
  async  addClient() {
    await this.storage.set(this.customer_name, {
      name: this.customer_name,
      notes: [],
      created_at: new Date()
    })
    await this.modalController.dismiss()
  }
}
