import { useSimulacao } from '../hooks/useSimulacao';
import Stepper from '../components/ui/Stepper';
import EtapaEmpresa from '../components/simulador/EtapaEmpresa';
import EtapaFaturamento from '../components/simulador/EtapaFaturamento';
import EtapaConfig from '../components/simulador/EtapaConfig';
import PainelResultado from '../components/simulador/PainelResultado';
import GraficoDonut from '../components/charts/GraficoDonut';

export default function Simulador() {
  const { dados, setDados, resultado } = useSimulacao();

  return (
    <div className='space-y-4'>
      <div className='rounded bg-card p-3 text-sm text-texto-suave'>
        Os cálculos são <strong>100% client-side</strong> (no navegador). O botão abaixo apenas preenche dados iniciais para acelerar testes.
      </div>
      <button className='rounded bg-ouro px-3 py-2 text-fundo' onClick={() => setDados((s) => ({ ...s, regime: 'lucro_presumido', atividade: 'servicos', uf: 'SP', receita12m: 1800000, faturamento: 150000, ano: 2027, compras: 45000, servicos: 12000, ativo: 5000 }))}>
        Carregar Exemplo
      </button>
      <Stepper />
      <div className='grid gap-4 lg:grid-cols-2'>
        <EtapaEmpresa dados={dados} setDados={setDados} />
        <EtapaFaturamento dados={dados} setDados={setDados} />
      </div>
      <EtapaConfig dados={dados} setDados={setDados} />
      <PainelResultado r={resultado} />
      <GraficoDonut r={resultado} />
    </div>
  );
}
