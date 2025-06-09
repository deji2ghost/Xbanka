import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Navbar from './components/layout/navbar';
import Footer from './components/layout/footer';
import { lazy } from 'react';
import CryptoFinance from './components/layout/cryptolayout/layout';
import BuySellCrypto from './pages/BuySellCrypto';

const Home = lazy(() => import("./pages/Home"));
const RateCalculator = lazy(() => import("./pages/RateCalculator"));

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ratecalculator" element={<RateCalculator />} />
      <Route path="/cryptoFinance" element={<CryptoFinance />}>
          <Route path='buysell' element={<BuySellCrypto />} />
      </Route>
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      {/* <ScrollTop /> */}
      <Navbar />
      <AppRoutes />
      {/* <ScrollToTop /> */}
      <Footer />
    </BrowserRouter>
  );
}

export default App
