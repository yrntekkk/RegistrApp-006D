import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./page/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'reestablecer',
    loadChildren: () => import('./page/reestablecer/reestablecer.module').then( m => m.ReestablecerPageModule)
  },
  {
    path: 'inicio-docente',
    loadChildren: () => import('./page/inicio-docente/inicio-docente.module').then( m => m.InicioDocentePageModule)
  },
  {
    path: 'asignaturas',
    loadChildren: () => import('./page/asignaturas/asignaturas.module').then( m => m.AsignaturasPageModule)
  },
  {
    path: 'calendario',
    loadChildren: () => import('./page/calendario/calendario.module').then( m => m.CalendarioPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
