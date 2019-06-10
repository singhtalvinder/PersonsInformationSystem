import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AllPersonsComponent } from './all-persons/all-persons.component';
import { SelectedPersonsComponent } from './selected-persons/selected-persons.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AllPersonsComponent,
    SelectedPersonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
