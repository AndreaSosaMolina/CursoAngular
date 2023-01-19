import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
})
export class ByCapitalComponent {

  termino: string = '';
  hayError: boolean = false;
  countries: Country[] = [];

  constructor(private countryService: CountryService){}

  buscarPorCapital( capital: string){
    this.termino = capital;
    
    this.countryService.buscarCapital(capital)
        .subscribe(( countries) => {
          this.countries = countries
        }, (err) => {
          this.hayError = true;
          this.countries = [];
        });

  }

  


}
