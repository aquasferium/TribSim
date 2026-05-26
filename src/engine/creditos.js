import { ALIQUOTA_CBS_PADRAO } from './cbs';
import { ALIQUOTAS_IBS_UF } from '../data/aliquotasIBS';
export function calcularCreditosLancamentos(lancamentos,uf){const ibs=(ALIQUOTAS_IBS_UF[uf]||ALIQUOTAS_IBS_UF._default).total;return lancamentos.map(l=>({...l,creditoCBS:l.valor*ALIQUOTA_CBS_PADRAO,creditoIBS:l.valor*ibs}));}
