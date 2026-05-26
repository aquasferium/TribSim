export const formatMoeda=v=>new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'}).format(Number(v)||0);
export const formatPercentual=v=>`${((Number(v)||0)*100).toFixed(2)}%`;
