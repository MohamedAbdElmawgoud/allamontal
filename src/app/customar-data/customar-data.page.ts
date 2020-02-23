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
  client ;
  constructor(
    public modalController: ModalController,
    private storage: Storage,
    private router: Router,
    private route: ActivatedRoute

  ) { }

  async ngOnInit() {
    this.route.paramMap.subscribe( async params=>{
      let clientData = await this.storage.get(params.get('name'))
      this.client = clientData;
    })
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: CalcFormComponent
    });
    return await modal.present();
  }

  async  getNotes() {
    // this.notes = await this.storage.getAllNotes()

  }
  getNote(customer_name: string) {
    // this.storage.getNote(customer_name).then((n) => {
    //   console.log(n);

    //   this.router.navigate(['view-customer'], {
    //     queryParams: n
    //   });

    // });

  }

}
