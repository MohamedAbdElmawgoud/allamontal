import { Component, OnInit } from '@angular/core';
import { matb5 } from "src/app/admin/configuration";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-matb5-input',
  templateUrl: './matb5-input.page.html',
  styleUrls: ['./matb5-input.page.scss'],
})
export class Matb5InputPage implements OnInit {
  note: any;
  calculationResult;
  calculationResultView = [];

  constructor(private router: Router, private route: ActivatedRoute) { }
  
  ngOnInit() {
    this.route
      .queryParams
      .subscribe(data => {
        this.note = data;
        console.log(data);
         
        this.calculationResult = new matb5(+data.width, +data.hight ,
          +data.width_Raf ,
          +data.hight_Raf,
          +data.el_Omk
        ,
        +data.width_dalfa,
        +data.hight_dalfa,
        );

        Object.entries(this.calculationResult).forEach(ele=>{
          this.calculationResultView.push({
            name : ele[0],
            values : ele[1]
          })
        })
      });




  }

}
