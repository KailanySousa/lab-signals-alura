import { Component } from '@angular/core';
import Elemento from 'src/app/services/elemento/elemento.interface';
import { ElementoService } from 'src/app/services/elemento/elemento.service';

@Component({
  selector: 'app-elements',
  templateUrl: './elements.component.html',
  styleUrls: ['./elements.component.css'],
})
export class ElementsComponent {
  constructor(readonly elementoService: ElementoService) {}

  selecionarElemento(elemento: Elemento) {
    this.elementoService.selecionarElemento(elemento);
  }
}
