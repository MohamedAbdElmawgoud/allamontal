import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomarDataPageRoutingModule } from './customar-data-routing.module';

import { CustomarDataPage } from './customar-data.page';
import { CalcFormComponent } from './calc-form/calc-form.component';
import { FirebaseAnalytics } from '@ionic-native/firebase-analytics/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomarDataPageRoutingModule
  ],
  declarations: [CustomarDataPage , CalcFormComponent],
  entryComponents : [
    CalcFormComponent
  ],
  providers : [
    FirebaseAnalytics
  ]
})
export class CustomarDataPageModule {}
