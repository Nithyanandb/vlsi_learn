import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import VLSICalculator from './pages/tools/VLSICalculator';
import EDAToolsGuide from './components/EDAToolsGuide';
import RTLToGDSII from './components/RTLToGDSII';
import Tutorials from './pages/Tutorials';
import Intro from './pages/tutorials/Intro.tsx';
import DigitalLogic from './pages/tutorials/DigitalLogic.tsx';
import ChipEdge from './pages/tutorials/ChipEdge.tsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/tools/calculator" element={<VLSICalculator />} />
        <Route path="/tools/eda-guide" element={<EDAToolsGuide />} />
        <Route path="/tutorials" element={<Tutorials />} />
        <Route path="/tutorials/vlsi/intro" element={<Intro />} />
        <Route path="/tutorials/vlsi/digital-logic" element={<DigitalLogic />} />
        <Route path="/tutorials/vlsi/rtl-to-gdsii" element={<RTLToGDSII />} />
        <Route path="/tutorials/vlsi/chip-edge" element={<ChipEdge />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;