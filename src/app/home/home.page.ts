import { Component, OnInit } from '@angular/core';
import { StorageService } from "src/app/admin/storage.service";
import { Router } from "@angular/router";
import { ModalController } from '@ionic/angular';
import { CalcFormComponent } from '../customar-data/calc-form/calc-form.component';
import { AddClientComponent } from './add-client/add-client.component';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  clients;
  constructor(
    public modalController: ModalController,
    private storage: Storage,
    private router: Router,
  ) { }
  async ngOnInit() {
    await this.getClients()

  }
  async ionViewDidEnter() {
    await this.ngOnInit()
  }
  async presentModal() {

    let model = await this.modalController.create({
      component: AddClientComponent,
      cssClass: "add-client"
    })
    model.present()
    model.onDidDismiss().then(e => {
      this.getClients()
    })
  }
  async getClients() {
    let allKeys = await this.storage.keys();
    this.clients = allKeys.filter(ele => ele != 'token')

  }

  viewClient(client){
    this.router.navigate(['customer-data' , client])
    
  }

}
