import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CapacidadTransportePage } from './capacidad-transporte.page';

const routes: Routes = [
  {
    path: '',
    component: CapacidadTransportePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CapacidadTransportePageRoutingModule {}
