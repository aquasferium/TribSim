import { formatMoeda } from '../../utils/formatadores';

export default function InputMoeda({ id, label, hint, value, onChange, min = 0 }) {
  return (
    <label htmlFor={id} className='grid gap-1'>
      <span className='text-sm text-texto-suave'>{label}</span>
      <input
        id={id}
        inputMode='decimal'
        type='number'
        min={min}
        className='w-full rounded border border-borda bg-card p-2'
        value={value}
        onChange={(e) => onChange(Number(e.target.value || 0))}
      />
      <span className='text-xs text-texto-suave/80'>{hint ?? formatMoeda(value)}</span>
    </label>
  );
}
