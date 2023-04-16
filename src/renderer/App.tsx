import { Routes, Route, HashRouter } from 'react-router-dom';
import './App.css';
import FamilySpend from './pages/FamilySpend';
import Wallet from './pages/Wallet';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import Receipts from './pages/Reciept';
import {
  SetBudgetPage,
  CCardFormPage,
  AddBalancePage,
  PInfoPage,
  MainCardPage,
  AddExpensePage,
} from './components/TestingComponents';
import Personal from './pages/Personal';

export default function App() {
  return (
    <HashRouter>
      <div className="h-full w-screen flex bg-gray-200">
        <NavBar />
        <div className="container">
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/wallet" element={<Wallet />} />
              <Route path="/family" element={<FamilySpend />} />
              <Route path="/receipt" element={<Receipts />} />
              <Route path="/budgetPage" element={<SetBudgetPage />} />
              <Route path="/cardPage" element={<CCardFormPage />} />
              <Route path="/balancePage" element={<AddBalancePage />} />
              <Route path="/infoPage" element={<PInfoPage />} />
              <Route path="/mainCardPage" element={<MainCardPage />} />
              <Route path="/personalInfo" element={<Personal />} />
              <Route path="/addExpense" element={<AddExpensePage />} />
            </Routes>
          </main>
        </div>
      </div>
    </HashRouter>
  );
}
