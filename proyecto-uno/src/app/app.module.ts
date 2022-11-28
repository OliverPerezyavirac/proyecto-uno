import { PagesModule } from './pages/pages.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundModule } from './not-found/not-found.module';
import { AuthModule } from './auth/auth.module';
import { StaticModule } from './static/static.module';


import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthComponent } from './auth/auth.component';
import { StaticComponent } from './static/static.component';
import { UserComponent } from './user/user.component';
import { UserModule } from './user/user.module';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    PagesComponent,
    AuthComponent,
    StaticComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NotFoundModule,
    AuthModule,
    PagesModule,
    StaticModule,
    UserModule

   
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
