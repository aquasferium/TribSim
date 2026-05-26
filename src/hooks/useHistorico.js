import { useEffect, useState } from 'react';
export function useHistorico(){const [historico,setHistorico]=useState(()=>JSON.parse(localStorage.getItem('tribsim_h')||'[]'));useEffect(()=>localStorage.setItem('tribsim_h',JSON.stringify(historico.slice(0,5))),[historico]);const add=i=>setHistorico(h=>[i,...h].slice(0,5));return{historico,add};}
