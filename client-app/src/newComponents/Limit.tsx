import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import { Button, SvgIcon, TextField, Typography } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

export default function Limit() {
  return (
    <React.Fragment>
      <Title>Set Limit</Title>
      <section style={{display:'flex',alignItems:'center', justifyContent:'center'}}>
      <TextField id="standard-basic" label="KiloWatt limit" variant="standard" type="number" sx={{ flex: 3 }}/>
      <Button variant="contained" sx={{ marginLeft:"5px", marginRight:"5px" }}>Tesdiqle</Button>
      <InfoIcon color="primary" sx={{ fontSize:"30px", marginLeft:"5px", marginRight:"5px" }}/>
      <p style={{flex:1}}>Set limit to your consumption to control energy flow</p> 
      </section>
    </React.Fragment>
  );
}