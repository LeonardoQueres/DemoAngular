import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExemploNgContextComponent } from './exemplo-ng-context/exemplo-ng-context.component';



@NgModule({
  declarations: [
    ExemploNgContextComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ExemploNgContextComponent
  ]
})
export class NgContentModule { }
