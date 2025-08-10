import { computed, effect, Injectable, signal } from '@angular/core';
import Elemento from './elemento.interface';

@Injectable({
  providedIn: 'root',
})
export class ElementoService {
  elementoSelecionado = signal<Elemento | null>(null);
  temperatura = signal<number>(25);
  estadoFisico = signal<string>('');
  favoritos = signal<Elemento[]>([]);

  elementos: Elemento[] = [
    {
      nome: 'Hidrogênio',
      simbolo: 'H',
      numeroMassa: 1,
      pontoFusao: -259,
      pontoEbulicao: -253,
    },
    {
      nome: 'Carbono',
      simbolo: 'C',
      numeroMassa: 12,
      pontoFusao: 3550,
      pontoEbulicao: 4027,
    },
    {
      nome: 'Nitrogênio',
      simbolo: 'N',
      numeroMassa: 14,
      pontoFusao: -210,
      pontoEbulicao: -196,
    },
    {
      nome: 'Oxigênio',
      simbolo: 'O',
      numeroMassa: 16,
      pontoFusao: -218,
      pontoEbulicao: -183,
    },
    {
      nome: 'Sódio',
      simbolo: 'Na',
      numeroMassa: 23,
      pontoFusao: 98,
      pontoEbulicao: 883,
    },
    {
      nome: 'Cloro',
      simbolo: 'Cl',
      numeroMassa: 35,
      pontoFusao: -101,
      pontoEbulicao: -34,
    },
  ];

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

  // sinal computado: valores derivados de outros sinais
  elementoInfo = computed(() => {
    const elemento = this.elementoSelecionado();
    return elemento
      ? `Nome: ${elemento.nome}, Símbolo: ${elemento.simbolo}, Número de massa: ${elemento.numeroMassa}`
      : 'Nenhum elemento selecionado';
  });

  selecionarElemento(elemento: Elemento) {
    this.elementoSelecionado.set(elemento);
  }

  ajustarTemperatura(temperatura: number) {
    this.temperatura.set(temperatura);
  }

  obterFavoritos() {
    return this.favoritos();
  }

  obterElementoSelecionado() {
    return this.elementoSelecionado();
  }

  adicionarFavorito(elemento: Elemento) {
    this.favoritos.update((favoritos) => [...favoritos, elemento]);
  }

  removerFavorito(elemento: Elemento) {
    this.favoritos.update((favoritos) =>
      favoritos.filter((fav) => fav !== elemento)
    );
  }
}
