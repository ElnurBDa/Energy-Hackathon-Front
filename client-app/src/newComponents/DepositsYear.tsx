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
      <Title>Consumption total</Title>
      <Typography component="p" variant="h4">
        ₼ 3,211.00 
      </Typography>
      <Typography component="p" variant="h6">
        Kw 16,500.00 
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        on 2023
      </Typography>
    </React.Fragment>
  );
}