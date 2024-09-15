import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReestablecerPage } from './reestablecer.page';

const routes: Routes = [
  {
    path: '',
    component: ReestablecerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReestablecerPageRoutingModule {}
