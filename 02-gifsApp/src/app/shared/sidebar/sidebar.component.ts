import { Component } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  
})
export class SidebarComponent {
  
  
  get historial(){
    return this.gifServive.historial;
  }

  constructor( private gifServive: GifsService){

  }

  buscar( item: string){
    this.gifServive.buscarGifs(item)
  }

}
