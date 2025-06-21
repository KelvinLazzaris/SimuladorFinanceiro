import React from 'react';
import html2canvas from 'html2canvas';

export default function ShareButton({ targetId }) {
  const handleShare = () => {
    const element = document.getElementById(targetId);
    if (!element) return;

    html2canvas(element).then(canvas => {
      const link = document.createElement('a');
      link.download = 'simulador-502020.png';
      link.href = canvas.toDataURL();
      link.click();
    });
  };

  return (
    <button
      onClick={handleShare}
      style={{
        background: '#ffc107',   // amarelo forte
        color: '#333'            // boa leitura sobre amarelo
      }}
    >
      📥 Baixar Gráfico
    </button>
  );
}
