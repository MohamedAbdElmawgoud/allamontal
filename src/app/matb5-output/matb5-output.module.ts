import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Matb5OutputPageRoutingModule } from './matb5-output-routing.module';

import { Matb5OutputPage } from './matb5-output.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Matb5OutputPageRoutingModule
  ],
  declarations: [Matb5OutputPage]
})
export class Matb5OutputPageModule {}
