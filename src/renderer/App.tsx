import { Routes, Route, HashRouter } from 'react-router-dom';
import './App.css';
import FamilySpend from './pages/FamilySpend';
import Wallet from './pages/Wallet';
import Home from './pages/Home';
import Navbar from './components/navbar';
import Receipts from './pages/Reciept';

export default function App() {
  return (
    <HashRouter>
      <div className="h-screen w-screen flex bg-gray-200">
        <Navbar />
        <div className="container">
          <main className="bg-black">
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
