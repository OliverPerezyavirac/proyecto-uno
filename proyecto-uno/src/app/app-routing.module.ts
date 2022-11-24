import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { CatalogueComponent } from './pages/catalogue/catalogue.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { PagesComponent } from './pages/pages.component';
import { ProductComponent } from './pages/product/product.component';

const routes: Routes = [
  {
    path: '',component: PagesComponent,children: [
      {path: 'dashboard',component: DashboardComponent},
      {path: 'product',component: ProductComponent},
      {path: 'catalog',component: CatalogueComponent},
      {path: '', redirectTo: '/dashboard', pathMatch:'full' },
    ]
  },
  {path: 'login',component: LoginComponent},
  {path: 'register',component: RegisterComponent},
  {path: '**',component: NotfoundComponent},
];

@NgModule({
  declarations: [],
  // especificamos rutas principales
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}