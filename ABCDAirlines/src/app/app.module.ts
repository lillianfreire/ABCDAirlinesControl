import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }  from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroAeronaveComponent } from './cadastro-aeronave/cadastro-aeronave.component';
import { CadastroModeloComponent } from './cadastro-modelo/cadastro-modelo.component';
import { RelatoriosComponent } from './relatorios/relatorios.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';

import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatInputModule,
  MatFormFieldModule,
  MatSidenavModule,
  MatListModule,
  MatCheckboxModule,
  MatSelectModule,
  MatTableModule
} from "@angular/material";

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
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatListModule,
    MatCheckboxModule,
    MatSelectModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
