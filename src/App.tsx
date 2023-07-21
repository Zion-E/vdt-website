import React from 'react';

import './App.css';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Newsupdate from './pages/Newsupdate';
import Servicesection from './pages/Servicesection';
import Contact from './pages/Contactview';
import Supportpage from './pages/Supportpage';
import Typography from './pages/Typography';
import Team from './pages/Team';
import Award from './pages/Award';
import Error from './pages/Error';
import FAQs from './pages/FAQs';
import Gallery from './pages/Gallery';
import Newsdetail from './components/Newsupdate/Newsdetail';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>} />
        <Route path='pages/Home' element={<Home/>} />
        <Route path='pages/About' element={<About/>} />
        <Route path='pages/Newsupdates' element={<Newsupdate/>} />
        <Route path='pages/Servicesection' element={<Servicesection/>} />
        <Route path='pages/Contactview' element={<Contact/>} />
        <Route path='pages/Award' element={<Award/>} />
        <Route path='pages/Error' element={<Error/>} />
        <Route path='pages/Team' element={<Team/>} />
        <Route path='pages/Typography' element={<Typography/>} />
        <Route path='pages/Supportpage' element={<Supportpage/>} />
        <Route path='pages/FAQs' element={<FAQs/>} />
        <Route path='pages/Gallery' element={<Gallery/>} />
        <Route path='pages/Newsdetail' element={<Newsdetail/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
