import { Component, Input, input } from '@angular/core';
import { ICliente } from '../interfaces/clientes';
import { ClientesService } from '../clientes.service';

@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrl: './listado-clientes.component.css'
})
export class ListadoClientesComponent {
  // @Input()
  // clientes: ICliente[] = []

  //Inyectamos el servicio
  constructor(private ClientesService: ClientesService) { }

  get clientes(): ICliente[] {
    return this.ClientesService.clientes;
  }
}
