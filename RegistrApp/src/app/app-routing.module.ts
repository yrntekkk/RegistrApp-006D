import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),

  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./page/inicio/inicio.module').then(m => m.InicioPageModule),
    canActivate: [AuthGuard]  
  },
  {
    path: 'reestablecer',
    loadChildren: () => import('./page/reestablecer/reestablecer.module').then(m => m.ReestablecerPageModule)
  },
  {
    path: 'inicio-docente',
    loadChildren: () => import('./page/inicio-docente/inicio-docente.module').then(m => m.InicioDocentePageModule),
    canActivate: [AuthGuard]  
  },
  {
    path: 'asignaturas',
    loadChildren: () => import('./page/asignaturas/asignaturas.module').then(m => m.AsignaturasPageModule),
    canActivate: [AuthGuard]  
  },
  {
    path: 'calendario',
    loadChildren: () => import('./page/calendario/calendario.module').then(m => m.CalendarioPageModule),
    canActivate: [AuthGuard]  
  },
  {
    path: 'perfil',
    loadChildren: () => import('./page/perfil/perfil.module').then(m => m.PerfilPageModule),
    canActivate: [AuthGuard]  
  },  {
    path: 'soporte',
    loadChildren: () => import('./soporte/soporte.module').then( m => m.SoportePageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
