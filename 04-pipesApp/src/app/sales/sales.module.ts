import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NumbersComponent } from './pages/numbers/numbers.component';
import { NoComunesComponent } from './pages/no-comunes/no-comunes.component';
import { BasicosComponent } from './pages/basicos/basicos.component';
import { OrdenarComponent } from './pages/ordenar/ordenar.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { MayusculasPipe } from './pipes/mayusculas.pipe';
import { VuelaPipe } from './pipes/vuela.pipe';
import { OrdenarPipe } from './pipes/ordenar.pipe';



@NgModule({
  declarations: [
    // Componentes
    NumbersComponent,
    NoComunesComponent,
    BasicosComponent,
    OrdenarComponent,

    // Pipes
    MayusculasPipe,
    VuelaPipe,
    OrdenarPipe
  ],
  exports:[
    NumbersComponent,
    NoComunesComponent,
    BasicosComponent,
    OrdenarComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ]
})
export class SalesModule { }
