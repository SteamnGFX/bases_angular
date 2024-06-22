import { Component } from '@angular/core';

@Component({
  selector: 'app-acumulador',
  standalone: true,
  imports: [],
  templateUrl: './acumulador.component.html',
  styleUrl: './acumulador.component.css'
})
export class AcumuladorComponent {

  numero: number = 2;

  duplicar(){
    this.numero = this.numero * 2;
  }

  triplicar(){
    this.numero = this.numero * 3;
  }

  reiniciar(){
    this.numero = 2;
  }
}

