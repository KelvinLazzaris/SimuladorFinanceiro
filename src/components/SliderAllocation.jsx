import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

export default function SliderAllocation({ alloc, setAlloc }) {
  const { needs, wants, save } = alloc;

  const onChangeNeeds = v => {
    const newWants = 100 - v - save;
    setAlloc({ needs: v, wants: newWants, save });
  };
  const onChangeWants = v => {
    const newNeeds = 100 - v - save;
    setAlloc({ needs: newNeeds, wants: v, save });
  };

  return (
    <div style={{ marginBottom: '1.5rem' }}>
      <div>
        <label>Necessidades: {needs}%</label>
        <Slider min={40} max={60} step={1} value={needs} onChange={onChangeNeeds} />
      </div>
      <div style={{ marginTop: '1rem' }}>
        <label>Desejos: {wants}%</label>
        <Slider min={20} max={40} step={1} value={wants} onChange={onChangeWants} />
      </div>
    </div>
  );
}
