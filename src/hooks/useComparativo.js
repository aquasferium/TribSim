import { calcular } from '../engine';
export const useComparativo=dados=>['simples','lucro_presumido','lucro_real'].map(regime=>({regime,resultado:calcular({...dados,regime})}));
