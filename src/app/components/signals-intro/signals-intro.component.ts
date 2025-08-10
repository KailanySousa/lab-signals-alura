import { Component, computed, signal } from '@angular/core';
import Elemento, { ELEMENTOS } from './signals-intro.const';

@Component({
  selector: 'app-signals-intro',
  templateUrl: './signals-intro.component.html',
  styleUrls: ['./signals-intro.component.css'],
})
export class SignalsIntroComponent {
  elementoSelecionado = signal<Elemento | null>(null);

  elementos: Elemento[] = ELEMENTOS;

  selecionarElemento(elemento: Elemento) {
    this.elementoSelecionado.set(elemento);
  }

  // sinal computado: valores derivados de outros sinais
  elementoInfo = computed(() => {
    const elemento = this.elementoSelecionado();
    return elemento
      ? `Nome: ${elemento.nome}, Símbolo: ${elemento.simbolo}, Número de massa: ${elemento.numeroMassa}`
      : 'Nenhum elemento selecionado';
  });
}
