import { Component } from '@angular/core';
import { ElementoService } from 'src/app/services/elemento/elemento.service';

@Component({
  selector: 'app-effetcs',
  templateUrl: './effetcs.component.html',
  styleUrls: ['./effetcs.component.css'],
})
export class EffetcsComponent {
  constructor(readonly elementoService: ElementoService) {}

  ajustarTemperatura(temperatura: number) {
    this.elementoService.ajustarTemperatura(temperatura);
  }
}
