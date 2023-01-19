import { Component } from '@angular/core';

import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html'
})
export class ByRegionComponent {

  regiones: string[] = ['EU','EFTA','CARICO','PA','AU','USAN','EE','AL', 'ASEAN', 'CAIS','CEFTA','NAFTA','SAARC'];
  regionActiva: string = '';
  countries: Country[] = [];

  constructor( private countryService: CountryService){ }

  getClaseCSS( region: string): string{
    return (region === this.regionActiva) 
        ? 'btn btn-primary m-2' 
        : 'btn btn-outline-primary m-2';
  }

  activarRegion( region: string){

    if( region === this.regionActiva){return};
    this.regionActiva = region;
    this.countries = [];

    this.countryService.buscarRegion(region)
      .subscribe(( countries) => this.countries = countries)
  }

}
