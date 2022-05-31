import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Acceuil from './Components/Acceuil';
import DateBook from './Components/DateBook';
import Etage from './Components/Etage';
import Confirmation from './Components/Confirmation';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Acceuil />} />
          <Route path="/choisirLaDate" element={<DateBook />} />
          <Route path="/choisirLetage" element={<Etage />} />
          <Route path="/confirmerReserve" element={<Confirmation />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
