import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroAyudasComponent } from './componentes/registro-ayudas/registro-ayudas.component';
import { TAyudasComponent } from './componentes/t-ayudas/t-ayudas.component';

const routes: Routes = [
 {path:'',redirectTo:'registro-ayudas',pathMatch:'full'},
 {path:'registro-ayudas',component:RegistroAyudasComponent},
{path:'t-ayudas', component:TAyudasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
