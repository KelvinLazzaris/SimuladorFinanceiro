import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';
import { motion } from 'framer-motion';

const COLORS = ['#4e79a7', '#f28e2c', '#59a14f'];

export default function PieChartAnimated({ data }) {
  const pieData = [
    { name: 'Necessidades', value: data.needs },
    { name: 'Desejos',       value: data.wants },
    { name: 'Poupança',      value: data.save  },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      id="chart-area"
      style={{ width: '100%', height: 320 }}
    >
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={pieData}
            dataKey="value"
            nameKey="name"
            innerRadius={60}
            outerRadius={100}
            isAnimationActive
            animationDuration={800}
          >
            {pieData.map((entry, idx) => (
              <Cell key={`slice-${idx}`} fill={COLORS[idx]} />
            ))}
          </Pie>

          <Legend
            verticalAlign="bottom"
            align="center"
            iconType="circle"
            iconSize={12}
            formatter={value => (
              <span style={{ fontSize: '0.9rem', color: '#555' }}>{value}</span>
            )}
          />
        </PieChart>
      </ResponsiveContainer>
    </motion.div>
  );
}
