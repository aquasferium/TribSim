import { TRANSICAO } from '../engine/transicao';import GraficoTransicao from '../components/charts/GraficoTransicao';
export default function Transicao(){const data=Object.entries(TRANSICAO).map(([ano,v])=>({ano:Number(ano),total:v.novo*100}));return <div><h2 className='font-display text-2xl'>Linha do tempo 2024–2033</h2><GraficoTransicao data={data}/></div>}
