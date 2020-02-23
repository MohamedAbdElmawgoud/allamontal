import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StorageService } from "src/app/admin/storage.service";
import { small_PS2 } from "src/app/admin/configuration";

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.page.html',
  styleUrls: ['./view-customer.page.scss'],
})
export class ViewCustomerPage implements OnInit {
  note: any;
  Temp: any = [];
  eldalfa: any;
  elezaz: any;
  wazn_el7elkan: any;
  wazn_eldalfa: any;
  wazn_elsekena: any;
  else3r: any;

  constructor(private router: Router, private route: ActivatedRoute, public storage: StorageService, public small_PS2: small_PS2) { }

  ngOnInit() {
    this.route
      .queryParams
      .subscribe(v => {
        this.note = v;

      });

    let count: any;
    let temp = Object.keys(this.note);
    for (count of temp) {
      this.Temp.push(this.note[count]);
    }
    this.eldalfa = this.small_PS2.makas_eldalfa(this.Temp[1], this.Temp[2]);
    this.elezaz = this.small_PS2.makas_elezaz(this.Temp[1], this.Temp[2]);
    this.wazn_el7elkan = this.small_PS2.wazn_el7elkan(this.Temp[1], this.Temp[2]);
    this.wazn_eldalfa = this.small_PS2.wazn_eldalfa(this.Temp[1], this.Temp[2]);
    this.wazn_elsekena = this.small_PS2.wazn_elsekena(this.Temp[1], this.Temp[2]);
    this.else3r = this.small_PS2.else3r(this.Temp[1], this.Temp[2], this.Temp[3]);


  }

}
