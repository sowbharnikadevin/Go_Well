import React from 'react';
import LoginTemplate from './LoginTemplate';
import DashBoard from './DashBoard';
import MyForm from './MyForm';
import ResponsiveGrid from './ResponsiveGrid';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Appointment from './Appointment';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<LoginTemplate/>}></Route>
        <Route path='/form' element={<DashBoard/>}></Route>
        <Route path='/user' element={<MyForm/>}></Route>
        <Route path='/doctor' element={<Appointment/>}></Route>
        <Route path='/category' element={<ResponsiveGrid/>}></Route>
        <Route path='/cont' element={<ResponsiveGrid/>}></Route>
    </Routes>
   
    
  </BrowserRouter>
    
    );

   
  };
export default App;






