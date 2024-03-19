import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Login from './pages/auth/login';
import Register from './pages/auth/register';
import Land from './pages/auth/land';
import Home from './pages/Home';
import Cont from './pages/Cont';
import Footer from './components/Footer/Footer';
import Aboutus from './pages/Aboutus';
import Form from './pages/Form';
import Events from './pages/Events';
import Payment from './pages/Payment';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';




function App() {
 

  return (
    <Routes>
    <Route exact path='/' element={<Land/>}/>
    <Route exact path='/Login' element={<Login/>}/>
    <Route exact path='/Register' element={<Register/>}/>
    <Route exact path='/Home' element={<Home/>}/>
    <Route exact path='/Events' element={<Events/>}/>
    <Route exact path='/Payment' element={<Payment/>}/>
    <Route exact path='/Aboutus' element={<Aboutus/>}/>
    <Route exact path='/Cont' element={<Cont/>}/>
    <Route exact path='/Land' element={<Land/>}/>
    <Route exact path='/Form' element={<Form/>}/>
    <Route exact path='/Privacy' element={<Privacy/>}/>
    <Route exact path='/Terms' element={<Terms/>}/>
    </Routes>
   
  
    );
}

export default App;