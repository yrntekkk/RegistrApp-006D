import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioDocentePage } from './inicio-docente.page';

const routes: Routes = [
  {
    path: '',
    component: InicioDocentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioDocentePageRoutingModule {}
