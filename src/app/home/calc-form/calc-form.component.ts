import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/admin/storage.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-calc-form',
  templateUrl: './calc-form.component.html',
  styleUrls: ['./calc-form.component.scss'],
})
export class CalcFormComponent implements OnInit {
  note: any;
  constructor(private router: Router,private storage : StorageService,
    public modalController: ModalController
    
    ) { }

  ngOnInit() {}
  async saveNotes(customer_name , width , hight, price ) {
    
    let data = {customer_name : customer_name , width : width , hight:hight , price: price};
   
    let result = await this.storage.saveNote(data.customer_name, data.width, data.hight,data.price);
    if(result){
      this.getNote(data.customer_name)
    }
    this.modalController.dismiss()
   }
   getNote(customer_name: string) {
    this.storage.getNote(customer_name).then((n) => {
      this.router.navigate(['view-customer'] , {
        queryParams : n
      });
          
    });
    
  }
}
