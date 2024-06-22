import { Injectable } from '@angular/core';
import { Datitos, GiphyData } from './interfaces/giphyData';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GiphyService {

  url: string = 'https://api.giphy.com/v1/gifs/trending';
  api_key: string = 'dhNUcKEa1w3tfuL46F5tp3HjeV4y3PB1';
  limit: number = 100;
  resultados: Datitos[] = [];



  constructor(private http: HttpClient) { }

  obtenerGifs(): Datitos[] {
    //Generamos la petición al API

    this.http.get<GiphyData>(`${this.url}?api_key=${this.api_key}&limit=${this.limit}`).subscribe(resp => {
      this.resultados = resp.data;
    })
    return this.resultados;
  }
}
