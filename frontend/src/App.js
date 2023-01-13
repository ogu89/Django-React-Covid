import React from "react";
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Contact from './pages/Contact';
import Home  from './pages/Home';
import StartApp from "./pages/StartApp";
import Statistics  from './pages/Statistics';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<StartApp/>}></Route>
        <Route path="/home" element={<Home />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </>
  );
}

export default App;
