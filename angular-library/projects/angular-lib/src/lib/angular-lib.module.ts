import { NgModule } from '@angular/core';
import { ButtonModule } from './components/button';

@NgModule({
  imports: [
    ButtonModule,
  ],
  exports: [
    ButtonModule
  ]
})
export class AngularLibModule { }
