import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Calculadora from './pages/Calculadora';
import Planes from './pages/Planes';
import Partners from './pages/Partners';
import './App.css'
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <Router>
      <ThemeProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/calculadora" element={<Calculadora />} />
            <Route path="/planes" element={<Planes />} />
            <Route path="/partners" element={<Partners />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </Router>
  )
}

export default App
