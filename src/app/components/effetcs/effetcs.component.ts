import { Component } from '@angular/core';
import Elemento from 'src/app/services/elemento/elemento.interface';
import { ElementoService } from 'src/app/services/elemento/elemento.service';

@Component({
  selector: 'app-effetcs',
  templateUrl: './effetcs.component.html',
  styleUrls: ['./effetcs.component.css'],
})
export class EffetcsComponent {
  constructor(readonly elementoService: ElementoService) {}

  selecionarElemento(elemento: Elemento) {
    this.elementoService.selecionarElemento(elemento);
  }

  ajustarTemperatura(temperatura: number) {
    this.elementoService.ajustarTemperatura(temperatura);
  }
}
