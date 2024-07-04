 import React from 'react'
import {createRoot} from 'react-dom/client'
import { Gallery } from './Gallery'

const App = () =>  {

  return (
    <Gallery query='dogs'/>
  )
}


const container = document.getElementById("id")
const root = createRoot(container)
root.render(<App/>)