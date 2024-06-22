import { Component } from '@angular/core';
import { ICliente } from '../interfaces/clientes';
import { empty } from 'rxjs';
import { ClientesService } from '../clientes.service';

@Component({
  selector: 'app-pagina-inicio',
  templateUrl: './pagina-inicio.component.html',
  styleUrl: './pagina-inicio.component.css'
})
export class PaginaInicioComponent {

  // Inyectamos el servicio creado de clientes

  constructor(private ClientesService: ClientesService){
    
  }

  // agregarNuevoCliente(cliente: ICliente){
  //   this.clientes.push(cliente)
  // }

}
