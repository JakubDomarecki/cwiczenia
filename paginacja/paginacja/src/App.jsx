import React from "react";
import {createRoot} from 'react-dom/client'
import './main.scss'
import { Pagination } from "./Pagination.jsx";


const App = () => { 
  
  const names = ['avery', 'bailey', 'carte', 'dakota', 'emerson', 'finley', 'grayson', 'harper', 'indigo', 'jordan','avery', 'bailey', 'carte', 'dakota', 'emerson', 'finley','harper', 'indigo', 'jordan','avery', 'bailey', 'carte', 'dakota', 'emerson', 'finley', 'harper', 'indigo', 'jordan','avery', 'bailey', 'carte', 'dakota', 'emerson', 'finley'];



  return (
    <div>
        <Pagination names={names} namesPerPage={3}/> 
    </div>
  );
}

const container = document.getElementById("app");

const root = createRoot(container);
root.render(<App />);

