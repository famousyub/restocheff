import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChehomeComponent } from './chehome/chehome.component';
import { CheforderComponent } from './cheforder/cheforder.component';
import { ChefnotifComponent } from './chefnotif/chefnotif.component';
import { ChefloginComponent } from './cheflogin/cheflogin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule  } from "@angular/common/http";
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { CalculatorComponent } from './calculator/calculator.component';
import { CalcComponent } from './calc/calc.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent,
    ChehomeComponent,
    CheforderComponent,
    ChefnotifComponent,
    ChefloginComponent,
    CalculatorComponent,
    CalcComponent,
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    PdfViewerModule,
    BrowserAnimationsModule,
    //ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
