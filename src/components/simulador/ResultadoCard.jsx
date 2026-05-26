import { formatMoeda } from '../../utils/formatadores';
export default function ResultadoCard({titulo,valor}){return <div className='animate-fade-up rounded bg-card p-3 hover:-translate-y-0.5 hover:border hover:border-ouro transition-all'><p>{titulo}</p><p className='num-contador text-xl'>{formatMoeda(valor)}</p></div>}
