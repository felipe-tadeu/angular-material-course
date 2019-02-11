import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonsFormFieldComponent } from './buttons-form-field/buttons-form-field.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {MaterialModule} from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    ButtonsFormFieldComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
