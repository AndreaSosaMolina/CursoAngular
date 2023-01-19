import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';

import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-see-country',
  templateUrl: './see-country.component.html'
})
export class SeeCountryComponent implements OnInit{

  country!: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: CountryService
    ){}

  ngOnInit(): void {

    
     this.activatedRoute.params
       .pipe(
         switchMap( (params) => this.paisService.getPaisPorAlpha(params['id'])),
         tap( console.log)
        )
       .subscribe( resp => this.country = resp[0]);

   // Otra manera de hacerlo
      // this.activatedRoute.params
      //   .subscribe( ({id}) => {
      //     console.log(id);

      //     this.paisService.getPaisPorAlpha( id )
      //     .subscribe( country => {
      //     console.log(country);

      //   }); 
      // });
  }

}
