import SliderAno from '../ui/SliderAno';

export default function EtapaConfig({ dados, setDados }) {
  return (
    <section className='rounded bg-superficie p-4 space-y-2'>
      <h3 className='font-display text-xl'>Etapa 3 · Configurações</h3>
      <p className='text-sm text-texto-suave'>Ano de referência para aplicar a transição entre sistema antigo e CBS/IBS.</p>
      <SliderAno value={dados.ano} onChange={(v) => setDados((s) => ({ ...s, ano: v }))} />
      <div className='text-sm'>Ano selecionado: <strong>{dados.ano}</strong></div>
    </section>
  );
}
