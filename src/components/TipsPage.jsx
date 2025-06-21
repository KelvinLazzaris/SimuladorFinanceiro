import React from 'react';
import TipsCard from './TipsCard';

export default function TipsPage({ onBack }) {
  return (
    <main className="container">
      <h1 style={{ marginBottom: '1rem' }}>
        Dicas para aplicar a Regra 50 • 30 • 20
      </h1>

      <TipsCard
        title="1. Registre seus gastos"
        text="Anote todas as despesas (fixas e variáveis) durante um mês para saber exatamente para onde seu dinheiro vai."
      />

      <TipsCard
        title="2. Automatize a poupança"
        text="Programe uma transferência automática (20 %) para sua conta de investimentos assim que o salário cair."
      />

      <TipsCard
        title="3. Renegocie serviços"
        text="Revise planos de internet, telefonia, seguros e assinaturas ao menos uma vez por ano para economizar."
      />

      <TipsCard
        title="4. Reveja metas periodicamente"
        text="Quando sua renda mudar, ajuste os percentuais mantendo o hábito de poupar no mínimo 20 %."
      />

      <button
        onClick={onBack}
        style={{
          marginTop: '1.5rem',
          background: '#ffc107', // amarelo forte
          color: '#333',         // texto escuro para contraste
        }}
      >
        ⬅ Voltar ao Simulador
      </button>
    </main>
  );
}
