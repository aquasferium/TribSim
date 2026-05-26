import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
export default function GraficoTransicao({data}){return <ResponsiveContainer width='100%' height={280}><LineChart data={data}><XAxis dataKey='ano'/><YAxis/><Tooltip/><Line type='monotone' dataKey='total' stroke='#60A5FA'/></LineChart></ResponsiveContainer>}
