import React, { PureComponent } from 'react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';
import {ave} from "./ave"

const data = [
  {
    name: 'Page A',
    y: 4000,
  },
  {
    name: 'Page B',
    y: 3000,

  },
  {
    name: 'Page C',
    y: 2000,
  },
  {
    name: 'Page D',
    y: 2780,
  },
  {
    name: 'Page E',
    y: 1890,
  },
  {
    name: 'Page F',
    y: 2390,
  },
  {
    name: 'Page G',
    y: 3490,
  },
];

const renderLineChart = (
  <ResponsiveContainer width={300} height={100}>
    <LineChart width="50%" height="50%" data={data} margin={{ left: 160 }}>
      <Line type="linear" dataKey="y" stroke="#444" dot={false} strokeWidth={3}
      />
      <text
        x='40%'
        y='40%'
        style={{ fontSize: 24, fontWeight: 'bold', fill: '#444' }}
        width="100%"       
      >
        {ave(data)}
      </text>
      <text
        x='40%'
        y='90%'
        style={{ fontSize: 48, fontWeight: 'bold', fill: '#444' }}
        width={200}
      >
        Ave uv
      </text>
    </LineChart>
  </ResponsiveContainer>
);

export default class SparkGraph extends PureComponent {
  render() {
    return (
      renderLineChart
    )
  }
}

