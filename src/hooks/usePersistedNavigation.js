import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const usePersistedNavigation = (options = {}) => {
  const location = useLocation();
  const navigate = useNavigate();

  // Configuración por defecto
  const {
    validRoutes = ['/', '/calculadora', '/planes', '/partners'],
    storageKey = 'lastVisitedPage',
    timestampKey = 'lastVisitedPageTimestamp',
    expirationHours = 24,
    excludeHomePage = true // No restaurar si estamos en home y la última página también era home
  } = options;

  // Guardar la ruta actual en localStorage cuando cambie
  useEffect(() => {
    if (validRoutes.includes(location.pathname)) {
      localStorage.setItem(storageKey, location.pathname);
      localStorage.setItem(timestampKey, Date.now().toString());

      // Debug log
      console.log('📍 Página guardada:', location.pathname);
    }
  }, [location.pathname, validRoutes, storageKey, timestampKey]);

  // Restaurar la última página visitada al cargar la aplicación
  const restoreLastPage = () => {
    try {
      const lastPage = localStorage.getItem(storageKey);
      const timestamp = localStorage.getItem(timestampKey);

      if (!lastPage || !timestamp) {
        console.log('🔄 No hay página guardada para restaurar');
        return;
      }

      // Verificar si la visita fue reciente
      const expirationTime = expirationHours * 60 * 60 * 1000;
      const isRecent = (Date.now() - parseInt(timestamp)) < expirationTime;

      if (!isRecent) {
        console.log('⏰ La página guardada ha expirado');
        clearPersistedNavigation();
        return;
      }

      // Lógica de restauración
      const shouldRestore =
        lastPage !== location.pathname && // No restaurar si ya estamos en esa página
        validRoutes.includes(lastPage) && // Solo restaurar rutas válidas
        (!excludeHomePage || lastPage !== '/') && // Excluir home si está configurado
        (location.pathname === '/' || !excludeHomePage); // Solo restaurar desde home o si no excluimos home

      if (shouldRestore) {
        console.log('🔄 Restaurando página:', lastPage);
        navigate(lastPage, { replace: true });
      } else {
        console.log('🚫 No se restaura la página. Condiciones no cumplidas.');
      }
    } catch (error) {
      console.warn('❌ Error al restaurar la navegación:', error);
    }
  };

  // Limpiar el localStorage si es necesario
  const clearPersistedNavigation = () => {
    localStorage.removeItem(storageKey);
    localStorage.removeItem(timestampKey);
    console.log('🗑️ Navegación persistente limpiada');
  };

  // Obtener información sobre la navegación persistente
  const getPersistedInfo = () => {
    try {
      const lastPage = localStorage.getItem(storageKey);
      const timestamp = localStorage.getItem(timestampKey);

      if (!lastPage || !timestamp) return null;

      const expirationTime = expirationHours * 60 * 60 * 1000;
      const isRecent = (Date.now() - parseInt(timestamp)) < expirationTime;

      return {
        lastPage,
        timestamp: parseInt(timestamp),
        isRecent,
        timeAgo: Date.now() - parseInt(timestamp)
      };
    } catch (error) {
      return null;
    }
  };

  return {
    restoreLastPage,
    clearPersistedNavigation,
    getPersistedInfo,
    currentPath: location.pathname
  };
};
