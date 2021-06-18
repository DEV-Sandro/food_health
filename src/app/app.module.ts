import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalcularModule } from './Calculadora/calculadora.module';
import { TabelaModule } from './Tabela-Calculo/tabela.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CalcularModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    TabelaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
