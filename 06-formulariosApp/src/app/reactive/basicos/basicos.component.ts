import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.scss']
})
export class BasicosComponent implements OnInit {
  // Con mas codigo y declarar cada campo
  // miFormulario: FormGroup = new FormGroup({
  //   nombre:      new FormControl('RTX '),
  //   precio:      new FormControl(1500),
  //   existencias: new FormControl(5)
  // })

  //Con formbuilder mas rapido y "menos codigo"
  miFormulario: FormGroup = this.fb.group({
    nombre: ['',[ Validators.required, Validators.minLength(3)]],
    precio: [0, [Validators.required, Validators.min(0)]],
    existencias: [0, [Validators.required, Validators.min(0)]]
  })

  constructor( private fb: FormBuilder){
  }

  ngOnInit(): void {
    this.miFormulario.setValue({
      nombre: 'RTX',
      precio: 1500,
      existencias: 10
    })
  }

  campoValido( campo: string){
    return this.miFormulario.controls[campo].errors 
          && this.miFormulario.controls[campo].touched
  }

  guardar(){

    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log(this.miFormulario.value);
    this.miFormulario.reset();
    
  }

}
