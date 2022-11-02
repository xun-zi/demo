import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.scss'
import DragUpFile from './Page/DragUpFile/DragUpFile'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DragUpFile/>
  </React.StrictMode>
)
