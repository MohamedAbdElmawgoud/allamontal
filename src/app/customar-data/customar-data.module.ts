import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomarDataPageRoutingModule } from './customar-data-routing.module';

import { CustomarDataPage } from './customar-data.page';
import { CalcFormComponent } from './calc-form/calc-form.component';

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
  ]
})
export class CustomarDataPageModule {}
