import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Navbar from './components/layout/navbar';
import Footer from './components/layout/footer';
import { lazy } from 'react';

const Home = lazy(() => import("./pages/Home"));
const RateCalculator = lazy(() => import("./pages/RateCalculator"));

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ratecalculator" element={<RateCalculator />} />
      <Route path="/blog" element={<CryptoFinance />}>
          <Route index element={<BlogList />} /> {/* /blog */}
          <Route path=":postId" element={<BlogPost />} /> {/* /blog/some-post-id */}
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
