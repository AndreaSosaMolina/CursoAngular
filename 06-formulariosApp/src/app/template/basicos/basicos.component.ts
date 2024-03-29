import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.scss']
})
export class BasicosComponent {

  @ViewChild('miFormulario') miFormulario!: NgForm;

  initForm = {
    producto: 'RTX',
    precio: 10,
    existencias: 10
  }


  nombreValido(): boolean {
    return this.miFormulario?.form.controls['producto']?.invalid &&
            this.miFormulario?.form.controls['producto']?.touched;
  }

  precioValido(): boolean {
    return this.miFormulario?.form.controls['precio']?.touched &&
            this.miFormulario?.form.controls['precio']?.value < 0;
  }

  guardar(){
    console.log(this.miFormulario);

    this.miFormulario.resetForm()
  }

}
