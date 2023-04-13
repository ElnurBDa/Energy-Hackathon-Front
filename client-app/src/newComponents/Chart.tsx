import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from './Title';

// Generate Sales Data
function createData(time: string, amount?: number) {
  return { time, amount };
}

const data = [
  createData('00:00', 100),
  createData('03:00', 300),
  createData('06:00', 400),
  createData('09:00', 700),
  createData('12:00', 1000),
  createData('15:00', 1500),
  createData('18:00', 1400),
  createData('21:00', 1000),
  createData('24:00', 100),
];

export default function Chart() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>Cari Gün</Title>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis
            dataKey="time"
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          />
          <YAxis
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          >
            <Label
              angle={270}
              position="left"
              style={{
                textAnchor: 'middle',
                fill: theme.palette.text.primary,
                ...theme.typography.body1,
              }}
            >
              Sərfiyyat (Kw)
            </Label>
          </YAxis>
          <Line
            isAnimationActive={false}
            type="monotone"
            dataKey="amount"
            stroke={theme.palette.primary.main}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}