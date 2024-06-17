import React from 'react'
import ReactDOM from 'react-dom/client'
import "@fontsource/poppins"; // Defaults to weight 400
 
import './index.css'
import PageIndex from './page/PageIndex'
import 'bootstrap/dist/css/bootstrap.min.css';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PageIndex />
  </React.StrictMode>,
  
)
