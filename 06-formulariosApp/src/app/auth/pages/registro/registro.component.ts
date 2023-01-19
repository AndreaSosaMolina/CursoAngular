import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { patronNombre, emailPattern, noPuedeSerStrider } from '../../../shared/validator/validaciones';
import { ValidatorService } from '../../../shared/validator/validator.service';
import { EmailValidatorService } from '../../../shared/validator/email-validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {


  get emailErrorsMsg(): string {
    const errors = this.miFormulario.get('email')?.errors;

    if(errors?.['required']){
      return 'El email es obligatorio'
    } else if(errors?.['pattern']){
      return 'El valor no tiene formato de correo'
    } else if(errors?.['emailTomado']){
      return 'El correo ya está registrado'
    }
    return '';
  }


  miFormulario: FormGroup = this.fb.group({
    nombre:       ['',[ Validators.required, Validators.pattern(this.vs.patronNombre)]],
    email:        ['',[ Validators.required, Validators.pattern(this.vs.emailPattern)], [this.emailValidator]],
    username:     ['',[ Validators.required, this.vs.noPuedeSerStrider]],
    password:     ['',[ Validators.required, Validators.minLength(6)]],
    passwordPass: ['',[ Validators.required]]

  }, {
    validators: [ this.vs.camposIguales('password', 'passwordPass')]
  })

  constructor( private fb: FormBuilder,
               private vs: ValidatorService,
               private emailValidator: EmailValidatorService){}

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre:       'Andrea Sosa',
      email:        'test1@test.com',
      username:     'test1',
      password:     '123456',
      passwordPass: '123456'
    })
  
  }

  campoValido( campo: string){
   return this.miFormulario.get(campo)?.invalid && 
          this.miFormulario.get(campo)?.touched
  }

  

  submitFormulario(){
    console.log(this.miFormulario.value);
    this.miFormulario.markAllAsTouched();
    
  }
}
