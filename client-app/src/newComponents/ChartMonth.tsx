import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from './Title';
import { data } from './data';

// Generate Sales Data
function createData(time: string, amount?: number) {
  return { time, amount };
}

let newdata = [
  createData('1', data[1].map(({time,amount}) => amount).reduce((accumulator:any, currentValue) => accumulator + currentValue)),
];
for (let index = 2; index <= 30; index++) {
  newdata =  [...newdata,createData(index.toString(), data[index].map(({time,amount}) => amount).reduce((accumulator:any, currentValue) => accumulator + currentValue))]
}


export default function ChartMonth() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>Today</Title>
      <ResponsiveContainer>
        <LineChart
          data={newdata}
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