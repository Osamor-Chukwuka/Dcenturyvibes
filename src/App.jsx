import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router"
import LandingPage from './pages/LandingPage'
import AboutPage from './pages/About'
import ResultsPage from './pages/Results'
import DonatePage from './pages/Donate'
import ContactPage from './pages/Contact'
import EventsPage from './pages/Events'

function App() {

  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about-us" element={<AboutPage />} />
            <Route path="/results" element={<ResultsPage />} />
            <Route path="/donate" element={<DonatePage />} />
            <Route path="/contact-us" element={<ContactPage />} />
            <Route path="/events" element={<EventsPage />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
