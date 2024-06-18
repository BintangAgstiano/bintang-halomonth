import React from 'react'
import ReactDOM from 'react-dom/client'
import "@fontsource/poppins"; // Defaults to weight 400
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'
import PageIndex from './page/PageIndex'
import 'bootstrap/dist/css/bootstrap.min.css';
import HistoryPage from './page/HistoryPage';
ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path='/' element={<PageIndex></PageIndex>}></Route>
      <Route path='/history' element={<HistoryPage></HistoryPage>}></Route>
    </Routes>
  </Router>

)
