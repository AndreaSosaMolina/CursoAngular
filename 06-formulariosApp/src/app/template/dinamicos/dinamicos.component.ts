import { Component } from '@angular/core';

interface Persona {
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito {
  id: number;
  nombre: string;

}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.scss']
})
export class DinamicosComponent {

  nuevoJuego: string = '';
  
  persona: Persona = {
    nombre: 'Andrea',
    favoritos: [
      { id: 1, nombre: 'Sims 4'},
      { id: 2, nombre: 'MarioKart'}
    ]

  }

  agregarJuego(){
    const nuevoFavorito: Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoJuego
    }

    this.persona.favoritos.push({...nuevoFavorito});
    this.nuevoJuego = '';
    
    
  }

  guardar(){
    console.log('Formulario posteado');
    
  }

  eliminar(index: number){
    this.persona.favoritos.splice(index, 1)
    
  }

}
