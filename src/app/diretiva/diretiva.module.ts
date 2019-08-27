import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiretivaNgSwitchComponent } from './diretiva-ng-switch/diretiva-ng-switch.component';
import { DiretivaNgifComponent } from './diretiva-ngif/diretiva-ngif.component';
import { DiretivaNgforComponent } from './diretiva-ngfor/diretiva-ngfor.component';
import { DiretivaNgclassComponent } from './diretiva-ngclass/diretiva-ngclass.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [    
    DiretivaNgSwitchComponent,    
    DiretivaNgifComponent, 
    DiretivaNgforComponent, 
    DiretivaNgclassComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports:[    
    DiretivaNgifComponent,
    DiretivaNgSwitchComponent,
    DiretivaNgforComponent,
    DiretivaNgclassComponent
  ]
})
export class DiretivaModule { }
