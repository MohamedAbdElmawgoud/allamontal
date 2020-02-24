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

  constructor(private router: Router, private route: ActivatedRoute, public storage: StorageService) { }

  ngOnInit() {
    this.route
      .queryParams
      .subscribe(data => {
        this.note = data;

      });
      
    
 

  }

}
