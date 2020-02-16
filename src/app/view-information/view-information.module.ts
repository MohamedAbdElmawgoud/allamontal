import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewInformationPageRoutingModule } from './view-information-routing.module';

import { ViewInformationPage } from './view-information.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewInformationPageRoutingModule
  ],
  declarations: [ViewInformationPage]
})
export class ViewInformationPageModule {}
