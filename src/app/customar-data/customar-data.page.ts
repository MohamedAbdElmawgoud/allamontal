import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StorageService } from '../admin/storage.service';
import { ModalController } from '@ionic/angular';
import { CalcFormComponent } from './calc-form/calc-form.component';
import { Storage } from '@ionic/storage';
import { Matba5Component } from "src/app/matba5/matba5.component";


@Component({
  selector: 'app-customar-data',
  templateUrl: './customar-data.page.html',
  styleUrls: ['./customar-data.page.scss'],
})
export class CustomarDataPage implements OnInit {
  client;
  constructor(
    public modalController: ModalController,
    private storage: Storage,
    private router: Router,
    private route: ActivatedRoute

  ) { }

  async ngOnInit() {
    this.route.paramMap.subscribe(async params => {
    this.getClient(params.get('name'))

    })
  }

  async getClient(name){
    let clientData = await this.storage.get(name)
    this.client = clientData;
  }
  async ionViewDidEnter() {
    await this.ngOnInit()
  }
  async presentModal(type:string) {
    if (type=='window'){
    const modal = await this.modalController.create({
      component: CalcFormComponent, componentProps: {
        customer: this.client.name
      }
    });
    modal.onDidDismiss().then(async(d)=>{
      
      await this.getClient(this.client.name)
    })
    return await modal.present();
  }else {

    const modal = await this.modalController.create({
      component: Matba5Component, componentProps: {
        customer: this.client.name
      }
    });
    modal.onDidDismiss().then(async(d)=>{
      
      await this.getClient(this.client.name)
    })
    return await modal.present();
  }
  }
  viewEquation(item) {
    this.router.navigate(['view-customer'], { queryParams: item })
  }
  async delete(item) {
    let user = (await this.storage.get(this.client.name));
    user.notes = user.notes.filter(ele => {
      return ele.id != item.id && ele.equationName != item.equationName
    })
    
    await this.storage.set(this.client.name, user)
    await this.ngOnInit()
  }
 async editItem(item){
   if(item.equationType=='matb5'){
    const modal = await this.modalController.create({
      component: Matba5Component, componentProps: {
        customer: this.client.name,
        ...item
      }
    });
    modal.onDidDismiss().then(async(d)=>{
      
      await this.getClient(this.client.name)
    })
    return await modal.present();

   }else{
    const modal = await this.modalController.create({
      component: CalcFormComponent, componentProps: {
        customer: this.client.name,
        ...item
      }
    });
    modal.onDidDismiss().then(async(d)=>{
      
      await this.getClient(this.client.name)
    })
    return await modal.present();
  }
  }

}
