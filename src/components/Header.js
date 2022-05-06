import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1,ml:3 }}>
          <Link to="/liked" style={{color:'white',textDecoration:'none'}}>Show liked characters 💛</Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
