import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.scss']
})
export class SwitchesComponent implements OnInit{

  miFormulario: FormGroup = this.fb.group({
    genero: [ 'M', Validators.required],
    notificaciones: [ true, Validators.required],
    condiciones: [ false, Validators.requiredTrue] //el valor debe ser true
  });

  persona = {
    genero: 'F',
    notificaciones: true,
  }

  constructor( private fb: FormBuilder){}


  ngOnInit(): void {
    this.miFormulario.reset({
      ...this.persona,
      condiciones: true
    });//aparte de enviar el obj Persona, se usa el spreat y añadimos los valores
     //que se necesitan


    this.miFormulario.valueChanges.subscribe( form => {
      delete form.condiciones;
      this.persona = form
    })
  }

  guardar(){
    const formValue ={ ...this.miFormulario.value};
    delete formValue.condiciones

    console.log(formValue);
    
  }

}
