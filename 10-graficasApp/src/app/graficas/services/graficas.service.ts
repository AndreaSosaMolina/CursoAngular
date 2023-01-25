import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GraficasService {

  constructor( private http: HttpClient) { }

  getUsuariosRRSS(){
    return this.http.get('http://localhost:3000/grafica');
  }

  getUsuariosRRSSDonaData(){
    return this.getUsuariosRRSS()
      .pipe(
        delay(1000),
        map( data => {
          const labels = Object.keys( data);
          const values =  Object.values( data);
          return {labels, values}
        })
      )
  }

}
