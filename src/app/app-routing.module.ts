import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ButtonsFormFieldComponent} from './buttons-form-field/buttons-form-field.component';
import {AutocompleteDemoComponent} from './autocomplete-demo/autocomplete-demo.component';

const routes: Routes = [
  {path: 'buttons-form-field', component: ButtonsFormFieldComponent},
  {path: 'autocomplete-demo', component: AutocompleteDemoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
