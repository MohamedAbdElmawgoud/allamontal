import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Matb5InputPageRoutingModule } from './matb5-input-routing.module';

import { Matb5InputPage } from './matb5-input.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Matb5InputPageRoutingModule
  ],
  declarations: [Matb5InputPage]
})
export class Matb5InputPageModule {}
