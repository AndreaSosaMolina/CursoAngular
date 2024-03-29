import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country.interface';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrl: string = 'https://restcountries.com/v3.1';
  private apiRegion: string = 'https://restcountries.com/v2';

  get httpParams(){
    return new HttpParams().set('fields', 'name,capital,cca2,flags.svg,population');
  }

  constructor( private http: HttpClient) { }

  buscarPais( termino: string ): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${termino}`
    return this.http.get<Country[]>(url, {params : this.httpParams})
  }

  buscarCapital(capital: string): Observable<Country[]>{
    const url = `${this.apiUrl}/capital/${capital}`
    return this.http.get<Country[]>(url, {params: this.httpParams})
  }

  getPaisPorAlpha(id: string): Observable<Country[]>{
    const url = `${this.apiUrl}/alpha/${id}`
    return this.http.get<Country[]>(url)
  }

  buscarRegion( region: string): Observable<Country[]>{
    const httpParamsRegion = new HttpParams()
      .set('fields', 'name,capital,cca2,flags.png,population');
    
    const url = `${this.apiRegion}/regionalbloc/${region}`;
    return this.http.get<Country[]>(url, {params: httpParamsRegion})
      .pipe(
        tap(console.log)
      )
    
  }

}
