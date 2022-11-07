import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.scss'
import DrawBoard from './Page/DrawBoard/drawBoard'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DrawBoard/>
  </React.StrictMode>
)
