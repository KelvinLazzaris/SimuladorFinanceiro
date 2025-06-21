import React from 'react';

export default function IncomeInput({ income, setIncome }) {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <label htmlFor="income">Renda Mensal:</label>
      <input
        id="income"
        type="number"
        min="0"
        value={income}
        onChange={e => setIncome(Number(e.target.value))}
        style={{
          width: '100%',
          padding: '0.5rem',
          fontSize: '1rem',
          marginTop: '0.5rem',
          borderRadius: '4px',
          border: '1px solid #ccc'
        }}
      />
    </div>
  );
}
