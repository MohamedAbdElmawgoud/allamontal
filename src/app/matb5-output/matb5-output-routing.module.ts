import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Matb5OutputPage } from './matb5-output.page';

const routes: Routes = [
  {
    path: '',
    component: Matb5OutputPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Matb5OutputPageRoutingModule {}
