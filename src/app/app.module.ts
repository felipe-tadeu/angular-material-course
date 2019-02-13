import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonsFormFieldComponent } from './buttons-form-field/buttons-form-field.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

import {MaterialModule} from './material.module';
import { AutocompleteDemoComponent } from './autocomplete-demo/autocomplete-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonsFormFieldComponent,
    ToolbarComponent,
    AutocompleteDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
