import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  
})
export class BasicosComponent {

  nombreLower: string = 'andrea';
  nombreUpper: string = 'ANDREA';
  nombreCompleto: string = 'aNdReA SoSA';

  fecha: Date = new Date(); // el dia de hoy



}
