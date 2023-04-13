import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import { Button, IconButton, List, ListItem, ListItemText, SvgIcon, TextField, Typography } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

export default function BonusSystem() {
  return (
    <React.Fragment>
      <Title>Bulb Redemption</Title>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {[{discount:2,price:15}, {discount:5,price:30},{discount:10,price:70}].map(({discount, price}) => (
        <ListItem
          key={discount}
          disableGutters
          secondaryAction={
            <IconButton aria-label="comment">
              {price}
              <LightbulbIcon style={{color:"yellow"}}/>
            </IconButton>
          }
        >
          <PlayArrowIcon/>
          <ListItemText primary={`${discount}% Endirim:`} />
        </ListItem>
      ))}
    </List>
    </React.Fragment>
  );
}