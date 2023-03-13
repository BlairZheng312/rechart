import React, { PureComponent } from 'react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';
const data = [
  {
    name: 'Page A',
    uv: 4000,
  },
  {
    name: 'Page B',
    uv: 3000,

  },
  {
    name: 'Page C',
    uv: 2000,
  },
  {
    name: 'Page D',
    uv: 2780,
  },
  {
    name: 'Page E',
    uv: 1890,
  },
  {
    name: 'Page F',
    uv: 2390,
  },
  {
    name: 'Page G',
    uv: 3490,
  },
];

function amount(item){
  return item.uv;
}
function sum(prev, next){
  return prev + next;
}
data.map(amount).reduce(sum);
let ave = data.map(item => item.uv).reduce((prev, next) => prev + next);

const renderLineChart = (
  <ResponsiveContainer width={300} height={100}>
    <LineChart width="50%" height="50%" data={data} margin={{ left: 160 }}>
      <Line type="linear" dataKey="uv" stroke="#444" dot={false} strokeWidth={3}
      />
      <text
        x='40%'
        y='40%'
        style={{ fontSize: 24, fontWeight: 'bold', fill: '#444' }}
        width="100%"
        
      >
        {Math.round(ave/data.length, 0)}
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

