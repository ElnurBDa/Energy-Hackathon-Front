import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { Navigate } from 'react-router-dom';

export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Quick Options
    </ListSubheader>
    <ListItemButton component="a" href="/1">
      <ListItemIcon style={{color:'rgb(0,0,255)'}}>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Cari Gün" />
    </ListItemButton>
    <ListItemButton component="a" href="/2">
      <ListItemIcon style={{color:'rgb(100,100,255)'}}>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Cari Ay" />
    </ListItemButton>
    <ListItemButton component="a" href="/3">
      <ListItemIcon style={{color:'rgb(150,150,255)'}}>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Cari İl" />
    </ListItemButton>
    <ListItemButton component="a" href="/0">
      <ListItemIcon style={{color:'rgb(170,170,255)'}}>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Ümumi" />
    </ListItemButton>
  </React.Fragment>
);