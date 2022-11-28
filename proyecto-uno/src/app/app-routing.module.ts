import { UserRoutingModule } from './user/user-routing.module';
import { StaticRoutingModule } from './static/static-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { NotFoundRoutingModule } from './not-found/not-found-routing.module';
import { PagesRoutingModule } from './pages/pages-routing.module';


const routes:Routes = [
  
  {path:'', redirectTo:'/dashboard', pathMatch:'full'},
  
 ];

@NgModule({
  declarations: [],
  imports: [
    // rutas principales las cuales serán especificados con forRoot
    RouterModule.forRoot(routes),
    CommonModule,
    AuthRoutingModule,
    NotFoundRoutingModule,
    PagesRoutingModule,
    StaticRoutingModule,
    UserRoutingModule
  ],
  exports:[RouterModule],
})
export class AppRoutingModule { }
