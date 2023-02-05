import {BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Contactus from'./Component/Contactus.jsx'
import Student from './Component/Student';
import Header from './Component/Header';
import Home from './Component/Home';
import Editstud from './Component/Editstud';
import DataContext from './Component/Datacontext';
import { useState } from 'react';

function App() {
  const [formData, setFormData] = useState([]);
  const dispatchUserEvent = (actionType, payload) => {
    switch (actionType) {
        case 'ADD_USER':
            setFormData([ ...formData, payload.newUser ]);
            return;
        case 'EDIT_USER':
            setFormData(payload.newUser);
            return;
        default:
            return;
    }
};
  return (
    <>
    <Header/>
    <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contactus' element={<Contactus/>}/>
          <Route path='/Student' element={<Student/>}/>
          <Route path="/Edit" element={
                <DataContext.Provider value={{entries : formData, dispatchUserEvent}}>
                    <Editstud/>
                </DataContext.Provider>
            }/>
    </Routes>
   
    </>
  );
}


export default App;
