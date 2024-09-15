import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioDocentePageRoutingModule } from './inicio-docente-routing.module';

import { InicioDocentePage } from './inicio-docente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioDocentePageRoutingModule
  ],
  declarations: [InicioDocentePage]
})
export class InicioDocentePageModule {}
