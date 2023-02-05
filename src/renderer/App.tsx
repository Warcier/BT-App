import { Routes, Route, HashRouter } from 'react-router-dom';
import './App.css';
import FamilySpend from './pages/FamilySpend';
import Wallet from './pages/Wallet';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import Receipts from './pages/Reciept';
import PInfoForm from './components/forms/PInfoForm'

export default function App() {
  return (
    <HashRouter>
      <div className="h-screen w-screen flex bg-gray-200">
        <NavBar />
        <div className="container">
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/wallet" element={<Wallet />} />
              <Route path="/family" element={<FamilySpend />} />
              <Route path="/receipt" element={<Receipts />} />
            </Routes>
          </main>
        </div>
      </div>
    </HashRouter>
  );
}
