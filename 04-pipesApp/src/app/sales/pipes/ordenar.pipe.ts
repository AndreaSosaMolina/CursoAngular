import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/sales.interfaces';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform( valores: Heroe[], orderPor: string = 'sin valor'): Heroe[] {

    switch(orderPor){

      case 'nombre':
        return valores.sort((a, b) => (a.nombre > b.nombre) ? 1 : -1);

      case 'vuela':
        return valores.sort((a, b) => (a.vuela > b.vuela) ? -1 : 1);
      
      case 'color':
        return valores.sort((a, b) => (a.color > b.color) ? 1 : -1)

      default:
        return valores;
    }
  }

}
