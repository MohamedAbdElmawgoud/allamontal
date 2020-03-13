import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomarDataPageRoutingModule } from './customar-data-routing.module';

import { CustomarDataPage } from './customar-data.page';
import { CalcFormComponent } from './calc-form/calc-form.component';
import { FirebaseAnalytics } from '@ionic-native/firebase-analytics/ngx';
import { Matba5Component } from "src/app/matba5/matba5.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomarDataPageRoutingModule
  ],
  declarations: [CustomarDataPage , CalcFormComponent,Matba5Component],
  entryComponents : [
    CalcFormComponent,
    Matba5Component
  ],
  providers : [
    FirebaseAnalytics
  ]
})
export class CustomarDataPageModule {}
