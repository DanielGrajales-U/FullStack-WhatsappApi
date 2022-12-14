import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/shared/shared/shared.module';
import { WhatsappModule } from 'src/whatsapp/whatsapp.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    WhatsappModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
