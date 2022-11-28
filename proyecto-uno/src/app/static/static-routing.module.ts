import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';

import { StaticComponent } from './static.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';

const routes: Routes = [
  {path:'static', component:StaticComponent, children:[
    {path:'breadcrumbs', component:BreadcrumbsComponent},
    {path:'footer', component:FooterComponent},
    {path:'header', component:HeaderComponent},
    {path:'nav', component: NavComponent},
    {path:'sidebar', component:SidebarComponent}
  ]}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class StaticRoutingModule { }
