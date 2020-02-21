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
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
