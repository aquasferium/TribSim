import SliderAno from '../ui/SliderAno';
export default function EtapaConfig({dados,setDados}){return <div><SliderAno value={dados.ano} onChange={v=>setDados(s=>({...s,ano:v}))}/><div>{dados.ano}</div></div>}
