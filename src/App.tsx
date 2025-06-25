import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Navbar from './components/layout/navbar';
import Footer from './components/layout/footer';
import { lazy } from 'react';
import CryptoFinance from './components/layout/cryptolayout/layout';
import ScrollToTop from './components/ui/scrollToTop';

const Home = lazy(() => import("./pages/Home"));
const RateCalculator = lazy(() => import("./pages/RateCalculator"));
const Blogs = lazy(() => import("./pages/blogs"));
const BuySellCrypto = lazy(() => import("./pages/BuySellCrypto"));
const BlogsPage = lazy(() => import("./pages/blogsPage"));
const Sellsteamcard = lazy(() => import("./pages/sellsteamcard"));

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/rateCalculator" element={<RateCalculator />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/blogs/:id" element={<BlogsPage />} />
      <Route path="/cryptoFinance" element={<CryptoFinance />}>
          <Route path='buysell' element={<BuySellCrypto />} />
      </Route>
      <Route path="/giftCards" element={<CryptoFinance />}>
          <Route path='sellGiftCardsInNaira' element={<Sellsteamcard />} />
      </Route>
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Navbar />
      <div className='mt-[50px] md:mt-[110px]'>
      <AppRoutes />
      </div>
      {/* <ScrollToTop /> */}
      <Footer />
    </BrowserRouter>
  );
}

export default App
