import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import TopNavBar from '../TopNavBar/TopNavBar'
import style from './LayOut.module.css'

import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    primary: {
      main: '#000',
    },
    secondary:{
      main: '#3d8e41'
    }
  },
});




export default function LayOut() {

const [counter, setcounter] = useState(0)

  return <>
  <ThemeProvider theme={theme}>
  <TopNavBar/>
 
  <Outlet/>
  </ThemeProvider>
  </>
}
