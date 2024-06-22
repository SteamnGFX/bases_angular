import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AcumuladorComponent } from './acumulador/acumulador.component';
import { ClientesModule } from './clientes/clientes.module';
import { CompartidoModule } from './compartido/compartido.module';
import { GiphyModule } from './giphy/giphy.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AcumuladorComponent,ClientesModule,CompartidoModule,GiphyModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = obtenerSaludo() + ", Bases de Angular";
}

function obtenerSaludo(): string {
  const ahora = new Date();
  const horas = ahora.getHours();

  if (horas >= 5 && horas < 12) {
    return "Buenos Días";
  } else if (horas >= 12 && horas < 18) {
    return "Buenas Tardes";
  } else {
    return "Buenas Noches";
  }
}