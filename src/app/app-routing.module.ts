import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { CrearEdComponent } from './componentes/crear-ed/crear-ed.component';
import { CrearExComponent } from './componentes/crear-ex/crear-ex.component';
import { CrearProyComponent } from './componentes/crear-proy/crear-proy.component';
import { EditarProyectoComponent } from './componentes/editar-proyecto/editar-proyecto.component';




import { PortfolioComponent } from './componentes/portfolio/portfolio.component';


const routes: Routes = [
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'login', component: LoginComponent },
  { path: 'crearEd', component: CrearEdComponent},
  { path: 'crearEx', component: CrearExComponent},
  { path: 'crearProy', component: CrearProyComponent},
  { path: 'editarProy', component: EditarProyectoComponent},
  
  { path: '', redirectTo: '/login', pathMatch: 'full' },

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }