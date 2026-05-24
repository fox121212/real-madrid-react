import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Squad from './pages/Squad'
import Matches from './pages/Matches'
import News from './pages/News'
import History from './pages/History'
import Achievements from './pages/Achievements'
import Legends from './pages/Legends'
import Stadium from './pages/Stadium'
import Club from './pages/Club'
import Rivalries from './pages/Rivalries'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/squad" element={<Squad />} />
        <Route path="/matches" element={<Matches />} />
        <Route path="/news" element={<News />} />
        <Route path="/history" element={<History />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/legends" element={<Legends />} />
        <Route path="/stadium" element={<Stadium />} />
        <Route path="/club" element={<Club />} />
        <Route path="/rivalries" element={<Rivalries />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
