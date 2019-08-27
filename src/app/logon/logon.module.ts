import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogonComponent } from './logon.component';

@NgModule({
  declarations: [
    LogonComponent
  ],
  imports: [
    CommonModule    
  ],
  exports: [
    LogonComponent
  ]
})
export class LogonModule { }
