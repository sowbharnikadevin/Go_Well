import React from 'react';
import LoginTemplate from './LoginTemplate';
import DashBoard from './DashBoard';
import MyForm from './MyForm';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
    
    <Routes>
        <Route path='/' element={<LoginTemplate/>}></Route>
        <Route path='/form' element={<DashBoard/>}></Route>
    </Routes>
   
    
  </BrowserRouter>
    
    );

   
  };
export default App;






