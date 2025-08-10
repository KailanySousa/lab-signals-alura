import { Component } from '@angular/core';
import Elemento from 'src/app/services/elemento/elemento.interface';
import { ElementoService } from 'src/app/services/elemento/elemento.service';

@Component({
  selector: 'app-signals-intro',
  templateUrl: './signals-intro.component.html',
  styleUrls: ['./signals-intro.component.css'],
})
export class SignalsIntroComponent {
  constructor(readonly elementoService: ElementoService) {}

  selecionarElemento(elemento: Elemento) {
    this.elementoService.selecionarElemento(elemento);
  }
}
