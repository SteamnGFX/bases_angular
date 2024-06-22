import { Component } from '@angular/core';
import { ICliente } from '../interfaces/clientes';
import { empty } from 'rxjs';

@Component({
  selector: 'app-pagina-inicio',
  templateUrl: './pagina-inicio.component.html',
  styleUrl: './pagina-inicio.component.css'
})
export class PaginaInicioComponent {

   //Lista de clientes

   clientes: ICliente[] = [
    {
      nombre: 'America Montes',
      credito: 100000
    },{
      nombre: 'Angel Martinez',
      credito: 999999
    },{
      nombre: 'Pedro Morales',
      credito: 75000
    }
  ]

  agregarNuevoCliente(cliente: ICliente){
    this.clientes.push(cliente)
  }

}
