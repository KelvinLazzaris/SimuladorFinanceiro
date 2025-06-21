import React, { useState, useMemo } from 'react';
import './styles/global.css';

import IncomeInput      from './components/IncomeInput';
import SliderAllocation from './components/SliderAllocation';
import PieChartAnimated from './components/PieChartAnimated';
import ShareButton      from './components/ShareButton';
import TipsCard         from './components/TipsCard';
import TipsPage         from './components/TipsPage';

export default function App() {
  const [income, setIncome] = useState(0);
  const [alloc,  setAlloc ] = useState({ needs: 50, wants: 30, save: 20 });
  const [view,   setView  ] = useState('simulator'); // 'simulator' | 'tips'

  const values = useMemo(() => ({
    needs: (income * alloc.needs) / 100,
    wants: (income * alloc.wants) / 100,
    save : (income * alloc.save ) / 100,
  }), [income, alloc]);

  /* ---------- Página de Dicas ---------- */
  if (view === 'tips') {
    return <TipsPage onBack={() => setView('simulator')} />;
  }

  /* ---------- Página principal (Simulador) ---------- */
  return (
    <main className="container">
      <h1 style={{ marginBottom: '1rem' }}>Regra 50 • 30 • 20</h1>

      <IncomeInput      income={income} setIncome={setIncome} />
      <SliderAllocation alloc={alloc}  setAlloc={setAlloc}    />

      <PieChartAnimated data={values} />
      <ShareButton      targetId="chart-area" />

      <section className="tips">
        {/* NECESSIDADES – azul padrão */}
        <TipsCard
          title="Necessidades"
          text={`Liste aluguel, contas e transporte. Total: R$ ${values.needs.toFixed(2)}`}
        />

        {/* DESEJOS – borda laranja */}
        <TipsCard
          title="Desejos"
          text={`Assinaturas, lazer, compras. Total: R$ ${values.wants.toFixed(2)}`}
          color="#f28e2c"
        />

        {/* POUPANÇA – borda verde */}
        <TipsCard
          title="Poupança"
          text={`Reserva de emergência e investimentos. Total: R$ ${values.save.toFixed(2)}`}
          color="#59a14f"
        />
      </section>

      <button
        style={{
          marginTop: '1.5rem',
          background: '#ffc107', // amarelo forte
          color: '#333',
        }}
        onClick={() => setView('tips')}
      >
        📖 Ver Dicas
      </button>
    </main>
  );
}
