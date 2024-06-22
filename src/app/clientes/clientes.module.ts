import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaInicioComponent } from './pagina-inicio/pagina-inicio.component';
import { FormsModule } from '@angular/forms';
import { ListadoClientesComponent } from './listado-clientes/listado-clientes.component';
import { AgregarClienteComponent } from './agregar-cliente/agregar-cliente.component';



@NgModule({
  declarations: [
    PaginaInicioComponent,
    ListadoClientesComponent,
    AgregarClienteComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  //Creamos el export
  exports:[
    PaginaInicioComponent,
    ListadoClientesComponent,
    AgregarClienteComponent
  ]
})
export class ClientesModule { }
