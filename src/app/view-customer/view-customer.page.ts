import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StorageService } from "src/app/admin/storage.service";
import { configuration } from "src/app/admin/configuration";

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.page.html',
  styleUrls: ['./view-customer.page.scss'],
})
export class ViewCustomerPage implements OnInit {
  notes: any = [];
  note: any;
  Temp: any = [];
  eldalfa:any;
  elezaz:any;
  wazn_el7elkan:any;
  wazn_eldalfa:any;
  wazn_elsekena:any;
  else3r:any;
  
  constructor(private router: Router, private route: ActivatedRoute, public storage: StorageService, public configuration: configuration) { }

  ngOnInit() {
    this.note = this.route
      .data
      .subscribe(v => {
        this.notes = v;
      });
      
    let count: any;
    let temp = Object.keys(this.notes);
    for (count of temp) {
      this.Temp.push(this.notes[count]);
    }
this.eldalfa = this.configuration.makas_eldalfa(this.Temp[1] , this.Temp[2]);
this.elezaz = this.configuration.makas_elezaz(this.Temp[1] , this.Temp[2]);
this.wazn_el7elkan = this.configuration.wazn_el7elkan(this.Temp[1] , this.Temp[2]);
this.wazn_eldalfa = this.configuration.wazn_eldalfa(this.Temp[1] , this.Temp[2]);
this.wazn_elsekena = this.configuration.wazn_elsekena(this.Temp[1] , this.Temp[2]);
this.else3r = this.configuration.else3r(this.Temp[1] , this.Temp[2],this.Temp[3]);
// console.log('مقاس الضلف' , test);
// console.log('مقاس الازاز' ,test2)
// console.log('وزن الحلقان ', test3);
// console.log('وزن الضلفه ', test4);
// console.log('وزن السكينه ', test5);
// console.log('السعر ', test6);

}

}
