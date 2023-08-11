import React from 'react'
import ReactDOM from 'react-dom/client'
import Site from './Site.jsx'
import './global.css'
import './root/root.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Site />
  </React.StrictMode>,
)
