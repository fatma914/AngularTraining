import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from "@angular/material/slider";
import { MatTableModule } from '@angular/material/table'
import { ContactComponent } from './component/contact/contact.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatButtonModule} from "@angular/material/button";
//import { CarrouselComponent } from './component/carrousel/carrousel.component';
//import {IvyCarouselModule} from 'angular-responsive-carousel';
import { ToolbarComponent } from './component/toolbar/toolbar.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import { BackgroundImageComponent } from './component/background-image/background-image.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import { RouterModule } from '@angular/router';
import { TableComponent } from './component/table/table.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    //CarrouselComponent,
    ToolbarComponent,
    BackgroundImageComponent,
    TableComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatTableModule,
    // IvyCarouselModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatCheckboxModule,
    RouterModule,

    BrowserModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
