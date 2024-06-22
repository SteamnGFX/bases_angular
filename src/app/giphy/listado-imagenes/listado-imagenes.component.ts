import { Component } from '@angular/core';
import { Datitos } from '../interfaces/giphyData';
import { GiphyService } from '../giphy.service';

@Component({
  selector: 'app-listado-imagenes',
  templateUrl: './listado-imagenes.component.html',
  styleUrl: './listado-imagenes.component.css'
})
export class ListadoImagenesComponent {

  resultados: Datitos[] = this.GiphyService.obtenerGifs();

  //inyecamos el servicio
  constructor(private GiphyService: GiphyService){}

  obtenerImagenes() {
    this.resultados = this.GiphyService.obtenerGifs();
  }
}
