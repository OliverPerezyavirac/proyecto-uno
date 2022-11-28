import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';

import { CatalogueComponent } from './catalogue/catalogue.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from '../user/user.component';
import { PagesComponent } from './pages.component';

const routes:Routes = [
  {path:'pages',component:PagesComponent,children:[

     {path:'dasborad', component:DashboardComponent},
     {path:'catalogue', component:CatalogueComponent},
     {path:'product', component:ProductComponent},
     {path:'about', component:AboutComponent},
     {path:'contact', component:ContactComponent},
     {path:'home', component:HomeComponent},
     {path:'user', component:UserComponent},

  ]}, 
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class PagesRoutingModule { }
