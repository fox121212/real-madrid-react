import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Squad from './pages/Squad';
import Matches from './pages/Matches';
import News from './pages/News';
import Achievements from './pages/Achievements';
import Legends from './pages/Legends';
import History from './pages/History';
import { Stadium, Club, Rivalries } from './pages/OtherPages';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function Layout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/squad" element={<Squad />} />
          <Route path="/matches" element={<Matches />} />
          <Route path="/news" element={<News />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/legends" element={<Legends />} />
          <Route path="/history" element={<History />} />
          <Route path="/stadium" element={<Stadium />} />
          <Route path="/club" element={<Club />} />
          <Route path="/rivalries" element={<Rivalries />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}
