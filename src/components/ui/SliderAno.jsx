export default function SliderAno({value,onChange}){return <input type='range' min='2026' max='2033' value={value} onChange={e=>onChange(Number(e.target.value))} className='w-full accent-ouro'/>}
