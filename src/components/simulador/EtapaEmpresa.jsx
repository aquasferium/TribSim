import InputMoeda from '../ui/InputMoeda';
import { UFS } from '../../data/ufs';
import { ATIVIDADES } from '../../data/atividades';

export default function EtapaEmpresa({ dados, setDados }) {
  return (
    <section className='rounded bg-superficie p-4 space-y-3'>
      <h3 className='font-display text-xl'>Etapa 1 · Perfil da Empresa</h3>
      <label className='grid gap-1'>
        <span className='text-sm text-texto-suave'>Regime tributário</span>
        <select value={dados.regime} onChange={(e) => setDados((s) => ({ ...s, regime: e.target.value }))} className='rounded border border-borda bg-card p-2'>
          <option value='simples'>Simples Nacional — receita até R$ 4,8M</option>
          <option value='lucro_presumido'>Lucro Presumido — hoje sem crédito PIS/COFINS</option>
          <option value='lucro_real'>Lucro Real — não cumulativo</option>
        </select>
      </label>
      <label className='grid gap-1'>
        <span className='text-sm text-texto-suave'>Tipo de atividade</span>
        <select value={dados.atividade} onChange={(e) => setDados((s) => ({ ...s, atividade: e.target.value }))} className='rounded border border-borda bg-card p-2'>
          {ATIVIDADES.map((a) => <option key={a.id} value={a.id}>{a.label}</option>)}
        </select>
      </label>
      <label className='grid gap-1'>
        <span className='text-sm text-texto-suave'>UF de operação principal</span>
        <select value={dados.uf} onChange={(e) => setDados((s) => ({ ...s, uf: e.target.value }))} className='rounded border border-borda bg-card p-2'>
          {UFS.map((uf) => <option key={uf}>{uf}</option>)}
        </select>
      </label>
      <InputMoeda id='receita12m' label='Receita bruta acumulada em 12 meses' value={dados.receita12m} onChange={(v) => setDados((s) => ({ ...s, receita12m: v }))} />
      <InputMoeda id='faturamento' label='Faturamento do mês da simulação' value={dados.faturamento} onChange={(v) => setDados((s) => ({ ...s, faturamento: v }))} />
      {dados.regime === 'simples' && <InputMoeda id='folha12m' label='Folha de salários 12 meses (Fator R)' hint='Usado para decidir Anexo III ou V no Simples.' value={dados.folha12m} onChange={(v) => setDados((s) => ({ ...s, folha12m: v }))} />}
    </section>
  );
}
