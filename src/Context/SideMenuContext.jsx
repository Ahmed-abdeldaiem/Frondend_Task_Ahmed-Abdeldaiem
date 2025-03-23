import React from 'react'
import { createContext, useState } from "react";
import axios from 'axios';



export let SideMenuContext=  createContext()

export default function SideMenuContextProvider(props) {



let baseUrl='http://localhost:8081/'




 

  function getMenuItems() {
    return axios.get(`${baseUrl}nav`, {
      
    })
    .then((data) => {
      
        // console.log(data);
        
       

        
        return data.data ? data.data : 'No Jobs found';
    })
    .catch((error) => {
        console.log(error);
        return 'Error fetching Side Menu Data';
    });
}

    
 
   

  return (
    <SideMenuContext.Provider value={{getMenuItems}} >
    {props.children}
    </SideMenuContext.Provider>
  )
}













