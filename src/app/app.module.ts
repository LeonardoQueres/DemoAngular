import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogonModule } from './logon/logon.module';
import { DiretivaModule } from './diretiva/diretiva.module';
import { OperadorModule } from './operador/operador.module';
import { NgContentModule } from './ng-content/ng-content.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LogonModule,
    DiretivaModule,
    OperadorModule,
    NgContentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
