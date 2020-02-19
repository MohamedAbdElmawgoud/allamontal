import { Component, OnInit } from '@angular/core';
import { StorageService } from "src/app/admin/storage.service";
import { Router } from "@angular/router";
import { ModalController } from '@ionic/angular';
import { CalcFormComponent } from './calc-form/calc-form.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  notes ;
  note;
  constructor(
    public modalController: ModalController,
    private storage: StorageService,
    private router: Router,
  ) { }
  async ngOnInit() {
    this.getNotes()

  }
  async ionViewDidEnter(){
    await this.ngOnInit()
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: CalcFormComponent
    });
    return await modal.present();
  }

  async  getNotes() {
    this.notes = await this.storage.getAllNotes()

  }
  getNote(customer_name: string) {
    this.storage.getNote(customer_name).then((n) => {
      console.log(n);
      
           this.router.navigate(['view-customer'] , {
             queryParams : n
           });
          
    });
    
  }
}
