import logo from './logo.svg';
import React from 'react';
import './App.css';
import { BrowserRouter , NavLink, Route, Routes} from 'react-router-dom';
import Home  from './Components/Home';
import Fibonacie from './Components/Fibonacie';
import Crypto from './Components/Crypto';
import Convertisseur from './Components/Convertisseur';
import Calendrier from './Components/Calendrier';
import Tableau from './Components/Tableau';
import CarousselPage from './Components/CarouselPage';


function App() {
  return (
        <div className='app'>
            <BrowserRouter>
        <div class="main_menu">
          <NavLink to="/Home">
            <div class="main_menu_link">Home</div>
          </NavLink>
          <NavLink to="/Fibonacie">
            <div class="main_menu_link">Fibonacie</div>
          </NavLink>
          <NavLink to="/Crypto">
            <div class="main_menu_link">Crypto</div>
          </NavLink>
          <NavLink to="/Convertisseur">
            <div class="main_menu_link">Convertisseur</div>
          </NavLink>
          <NavLink to="/Calendrier">
            <div class="main_menu_link">Calendrier</div>
          </NavLink>
          <NavLink to="/Tableau">
            <div class="main_menu_link">Tableau</div>
          </NavLink>
          <NavLink to="/Carousel">
            <div class="main_menu_link">Caroussel</div>
          </NavLink>
        </div>
      <Routes>
          <Route exact path="/Home"       element={<Home/>}/>
          <Route exact path="/Fibonacie" element={<Fibonacie/>}/>
          <Route exact path="/Fibonaccie" element={<Crypto/>}/>
          <Route exact path="/Fibonaccie" element={<Convertisseur/>}/>
          <Route exact path="/Fibonaccie" element={<Calendrier/>}/>
          <Route exact path="/Fibonaccie" element={<Tableau/>}/>
          <Route exact path="/Carousel"   element={<CarousselPage/>}/>
      </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
