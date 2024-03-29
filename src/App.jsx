import React from 'react';
import LoginTemplate from './LoginTemplate';
import DashBoard from './DashBoard';
import Cardio from './Cardio';
import Diabetes from './Diabetes';
import Gynaecology from './Gynaecology';
import Ent from './Ent';
import Dermotology from './Dermotology';
import Cancer from './Cancer';

import MyForm from './MyForm';
import ResponsiveGrid from './ResponsiveGrid';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Signupform from './Signupform';
import { UserProvider } from './UserContext';


const App = () => {
  return (
    <UserProvider>

    <BrowserRouter>
    <Routes>
        <Route path='/' element={<LoginTemplate/>}></Route>
        <Route path='/form' element={<DashBoard/>}></Route>
        <Route path='/user' element={<MyForm/>}></Route>
        
        <Route path='/category' element={<ResponsiveGrid/>}></Route>
        <Route path='/cont' element={<ResponsiveGrid/>}></Route>
        <Route path='/cardio' element={<Cardio/>}></Route>
        <Route path='/diabetes' element={<Diabetes/>}></Route>
        <Route path='/gynaecology' element={<Gynaecology/>}></Route>
        <Route path='/ent' element={<Ent/>}></Route>
        <Route path='/dermo' element={<Dermotology/>}></Route>
        <Route path='/cancer' element={<Cancer/>}></Route>
        <Route path='/co' element={<Signupform/>}></Route>
       
      
    </Routes>
   
    
  </BrowserRouter>
  </UserProvider>
    
    );

   
  };
export default App;






