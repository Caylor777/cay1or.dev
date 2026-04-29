import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home.tsx'
import Photography from './pages/photography.tsx'
import Detail from './pages/detail.tsx'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/photography" element={<Photography />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </Router>
  )
}

export default App
