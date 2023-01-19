import { Component, Input } from '@angular/core';
import { CountryService } from '../../services/country.service';

import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
    `
      li{
        cursor: pointer;
      }
    `
  ]
})
export class ByCountryComponent {

  termino: string = '';
  hayError: boolean = false;
  countries: Country[] = [];

  countriesSuggest: Country[] = [];
  mostrarSugerencias: boolean = false;

  //inyeccion del servicio
  constructor( private countryService: CountryService){}

  buscar( text : string){
    
    this.hayError = false;
    this.termino = text;

    this.countryService.buscarPais(text)
      .subscribe( (countries) => {
        console.log(countries);
        this.countries = countries;
       
      }, (err) => {
        this.hayError = true;
        this.countries = [];
      });
  }

  sugerencias( termino: string){
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias = true;
    
    this.countryService.buscarPais( termino)
      .subscribe( 
        countries => this.countriesSuggest = countries.splice(0, 5),
         (err) => this.countriesSuggest = []
        );
       
  }

  buscarSugerido( termino: string){
      this.buscar(termino);
  }


}

