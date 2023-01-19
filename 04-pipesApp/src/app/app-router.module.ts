import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BasicosComponent } from './sales/pages/basicos/basicos.component';
import { NumbersComponent } from './sales/pages/numbers/numbers.component';
import { NoComunesComponent } from './sales/pages/no-comunes/no-comunes.component';
import { OrdenarComponent } from './sales/pages/ordenar/ordenar.component';

const routes: Routes = [
  {
    path: '',
    component: BasicosComponent,
    pathMatch: 'full'
  }, 
  {
    path: 'numeros',
    component: NumbersComponent
  },
  {
    path: 'no-comunes',
    component: NoComunesComponent
  },
  {
    path: 'ordenar',
    component: OrdenarComponent
  },
  {
    path: '**',
    redirectTo: ''
  }

];

@NgModule({
  imports:[
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule
  ]
  
})
export class AppRouterModule { }
