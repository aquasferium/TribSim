# TribSim

SPA React + Vite para simular impactos da Reforma Tributária (CBS/IBS) sem backend.

## Rodando
```bash
npm install
npm run dev
```

## Alíquotas utilizadas
- CBS padrão: **8,8%**
- CBS reduzida: **5,28%**
- IBS: por UF (estimativa base 17,7% com fallback)

## Transição 2026-2033
| Ano | Sistema novo | Sistema antigo |
|---|---:|---:|
| 2026 | 1% | 99% |
| 2027 | 30% | 70% |
| 2028 | 45% | 55% |
| 2029 | 60% | 40% |
| 2030 | 70% | 30% |
| 2031 | 80% | 20% |
| 2032 | 90% | 10% |
| 2033 | 100% | 0% |
