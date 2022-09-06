import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CapacidadTransportePageRoutingModule } from './capacidad-transporte-routing.module';

import { CapacidadTransportePage } from './capacidad-transporte.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CapacidadTransportePageRoutingModule
  ],
  declarations: [CapacidadTransportePage]
})
export class CapacidadTransportePageModule {}
