import { Injectable } from '@angular/core';
import { ICliente } from './interfaces/clientes';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  //Lista de clientes
  private _clientes: ICliente[] = []

  //Creamos un metodo get par aacceder a la lista.
  get clientes(): ICliente[] {
    return this._clientes;
  }

  //Método para agregar un nuevo cliente a la lista
  agregarCliente(cliente: ICliente) {
    this._clientes.push(cliente);

    localStorage.setItem('cliente', JSON.stringify(this._clientes));

  }

 
  constructor() {
    //Recuperamos del localStorage los clientes previos
    this._clientes = JSON.parse(localStorage.getItem('cliente')!) || [];
  }
}
