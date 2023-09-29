import React from 'react';
import './App.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import Fibonacci from './Components/Fibonacci';
import Crypto from './Components/Crypto';
import Convertisseur from './Components/Convertisseur';
import Calendrier from './Components/Calendrier';
import Tableau from './Components/Tableau';
import CarouselPage from './Components/CarouselPage';
import Home from './Components/Home';
import FibonacciWorkerPage from './Components/FibonachiWorkerPage';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <div className="main_menu">
          <NavLink to="/Home">
            <div className="main_menu_link">Home</div>
          </NavLink>
          <NavLink to="/Fibonacci">
            <div className="main_menu_link">Fibonacci</div>
          </NavLink>
          <NavLink to="/Crypto">
            <div className="main_menu_link">Crypto</div>
          </NavLink>
          <NavLink to="/Convertisseur">
            <div className="main_menu_link">Convertisseur</div>
          </NavLink>
          <NavLink to="/Calendrier">
            <div className="main_menu_link">Calendrier</div>
          </NavLink>
          <NavLink to="/Tableau">
            <div className="main_menu_link">Tableau</div>
          </NavLink>

          <NavLink to="/Caroussel">
            <div className="main_menu_link">Caroussel</div>
          </NavLink>

          <NavLink to="/FibonacciWebWorker">
            <div>
              Web worker fibonnaci
            </div>
            </NavLink>
        </div>
        <Routes>
          <Route exact path="/Home" element={<Home />} />
          <Route exact path="/Fibonacci" element={<Fibonacci />} />
          <Route exact path="/FibonacciWebWorker" element={<FibonacciWorkerPage/>} />
          <Route exact path="/Crypto" element={<Crypto />} />
          <Route exact path="/Convertisseur" element={<Convertisseur />} />
          <Route exact path="/Calendrier" element={<Calendrier />} />
          <Route exact path="/Tableau" element={<Tableau />} />
          <Route exact path="/Caroussel" element={<CarouselPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
