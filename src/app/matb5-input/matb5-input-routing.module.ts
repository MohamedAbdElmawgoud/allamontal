import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Matb5InputPage } from './matb5-input.page';

const routes: Routes = [
  {
    path: '',
    component: Matb5InputPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Matb5InputPageRoutingModule {}
