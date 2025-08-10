export default interface Elemento {
  nome: string;
  simbolo: string;
  numeroMassa: number;
}

export const ELEMENTOS: Elemento[] = [
  { nome: 'Hidrogênio', simbolo: 'H', numeroMassa: 1 },
  { nome: 'Carbono', simbolo: 'C', numeroMassa: 12 },
  { nome: 'Nitrogênio', simbolo: 'N', numeroMassa: 14 },
  { nome: 'Oxigênio', simbolo: 'O', numeroMassa: 16 },
  { nome: 'Sódio', simbolo: 'Na', numeroMassa: 23 },
  { nome: 'Cloro', simbolo: 'Cl', numeroMassa: 35 },
];
