import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const data = [
  {
    subject: 'Math',
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: 'Chinese',
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'English',
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Geography',
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: 'Physics',
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: 'History',
    A: 65,
    B: 85,
    fullMark: 150,
  },
];



const renderRadarChart = (
  <ResponsiveContainer width={400} height={300}>
  <RadarChart cx="60%" cy="50%" outerRadius="80%" data={data} margin={{top: 100}}>
    <PolarGrid />
    <PolarAngleAxis dataKey="subject" />
    <PolarRadiusAxis />
    <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#0A6D7E" fillOpacity={0.6} />
  </RadarChart>
</ResponsiveContainer>
);

export default class RadarGraph extends PureComponent {
  render() {
    return (
      renderRadarChart
    )
  }
}

