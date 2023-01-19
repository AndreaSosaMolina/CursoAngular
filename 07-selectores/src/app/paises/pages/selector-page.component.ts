import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { switchMap, tap } from 'rxjs/operators'

import { PaisesService } from '../services/paises.service';
import { PaisSmall } from '../interfaces/paises.interface';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  
})
export class SelectorPageComponent implements OnInit{

  miFormulario: FormGroup = this.fb.group({
    region :  ['', Validators.required],
    pais:     ['', Validators.required],
    frontera: ['', Validators.required]
  })
  //llenar selectores
  regiones:   string[]    = [];
  paises:     PaisSmall[] = [];
  // fronteras:  string[] | undefined  = [];
  fronteras:  PaisSmall[] = []


  //UI
  cargando: boolean = false;


  constructor( private fb: FormBuilder,
               private paisesService: PaisesService){}
  ngOnInit(): void {

    this.regiones = this.paisesService.regiones;

    // Cuando cambia la region
    this.miFormulario.get('region')?.valueChanges
      .pipe(
        tap( (_) => {
          this.miFormulario.get('pais')?.reset('');
          this.cargando =  true;
         
        }),
        switchMap( region =>  this.paisesService.getPaisesPorRegion( region )) 
      )
      .subscribe( paises => {
        this.paises = paises
        this.cargando = false
        
    });

    // Cuando cambia el pais
    this.miFormulario.get('pais')?.valueChanges
    .pipe(
      tap( () => {
        this.cargando= true;
        this.miFormulario.get('frontera')?.reset('')
      }),
      switchMap( codigo => this.paisesService.getPaisPorCodigo(codigo)),
      // switchMap( pais => this.paisesService.getPaisesPorCodigos(pais ))

      )
      .subscribe( pais => {
        console.log(pais);
        // this.fronteras = pais ? pais[0]?.borders : []
        this.cargando = false
        
      })
  }

  guardar(){
    console.log(this.miFormulario.value)
  }

}
