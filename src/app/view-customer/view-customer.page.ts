import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StorageService } from "src/app/admin/storage.service";
import { small_PS2, calculate } from "src/app/admin/configuration";

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.page.html',
  styleUrls: ['./view-customer.page.scss'],
})
export class ViewCustomerPage implements OnInit {
  note: any;
  calculationResult;
  calculationResultView = [];

  constructor(private router: Router, private route: ActivatedRoute, public storage: StorageService) { }
  
  ngOnInit() {
    this.route
      .queryParams
      .subscribe(data => {
        this.note = data;
        console.log(data);
        
        this.calculationResult = new calculate(+data.width, +data.hight ,+data.poleHeight , +data.poleWeight,
          +data.price ,
          +data.pole_sekena_hight,
          +data.pole_sekena_weight
        ,+data.pole_dalfa_hight,
        +data.pole_dalfa_weight
        ).getCalculator(data.equationType).calculate()

        Object.entries(this.calculationResult).forEach(ele=>{
          this.calculationResultView.push({
            name : ele[0],
            values : ele[1]
          })
        })
      });




  }

}
