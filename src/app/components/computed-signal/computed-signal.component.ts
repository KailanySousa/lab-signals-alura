import { Component } from '@angular/core';
import Elemento from 'src/app/services/elemento/elemento.interface';
import { ElementoService } from 'src/app/services/elemento/elemento.service';

@Component({
  selector: 'app-computed-signal',
  templateUrl: './computed-signal.component.html',
  styleUrls: ['./computed-signal.component.css'],
})
export class ComputedSignalComponent {
  elementos: Elemento[];

  constructor(readonly elementoService: ElementoService) {
    this.elementos = this.elementoService.elementos;
  }

  selecionarElemento1(elemento: Elemento) {
    this.elementoService.selecionarElemento1(elemento);
  }

  selecionarElemento2(elemento: Elemento) {
    this.elementoService.selecionarElemento2(elemento);
  }

  elementoCalculado1() {
    return this.elementoService.elementoCalculado1();
  }

  elementoCalculado2() {
    return this.elementoService.elementoCalculado2();
  }

  massaAtomicaTotal() {
    return this.elementoService.massaAtomicaTotal();
  }
}
