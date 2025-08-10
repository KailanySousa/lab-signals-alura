import { Component, effect, signal } from '@angular/core';
import Elemento, { ELEMENTOS } from './effects.const';

@Component({
  selector: 'app-effetcs',
  templateUrl: './effetcs.component.html',
  styleUrls: ['./effetcs.component.css'],
})
export class EffetcsComponent {
  elementoSelecionado = signal<Elemento | null>(null);
  temperatura = signal<number>(25);
  estadoFisico = signal<string>('');

  elementos: Elemento[] = ELEMENTOS;

  constructor() {
    effect(
      () => {
        const elemento = this.elementoSelecionado();

        if (elemento) {
          let estadoFisico = this.verificaEstadoFisico(elemento);
          this.estadoFisico.set(estadoFisico);
        }
      },
      { allowSignalWrites: true }
    );
  }

  private verificaEstadoFisico(elemento: Elemento) {
    const temperatura = this.temperatura();

    let estadoFisico = '';
    if (temperatura < elemento.pontoFusao) {
      estadoFisico = 'Sólido';
    } else if (
      temperatura >= elemento.pontoFusao &&
      temperatura < elemento.pontoEbulicao
    ) {
      estadoFisico = 'Líquido';
    } else {
      estadoFisico = 'Gasoso';
    }
    return estadoFisico;
  }

  selecionarElemento(elemento: Elemento) {
    this.elementoSelecionado.set(elemento);
  }

  ajustarTemperatura(temperatura: number) {
    this.temperatura.set(temperatura);
  }
}
