import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Navbar from './components/layout/navbar';
import Footer from './components/layout/footer';
import { lazy } from 'react';
import CryptoFinance from './components/layout/cryptolayout/layout';

const Home = lazy(() => import("./pages/Home"));
const RateCalculator = lazy(() => import("./pages/RateCalculator"));
const Blogs = lazy(() => import("./pages/blogs"));
const BuySellCrypto = lazy(() => import("./pages/BuySellCrypto"));
// const BlogsPage = lazy(() => import("./pages/blogsPage"));

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/rateCalculator" element={<RateCalculator />} />
      <Route path="/blogs" element={<Blogs />} />
      {/* <Route path="/blogs/:id" element={<BlogsPage />} /> */}
      {/* <Route path="/blogs/id" element={<BlogsPage />} /> */}
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
