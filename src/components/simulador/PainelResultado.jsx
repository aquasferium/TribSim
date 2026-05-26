import ResultadoCard from './ResultadoCard';
export default function PainelResultado({r}){return <div className='grid gap-3 md:grid-cols-2'><ResultadoCard titulo='Sistema Atual' valor={r.atual}/><ResultadoCard titulo='Sistema Novo' valor={r.novo}/><ResultadoCard titulo='CBS Líquido' valor={r.cbs.cbsLiquido}/><ResultadoCard titulo='IBS Líquido' valor={r.ibs.ibsLiquido}/></div>}
