import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Calculadora from './pages/Calculadora';
import Planes from './pages/Planes';
import Partners from './pages/Partners';
import './App.css'
import { ThemeProvider } from './context/ThemeContext';
import { usePersistedNavigation } from './hooks/usePersistedNavigation';
import NavigationDebug from './components/NavigationDebug';
import { useEffect } from 'react';

// Componente interno que usa el hook de navegación persistente
function AppContent() {
  const { restoreLastPage } = usePersistedNavigation({
    validRoutes: ['/', '/calculadora', '/planes', '/partners'],
    expirationHours: 48, // 2 días
    excludeHomePage: false // Permitir restaurar a home también
  });

  // Restaurar la última página al cargar la aplicación
  useEffect(() => {
    // Pequeño delay para asegurar que el router esté listo
    const timer = setTimeout(() => {
      restoreLastPage();
    }, 150); // Aumenté el delay ligeramente

    return () => clearTimeout(timer);
  }, [restoreLastPage]);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculadora" element={<Calculadora />} />
        <Route path="/planes" element={<Planes />} />
        <Route path="/partners" element={<Partners />} />
      </Routes>
      {/* Componente de debug - quitar en producción */}
      <NavigationDebug show={process.env.NODE_ENV === 'development'} />
    </Layout>
  );
}

function App() {
  return (
    <Router>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </Router>
  )
}

export default App
