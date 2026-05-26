export const PRESUNCAO={comercio:0.08,industria:0.08,servicos:0.32,transporte_cargas:0.08,transporte_passageiros:0.16,servicos_hospitalares:0.08};
export function calcularLucroPresumido({faturamento,atividade}){const p=PRESUNCAO[atividade]??0.32,b=faturamento*p,irpj=b*0.15+Math.max(0,b-20000)*0.1,csll=b*0.09;return{irpj,csll,pis:faturamento*0.0065,cofins:faturamento*0.03};}
