import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Web from './Web'
import {prueba,Juan} from './prueba'
import {cabecera} from './cabecera'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <Web />
    <Juan />
    <prueba />
    <cabecera />
    

  </StrictMode>,
)
