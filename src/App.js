import React from 'react';
import {
  AppBar,
  Toolbar,
  Container,
  Typography,
  Paper,
} from '@material-ui/core';
import AlbumRoundedIcon from '@material-ui/icons/AlbumRounded';
import './App.css';

function App() {
  return (
    <div className='App'>
      <AppBar position='static' className='navbar'>
        <Toolbar>
          <AlbumRoundedIcon className='logo' />
          <Typography className='title'>Hubify</Typography>
        </Toolbar>
      </AppBar>

      <div className='album-list'>
        <div className='album-list2'>
          <Paper elevation={3} />
        </div>
      </div>
    </div>
  );
}

export default App;
