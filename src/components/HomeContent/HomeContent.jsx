import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import style from './HomeContent.module.css'





export default function HomeContent() {

const [counter, setcounter] = useState(0)

  return <>
 
  <h2>HomeContent</h2>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi eum dolore unde voluptatem quae sunt!</p>
  
  </>
}
