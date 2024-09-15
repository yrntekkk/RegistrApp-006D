import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReestablecerPageRoutingModule } from './reestablecer-routing.module';

import { ReestablecerPage } from './reestablecer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReestablecerPageRoutingModule
  ],
  declarations: [ReestablecerPage]
})
export class ReestablecerPageModule {}
