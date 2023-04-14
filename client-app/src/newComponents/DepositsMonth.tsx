import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

export default function Deposits() {
  return (
    <React.Fragment>
      <Title>Ümumi Sərfiyyat</Title>
      <Typography component="p" variant="h4">
        ₼ 23.59 
      </Typography>
      <Typography component="p" variant="h6">
        Kw 277.34 
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        Aprel, 2023
      </Typography>
    </React.Fragment>
  );
}