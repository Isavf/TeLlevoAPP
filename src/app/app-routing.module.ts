import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IngresadoGuard } from './ingresado.guard';
import { NoIngresadoGuard } from './no-ingresado.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./page/home/home.module').then( m => m.HomePageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'index-chofer',
    loadChildren: () => import('./page/chofer/index-chofer/index-chofer.module').then( m => m.IndexChoferPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'perfil-chofer',
    loadChildren: () => import('./page/chofer/perfil-chofer/perfil-chofer.module').then( m => m.PerfilChoferPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'crear-viaje',
    loadChildren: () => import('./page/chofer/crear-viaje/crear-viaje.module').then( m => m.CrearViajePageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'registro',
    loadChildren: () => import('./page/registro/registro.module').then( m => m.RegistroPageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'estudiante',
    loadChildren: () => import('./page/estudiante/estudiante.module').then( m => m.EstudiantePageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'capacidad-transporte',
    loadChildren: () => import('./page/chofer/capacidad-transporte/capacidad-transporte.module').then( m => m.CapacidadTransportePageModule),
    canActivate: [IngresadoGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
