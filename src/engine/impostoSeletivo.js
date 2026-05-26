import { ITENS_IS } from '../data/impostoSeletivo';
export const calcularIS=(itens={})=>Object.entries(itens).reduce((s,[k,v])=>s+(v||0)*(ITENS_IS[k]||0),0);
