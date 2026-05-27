import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Volunteer from './pages/Volunteer'
import Contact from './pages/Contact'

function App() {
  return (
    <Router>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#1a1a2e',
            color: '#fff',
            borderRadius: '16px',
            padding: '16px 20px',
            fontFamily: 'Inter, sans-serif',
            boxShadow: '0 20px 60px rgba(0,0,0,0.2)',
          },
          success: {
            iconTheme: { primary: '#E91E8C', secondary: '#fff' },
          },
          error: {
            iconTheme: { primary: '#FF6B35', secondary: '#fff' },
          },
        }}
      />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/volunteer" element={<Volunteer />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
