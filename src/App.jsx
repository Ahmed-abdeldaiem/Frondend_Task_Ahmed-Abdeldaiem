import { useState } from 'react'

import viteLogo from '/vite.svg'
import './App.css'
import Button from '@mui/material/Button';
import { createHashRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router';
import LayOut from './components/LayOut/LayOut';
import Home from './components/Home/Home';


import HomeContent from './components/HomeContent/HomeContent';
import SideMenuContextProvider from './Context/SideMenuContext';
import Applications from './components/Applications/Applications';
import Qualifications from './components/Qualifications/Qualifications';
import About from './components/About/About';
import Contact from './components/Contact/Contact';



function App() {
  
  
  const route = createHashRouter([
    {
      path: '',
      element: <LayOut />,
      children: [
        {
          path: '/',
          element: <Home />,
          children: [
            { index: true, element: <Applications /> },
            { path: 'applications', element: <Applications /> },
            { path: 'qualifications', element: <Qualifications /> },
            { path: 'contact', element: <Contact /> },
            { path: 'about', element: <About /> },
          ],
        },
      ],
    },
  ]);

  return (
    <>





  <SideMenuContextProvider>
    
        <RouterProvider router={route}>

        </RouterProvider>
      
       </SideMenuContextProvider>
     
    </>
  )
}

export default App
