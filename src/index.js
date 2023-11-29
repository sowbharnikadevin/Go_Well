import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './App.css';
import Appointment from './Appointment'
import reportWebVitals from './reportWebVitals';
//import { Dashboard } from '@mui/icons-material';
import DashBoard from './DashBoard';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
   <DashBoard/>
   <Appointment/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
