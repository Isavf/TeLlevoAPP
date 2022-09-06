import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./page/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'index-chofer',
    loadChildren: () => import('./page/chofer/index-chofer/index-chofer.module').then( m => m.IndexChoferPageModule)
  },
  {
    path: 'perfil-chofer',
    loadChildren: () => import('./page/chofer/perfil-chofer/perfil-chofer.module').then( m => m.PerfilChoferPageModule)
  },
  {
    path: 'crear-viaje',
    loadChildren: () => import('./page/chofer/crear-viaje/crear-viaje.module').then( m => m.CrearViajePageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./page/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'estudiante',
    loadChildren: () => import('./page/estudiante/estudiante.module').then( m => m.EstudiantePageModule)
  },
  {
    path: 'capacidad-transporte',
    loadChildren: () => import('./page/chofer/capacidad-transporte/capacidad-transporte.module').then( m => m.CapacidadTransportePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
