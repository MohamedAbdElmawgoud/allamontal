import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IsLoggedGuard } from './guards/is-logged.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', canActivate: [IsLoggedGuard], loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
  {
    path: 'view-customer', canActivate: [IsLoggedGuard], data: { note: '' },
    loadChildren: () => import('./view-customer/view-customer.module').then(m => m.ViewCustomerPageModule)
  },
  {
    path: 'view-information',
    canActivate: [IsLoggedGuard],
    loadChildren: () => import('./view-information/view-information.module').then(m => m.ViewInformationPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'customer-data/:name',
    loadChildren: () => import('./customar-data/customar-data.module').then( m => m.CustomarDataPageModule)
  },  {
    path: 'matb5-input',
    loadChildren: () => import('./matb5-input/matb5-input.module').then( m => m.Matb5InputPageModule)
  },
  {
    path: 'matb5-output',
    loadChildren: () => import('./matb5-output/matb5-output.module').then( m => m.Matb5OutputPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
