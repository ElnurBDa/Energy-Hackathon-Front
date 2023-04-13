import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import Button from '@mui/material/Button';
import Slider from '@mui/material/Slider';
import { useState } from 'react';


function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

export default function ChangingThing() {
  const [day,setDay] = useState(3);

  const handleChange = (d:number) => {
    setDay(d)
    console.log(day);
  }


  return (
    <React.Fragment>
      <Title>Change days</Title>
      <Slider
        aria-label="Days"
        value={day}
        onChange={(event,value) => handleChange(+value)}
        valueLabelDisplay="auto"
        step={1}
        marks
        min={1}
        max={30}
      />
    </React.Fragment>
  );
}