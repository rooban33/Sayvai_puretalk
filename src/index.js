import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Sidebar from './sidebar';
import Logs from './pages/logs';
import Welcome from './pages/welcome';
import SendCallForm from './pages/sendcall';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
    <Router>
    <Sidebar />
      <Routes>
        <Route path='/' element={<Welcome/>} />
        <Route path='/logs' element={<Logs/>} />
        <Route path='/gcall' element={<SendCallForm/>} />
    
      </Routes>
    </Router>
    
    
    
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
