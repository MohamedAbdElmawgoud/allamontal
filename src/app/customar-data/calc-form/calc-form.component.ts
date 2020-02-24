import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TYPES } from '../../admin/configuration';
import { ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-calc-form',
  templateUrl: './calc-form.component.html',
  styleUrls: ['./calc-form.component.scss'],
})
export class CalcFormComponent implements OnInit {
  note: any;
  customer;
  equationName: string;
  equationType: string;

  width;
  hight;
  price;
  types =  TYPES;
  constructor(private router: Router, private storage: Storage,
    public modalController: ModalController

  ) { }

  ngOnInit() { }
  async saveNotes(equationName ,equationType ,width, hight) {

    let user= (await this.storage.get(this.customer));
    user.notes.push({
      equationName ,
      equationType ,
      width ,
      hight,
      createdAt : new Date(),
      id : user.notes.length + 1
    })
    await this.storage.set(this.customer , user )
    this.modalController.dismiss()
  }
  close(){
    this.modalController.dismiss()
  }
}
