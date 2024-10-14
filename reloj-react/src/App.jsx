import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RelojTimer from './componentes/reloj-timer';
import RelojHora  from "./componentes/reloj-hora"
import Sidebar from './componentes/Footer';
function App() {


  return (
    <>
    
    /<Router>
    <Sidebar/>
        <Routes>
          <Route path="/reloj-timer" element={<RelojTimer />} />
          <Route path="/reloj-hora" element={<RelojHora />} />
        </Routes>
      
    </Router>
    </>
  )
}

export default App
