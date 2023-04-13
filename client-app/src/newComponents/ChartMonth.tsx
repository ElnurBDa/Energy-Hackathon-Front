import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from './Title';

// Generate Sales Data
function createData(time: string, amount?: number) {
  return { time, amount };
}

const data = [
  createData('1', 100),
createData('2', 300),
createData('3', 450),
createData('4', 200),
createData('5', 600),
createData('6', 150),
createData('7', 800),
createData('8', 350),
createData('9', 250),
createData('10', 700),
createData('11', 50),
createData('12', 400),
createData('13', 700),
createData('14', 120),
createData('15', 50),
createData('16', 0),
createData('17', 0),
createData('18', 0),
createData('19', 0),
createData('20', 0),
createData('21', 0),
createData('22', 0),
createData('23', 0),
createData('24', 0),
createData('25', 0),
createData('26', 0),
createData('27', 0),
createData('28', 0),
createData('29', 0),
createData('30', 0)
];

export default function ChartMonth() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>Today</Title>
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
              Consumption (Kw)
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