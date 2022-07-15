
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';


import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Resources from './pages/Resources';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/resources" element={<Resources />}/>
    </Routes>
  );
}

export default App;
