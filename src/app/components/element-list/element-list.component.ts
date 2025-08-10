import { Component } from '@angular/core';
import Elemento from 'src/app/services/elemento/elemento.interface';
import { ElementoService } from 'src/app/services/elemento/elemento.service';

@Component({
  selector: 'app-element-list',
  templateUrl: './element-list.component.html',
  styleUrls: ['./element-list.component.css'],
})
export class ElementListComponent {
  constructor(readonly elementoService: ElementoService) {}

  alternarFavorito(elemento: Elemento) {
    const isFavorito = this.elementoService.favoritos().includes(elemento);
    if (isFavorito) {
      this.elementoService.removerFavorito(elemento);
    } else {
      this.elementoService.adicionarFavorito(elemento);
    }
  }

  adicionarFavorito(elemento: Elemento) {
    this.elementoService.adicionarFavorito(elemento);
  }

  removerFavorito(elemento: Elemento) {
    this.elementoService.removerFavorito(elemento);
  }
}
