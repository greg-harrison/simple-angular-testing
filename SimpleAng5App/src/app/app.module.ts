// @Angular Platform
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ItemComponent } from './item/item.component';

//Services
import { LoggerService } from './logger.service';
import { ItemService } from './item.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    LoggerService,
    ItemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
