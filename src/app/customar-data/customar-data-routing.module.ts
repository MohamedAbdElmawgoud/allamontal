import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomarDataPage } from './customar-data.page';

const routes: Routes = [
  {
    path: '',
    component: CustomarDataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomarDataPageRoutingModule {}
