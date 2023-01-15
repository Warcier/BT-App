import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import FamilySpend from './pages/FamilySpend';
import Wallet from './pages/Wallet';
import Home from './pages/Home';


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/family" element={<FamilySpend />} />
      </Routes>
    </Router>
  );
}
