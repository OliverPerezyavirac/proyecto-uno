import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from '../user/user.component';
import { AboutComponent } from './about/about.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    // AboutComponent,
    // CatalogueComponent,
    // ContactComponent,
    // DashboardComponent,
    // HomeComponent,
    // ProductComponent,
    // UserComponent
  ],
  exports:[
    // AboutComponent,
    // CatalogueComponent,
    // ContactComponent,
    // DashboardComponent,
    // HomeComponent,
    // ProductComponent,
    // UserComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
