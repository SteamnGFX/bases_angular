import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICliente } from '../interfaces/clientes';
import { ClientesService } from '../clientes.service';

@Component({
  selector: 'app-agregar-cliente',
  templateUrl: './agregar-cliente.component.html',
  styleUrl: './agregar-cliente.component.css'
})
export class AgregarClienteComponent {

  nuevo: ICliente = {
    nombre: "",
    credito: 0
  }
  //Definimos una variable de salida
  //@Output()
  //onNuevoCliente: EventEmitter<ICliente> = new EventEmitter()

  //Inyectamos el servicio de clientes
  constructor(private ClientesService: ClientesService){}

  agregar(){
    
    if (this.nuevo.nombre == ""){
      alert("Ingresa un nombre!")
      return
    } 
    
    if(this.nuevo.credito == 0){
      alert("Ingresa un credito!")
      return
    } 

      //Emitimos un nuevo evento tipo onNuevoCliente
      //this.onNuevoCliente.emit(this.nuevo);
      
      //Agregaremos un nuevo cliente
      this.ClientesService.agregarCliente(this.nuevo);

      this.nuevo = {
        nombre: "",
        credito: 0
      }
    }
}
