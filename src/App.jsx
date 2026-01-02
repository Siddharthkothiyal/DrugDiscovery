import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Predict from './pages/Predict.jsx'
import About from './pages/About.jsx'
import Docs from './pages/Docs.jsx'
import Login from './pages/Login.jsx'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-light text-accent">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/predict" element={<Predict />} />
          <Route path="/about" element={<About />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
