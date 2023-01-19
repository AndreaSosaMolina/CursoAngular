import { Component } from '@angular/core';
import { interval } from 'rxjs';


@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  
})

export class NoComunesComponent {

  // i18nSelect
  nombre: string = 'Andrea';
  genero: string = 'femenino';

  inviteMap: any = {'masculino': 'invitarlo', 'femenino': 'invitarla'};

  // in18Plural
  clientes: string[] = ['Maria','Pepe','Julian','Ana', 'Lola'];
  clientesMap = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    'other': 'tenemos # clientes esperando'
  }

  cambiarPersona(){
   this.nombre = 'Raul';
   this.genero = 'masculino';
  
  }

  borrarCliente(){
    this.clientes.pop()
  }
// KeyValues
  persona = {
    nombre: 'Andrea',
    edad: 27,
    direccion: 'España'
  }

  // JsonPipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Ironman',
      vuela: true
    },
    {
      nombre: 'Batman',
      vuela: false
    }
  ]

  // AsyncPipe
  miObservable = interval(5000)

  valorPromesa = new Promise((resolve, reject ) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa')
    }, 3500);
  });



}
