import { Component, Input, input } from '@angular/core';
import { ICliente } from '../interfaces/clientes';

@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrl: './listado-clientes.component.css'
})
export class ListadoClientesComponent {
@Input()
clientes: ICliente[] = []
}
