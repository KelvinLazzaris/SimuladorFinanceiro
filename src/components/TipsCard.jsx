import React from 'react';
import styled from 'styled-components';

/**
 * Se receber a prop `color`, usamos esse tom na borda-esquerda.
 * Caso contrário mantém o azul-padrão (#4e79a7).
 * Usamos `$color` para evitar que a prop vá parar no DOM.
 */
const Card = styled.div`
  background: #fafafa;
  padding: 1rem;
  border-left: 4px solid ${({ $color }) => $color || '#4e79a7'};
  border-radius: 4px;
`;

export default function TipsCard({ title, text, color }) {
  return (
    <Card $color={color}>
      <strong>{title}</strong>
      <p style={{ marginTop: '0.5rem', fontSize: '0.95rem' }}>{text}</p>
    </Card>
  );
}
