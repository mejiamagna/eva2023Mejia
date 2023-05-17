import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarCarreraComponent } from './pages/listar-carrera/listar-carrera.component';
import { CrearCarreraComponent } from './pages/crear-carrera/crear-carrera.component';
import { AcercaComponent } from './pages/acerca/acerca.component';

const routes: Routes = [
  {path: "pagina/listacarreras", component: ListarCarreraComponent},
  {path: "pagina/crearcarreras", component: CrearCarreraComponent},
  {path: "pagina/acerca", component: AcercaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
