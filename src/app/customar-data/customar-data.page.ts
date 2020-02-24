import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StorageService } from '../admin/storage.service';
import { ModalController } from '@ionic/angular';
import { CalcFormComponent } from './calc-form/calc-form.component';
import { Storage } from '@ionic/storage';

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
      let clientData = await this.storage.get(params.get('name'))
      this.client = clientData;

    })
  }
  async ionViewDidEnter() {
    await this.ngOnInit()
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: CalcFormComponent, componentProps: {
        customer: this.client.name
      }
    });
    return await modal.present();
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

}
