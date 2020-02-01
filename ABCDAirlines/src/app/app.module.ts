import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroAeronaveComponent } from './cadastro-aeronave/cadastro-aeronave.component';
import { CadastroModeloComponent } from './cadastro-modelo/cadastro-modelo.component';
import { RelatoriosComponent } from './relatorios/relatorios.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroAeronaveComponent,
    CadastroModeloComponent,
    RelatoriosComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
