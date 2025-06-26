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
const SellOnlineNigeria = lazy(() => import("./pages/sellOnlineNigeria"));
const SellNairaCards = lazy(() => import("./pages/SellNairaCards"));
const SellCediscard = lazy(() => import("./pages/SellCediscard"));
const SellUSDcard = lazy(() => import("./pages/SellUSDcard"));
const Sellsteamcard = lazy(() => import("./pages/Sellsteamcard"));
const SellGooglePlaycard = lazy(() => import("./pages/SellGooglePlaycard"));

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
          <Route path='sellGiftCardsOnlineNigeria' element={<SellOnlineNigeria />} />
          <Route path='sellGiftCardsInNaira' element={<SellNairaCards />} />
          <Route path='sellGiftCardsInCedis' element={<SellCediscard />} />
          <Route path='sellGiftCardsInUSD' element={<SellUSDcard />} />
          <Route path='sellSteamGiftCard' element={<Sellsteamcard />} />
          <Route path='sellGooglePlayGiftCard' element={<SellGooglePlaycard />} />
          {/* <Route path='sellAmazonGiftCard' element={<Sellsteamcard />} /> */}
          {/* <Route path='sellRazerGoldGiftCards' element={<Sellsteamcard />} /> */}
          {/* <Route path='sellAppleGiftCards' element={<Sellsteamcard />} /> */}
          {/* <Route path='sellEbayGiftCards' element={<Sellsteamcard />} /> */}
          {/* <Route path='sellSephoraGiftCards' element={<Sellsteamcard />} />  */}
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
