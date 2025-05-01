import './App.css';
import { Routes,Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import { Projects } from './Projects/Projects';
import { Skills } from './Skills/Skills';
import Intropage from './Intropage/Intropage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Intropage/>}></Route>
      <Route path="/Navbar" element={<Navbar/>}></Route>
      <Route path="/Projects" element={<Projects/>}></Route>
      <Route path="/Skills" element={<Skills/>}></Route>
    </Routes>
  );
}

export default App;
