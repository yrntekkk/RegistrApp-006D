import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsignaturasPage } from './asignaturas.page';

const routes: Routes = [
  {
    path: '',
    component: AsignaturasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsignaturasPageRoutingModule {}
