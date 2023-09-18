import logo from './logo.svg';
import React from 'react';
import './App.css';
import { BrowserRouter , NavLink, Route, Routes} from 'react-router-dom';
import  Home  from './Components/Home';


function App() {
  return (
        <div className='app'>
            <BrowserRouter>
        <div class="main_menu">
          <NavLink to="/Home">
            <div class="main_menu_link">Home</div>
          </NavLink>
        </div>
      <Routes>
          <Route exact path="/Home" element={<Home/>}/>
      </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
