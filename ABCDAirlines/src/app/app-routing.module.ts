import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { CadastroAeronaveComponent } from './cadastro-aeronave/cadastro-aeronave.component';
import { CadastroModeloComponent } from './cadastro-modelo/cadastro-modelo.component';
import { RelatoriosComponent } from './relatorios/relatorios.component';


const routes: Routes = [{
  path: "menu",
  component: MenuComponent,
  children: [
    { path: "cadastro-aeronave", component: CadastroAeronaveComponent},
    { path: "cadastro-modelo", component: CadastroModeloComponent },
    { path: "relatorios", component: RelatoriosComponent}
  ],
},
  { path: "", redirectTo: "menu/relatorios", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
