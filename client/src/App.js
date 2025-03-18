import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/home/home';
import Discography from './pages/discography/discography';
import Biography from './pages/biography/biography';
import Tour from './pages/tour/tour';
import './App.css';
//import Enter from "./pages/enter/enter";
import Navbar from "./components/navbar/navbar";
import Footer from './components/footer/footer';
import MailingList from './pages/forms/mailingList';
import Message from './pages/forms/message';
import './index.css';

function App() {
  const location = useLocation();
  return (
    <>

      <div className="App">
        <Navbar />
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/tour" element={<Tour />} />
          <Route path="/discography" element={<Discography />} />
          <Route path="/biography" element={<Biography />} />
          <Route path="/message" element={<Message />} />
          <Route path="/mailingList" element={<MailingList />} />
        </Routes>
        <Footer />
      </div >
    </>
  );
}

export default App;
