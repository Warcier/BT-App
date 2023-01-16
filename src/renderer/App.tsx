import { Routes, Route, HashRouter } from 'react-router-dom';
import './App.css';
import FamilySpend from './pages/FamilySpend';
import Wallet from './pages/Wallet';
import Home from './pages/Home';
import Navbar from './components/navbar';
import Receipts from './pages/Reciept';
import Personal from './pages/personalInfo'

export default function App() {
  return (
    <HashRouter>
      <div className="h-screen w-screen flex bg-gray-200">
        <Navbar />
        <div className="container">
          <main className="">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/wallet" element={<Wallet />} />
              <Route path="/family" element={<FamilySpend />} />
              <Route path="/receipt" element={<Receipts />} />
              <Route path="/personal" element={<Personal />} />
            </Routes>
          </main>
        </div>
      </div>
    </HashRouter>
  );
}
