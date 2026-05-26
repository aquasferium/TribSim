import InputMoeda from '../ui/InputMoeda';

export default function EtapaFaturamento({ dados, setDados }) {
  return (
    <section className='rounded bg-superficie p-4 space-y-3'>
      <h3 className='font-display text-xl'>Etapa 2 · Entradas com Crédito</h3>
      <InputMoeda id='compras' label='Compras de mercadorias/insumos' value={dados.compras} onChange={(v) => setDados((s) => ({ ...s, compras: v }))} />
      <InputMoeda id='servicos' label='Serviços contratados' value={dados.servicos} onChange={(v) => setDados((s) => ({ ...s, servicos: v }))} />
      <InputMoeda id='ativo' label='Aquisições de ativo imobilizado' value={dados.ativo} onChange={(v) => setDados((s) => ({ ...s, ativo: v }))} />
      <label className='grid gap-1'>
        <span className='text-sm text-texto-suave'>% da receita em alíquota zero ({dados.percZero}%)</span>
        <input type='range' min='0' max='100' value={dados.percZero} onChange={(e) => setDados((s) => ({ ...s, percZero: Number(e.target.value) }))} />
      </label>
      <label className='grid gap-1'>
        <span className='text-sm text-texto-suave'>% da receita com redução de 40% ({dados.percReducao}%)</span>
        <input type='range' min='0' max='100' value={dados.percReducao} onChange={(e) => setDados((s) => ({ ...s, percReducao: Number(e.target.value) }))} />
      </label>
    </section>
  );
}
