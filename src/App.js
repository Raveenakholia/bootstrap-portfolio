/** @format */

import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Queen from './components/Queen';
import About from './components/About';
import Projects from './components/Projets';
import Contact from './components/Contact';
import Header from './components/Header';
import Home from './components/Home';
import Achievements from './components/Achievements';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/about'
          element={<About />}
        />
        <Route
          path='/achievements'
          element={<Achievements />}
        />
        <Route
          path='/header'
          element={<Header />}
        />
        <Route
          path='/contact'
          element={<Contact />}
        />
        <Route
          path='/projects'
          element={<Projects />}
        />
      </Routes>
    </Router>
  );
}

export default App;
