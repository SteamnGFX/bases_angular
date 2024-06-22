import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoImagenesComponent } from './listado-imagenes/listado-imagenes.component';
import { GiphyService } from './giphy.service';



@NgModule({
  declarations: [
    ListadoImagenesComponent
  ],
  imports: [
    CommonModule
  ], exports: [
    ListadoImagenesComponent
  ], providers:[
    GiphyService
  ]
})
export class GiphyModule { }
