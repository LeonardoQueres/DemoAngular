import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElvisComponent } from './elvis/elvis.component';



@NgModule({
  declarations: [
    ElvisComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ElvisComponent
  ]
})
export class OperadorModule { }
