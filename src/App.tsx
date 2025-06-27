import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Navbar from './components/layout/navbar';
import Footer from './components/layout/footer';
import { lazy } from 'react';
import CryptoFinance from './components/layout/cryptolayout/layout';
import ScrollToTop from './components/ui/scrollToTop';
import BuyGooglePlayGiftCard from './pages/BuyGooglePlayGiftCard';
import BuyAmazonGiftCard from './pages/BuyAmazonGiftCard';
import BuyAmexGiftCard from './pages/BuyAmexGiftCard';
import BuyRazerGiftCard from './pages/BuyRazerGiftCard';
import BuyAppleGiftCard from './pages/BuyAppleGiftCard';
import BuyEbayGiftCard from './pages/BuyEbayGiftCard';
import BuySephoraGiftCard from './pages/BuySephoraGiftCard';

const Home = lazy(() => import("./pages/Home"));
const RateCalculator = lazy(() => import("./pages/RateCalculator"));
const Blogs = lazy(() => import("./pages/blogs"));
const BuySellCrypto = lazy(() => import("./pages/BuySellCrypto"));
const BlogsPage = lazy(() => import("./pages/blogsPage"));
const SellOnlineNigeria = lazy(() => import("./pages/sellOnlineNigeria"));
const SellNairaCards = lazy(() => import("./pages/SellNairaCards"));
const SellCediscard = lazy(() => import("./pages/SellCediscard"));
const SellUSDcard = lazy(() => import("./pages/SellUSDcard"));
const SteamCardSale = lazy(() => import("./pages/SteamCardSale"));
const SellGooglePlaycard = lazy(() => import("./pages/SellGooglePlaycard"));
const SellAmazoncard = lazy(() => import("./pages/SellAmazoncard"));
const SellRazerGoldcard = lazy(() => import("./pages/SellRazerGoldcard"));
const SellApplecard = lazy(() => import("./pages/SellApplecard"));
const SellEbaycard = lazy(() => import("./pages/SellApplecard"));
const SellSephoracard = lazy(() => import("./pages/SellSephoracard"));
const SellAmexcard = lazy(() => import("./pages/SellSephoracard"));
const BuyGiftCardNigeria = lazy(() => import("./pages/buyGiftCardNigeria"));
const BuySteamGiftCard = lazy(() => import("./pages/BuySteamGiftCard"));

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
          <Route path='sellSteamGiftCard' element={<SteamCardSale />} />
          <Route path='sellGooglePlayGiftCard' element={<SellGooglePlaycard />} />
          <Route path='sellAmazonGiftCard' element={<SellAmazoncard />} />
          <Route path='sellRazerGoldGiftCards' element={<SellRazerGoldcard />} />
          <Route path='sellAppleGiftCards' element={<SellApplecard />} />
          <Route path='sellEbayGiftCards' element={<SellEbaycard />} />
          <Route path='sellSephoraGiftCards' element={<SellSephoracard />} /> 
          <Route path='sellAmexGiftCards' element={<SellAmexcard />} />
          <Route path='buyGiftCards' element={<BuyGiftCardNigeria />} />
          <Route path='buySteamGiftCards' element={<BuySteamGiftCard />} />
          <Route path='buyGooglePlayGiftCards' element={<BuyGooglePlayGiftCard />} />
          <Route path='buyAmazonGiftCards' element={<BuyAmazonGiftCard />} />
          <Route path='buyAmexGiftCards' element={<BuyAmexGiftCard />} />
          <Route path='buyRazerGiftCards' element={<BuyRazerGiftCard />} />
          <Route path='buyAppleGiftCards' element={<BuyAppleGiftCard />} />
          <Route path='buyEbayGiftCards' element={<BuyEbayGiftCard />} />
          <Route path='buySephoraGiftCards' element={<BuySephoraGiftCard />} />
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
