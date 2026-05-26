import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
export default function GraficoComparativo({data}){return <ResponsiveContainer width='100%' height={260}><BarChart data={data}><XAxis dataKey='regime'/><YAxis/><Tooltip/><Bar dataKey='total' fill='#C9A84C'/></BarChart></ResponsiveContainer>}
