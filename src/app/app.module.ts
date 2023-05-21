import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { ItemListComponent } from './common/item-list/item-list.component';
import { StatComponent } from './common/stat/stat.component';
import { HomeComponent } from './page/home/home.component';
import { AdminComponent } from './page/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ItemListComponent,
    StatComponent,
    HomeComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
