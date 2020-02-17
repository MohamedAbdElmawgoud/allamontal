import { Component } from '@angular/core';
import { StorageService } from "src/app/admin/storage.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  note: any;

  constructor(private router: Router,private storage : StorageService) {  }
  saveNotes(customer_name , width , hight, price ) {
    
    let data = {customer_name : customer_name , width : width , hight:hight , price: price};
   
    this.storage.saveNote(data.customer_name, data.width, data.hight,data.price);
    this.getNote(data.customer_name)
   }
   getNote(customer_name: string) {
    this.storage.getNote(customer_name).then((n) => {
           this.note = n;
           let route = this.router.config.find(r => r.path === 'view-customer');
           route.data = this.note;
           
           this.router.navigate(['view-customer', route.data]);
         //  console.log(route.data);
           return this.note;
          
    });
    
  }
}
