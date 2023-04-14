import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import { Button, SvgIcon, TextField, Typography } from '@mui/material';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import InsightsIcon from '@mui/icons-material/Insights';
import LightbulbIcon from '@mui/icons-material/Lightbulb';

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

export default function LastYear() {
  return (
    <React.Fragment>
      <Title>Keçən il ilə müqaisə</Title>
      <section style={{display:'flex',alignItems:'center', justifyContent:'center',textAlign:'center'}}>
        <div style={{flex:'1'}}>
        <LeaderboardIcon style={{fontSize:'5rem',color:"rgb(200,200,255)"}}/>
        <Typography component="p" variant="h5">Aprel, 2022</Typography>
        <Typography>
          Kw 277.34
        </Typography>
        </div>
        <div style={{flex:'1'}}>
        <LeaderboardIcon style={{fontSize:'5rem',color:"rgb(150,150,255)"}}/>
        <Typography component="p" variant="h5">Aprel, 2023</Typography>
        <Typography>
          Kw 232.12
        </Typography>
        </div>
        <div style={{flex:'1'}}>
        <InsightsIcon style={{fontSize:'5rem',color:"rgb(100,100,255)"}}/>
        <Typography component="p" variant="h5">Fərq</Typography>
        <Typography>
          {(277.34-232.12).toFixed(2)} {' => '} {4} <LightbulbIcon style={{color:"yellow"}}/>
        </Typography>
        </div>
      </section>

    </React.Fragment>
  );
}