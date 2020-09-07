import React from 'react';
import {
  AppBar,
  Toolbar,
  Container,
  Typography,
  Button,
} from '@material-ui/core';
import AlbumRoundedIcon from '@material-ui/icons/AlbumRounded';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import './App.css';

function App() {
  return (
    <div>
      <AppBar position='static' className='navbar'>
        <Toolbar>
          <AlbumRoundedIcon className='logo' />
          <Typography className='title' style={{ flexGrow: 1 }}>
            Hubify
          </Typography>
          <Button color='inherit'>
            <AddCircleOutlineIcon />
            Add an album
          </Button>
        </Toolbar>
      </AppBar>

      <div className='album-list'>
        <div className='album-list2'>
          <div elevation={3} className='album'>
            <img
              src='https://image.freepik.com/free-photo/vinyl-mockup_23-2147721810.jpg'
              alt=''
              className='album-image'
            />
            <Button>Album Name</Button>
          </div>
          <div elevation={3} className='album'>
            <img
              src='https://image.freepik.com/free-photo/vinyl-mockup_23-2147721810.jpg'
              alt=''
              className='album-image'
            />
            <Button>Album Name</Button>
          </div>
          <div elevation={3} className='album'>
            <img
              src='https://image.freepik.com/free-photo/vinyl-mockup_23-2147721810.jpg'
              alt=''
              className='album-image'
            />
            <Button>Album Name</Button>
          </div>
          <div elevation={3} className='album'>
            <img
              src='https://image.freepik.com/free-photo/vinyl-mockup_23-2147721810.jpg'
              alt=''
              className='album-image'
            />
            <Button>Album Name</Button>
          </div>{' '}
          <div elevation={3} className='album'>
            <img
              src='https://image.freepik.com/free-photo/vinyl-mockup_23-2147721810.jpg'
              alt=''
              className='album-image'
            />
            <Button>Album Name</Button>
          </div>{' '}
          <div elevation={3} className='album'>
            <img
              src='https://image.freepik.com/free-photo/vinyl-mockup_23-2147721810.jpg'
              alt=''
              className='album-image'
            />
            <Button>Album Name</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
