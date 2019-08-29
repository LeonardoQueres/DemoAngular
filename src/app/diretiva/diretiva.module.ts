import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms'; 

import { DiretivaNgSwitchComponent } from './diretiva-ng-switch/diretiva-ng-switch.component';
import { DiretivaNgifComponent } from './diretiva-ngif/diretiva-ngif.component';
import { DiretivaNgforComponent } from './diretiva-ngfor/diretiva-ngfor.component';
import { DiretivaNgclassComponent } from './diretiva-ngclass/diretiva-ngclass.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DiretivaNgstyleComponent } from './diretiva-ngstyle/diretiva-ngstyle.component';
import { DiretivaCustomizadaComponent } from './diretiva-customizada/diretiva-customizada.component';
import { FundoAmareloDirective } from '../shared/fundo-amarelo.directive';
import { HighLightMouseDirective } from '../shared/high-light-mouse.directive';
import { HighlightDirective } from '../shared/highlight.directive';

@NgModule({
  declarations: [    
    DiretivaNgSwitchComponent,    
    DiretivaNgifComponent, 
    DiretivaNgforComponent, 
    DiretivaNgclassComponent, 
    DiretivaNgstyleComponent, 
    DiretivaCustomizadaComponent,
    FundoAmareloDirective,
    HighLightMouseDirective,
    HighlightDirective
  ],
  imports: [
    FormsModule,
    CommonModule,
    FontAwesomeModule
  ],
  exports:[    
    DiretivaNgifComponent,
    DiretivaNgSwitchComponent,
    DiretivaNgforComponent,
    DiretivaNgclassComponent,
    DiretivaNgstyleComponent,
    DiretivaCustomizadaComponent
  ]
})
export class DiretivaModule { }
