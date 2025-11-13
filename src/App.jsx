import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Componentes
import { Navbar } from './Components/Navbar/Navbar.jsx';

// Páginas
import Home from './Pages/Home/Home.jsx';
import Shop from './Pages/Shop/Shop.jsx';
import DigitalKit from './Pages/DigitalKit/DigitalKit.jsx';
import Contact from './Pages/Contact/Contact.jsx';

function App() {
  return (
    <Router>
      <Navbar /> {/* Navbar fijo en todas las páginas */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/digitalkit" element={<DigitalKit />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;

