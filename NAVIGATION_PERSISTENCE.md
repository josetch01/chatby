# 🔄 Sistema de Navegación Persistente

Este sistema guarda automáticamente la página actual del usuario en localStorage y la restaura cuando recarga la página o vuelve a visitar el sitio.

## 🚀 Características

- ✅ **Guardado automático**: Cada vez que navegas a una página, se guarda automáticamente
- ✅ **Restauración inteligente**: Al recargar, te devuelve a donde estabas
- ✅ **Expiración configurable**: Las páginas guardadas expiran después de un tiempo configurable
- ✅ **Rutas válidas**: Solo guarda y restaura rutas específicas que definas
- ✅ **Debug mode**: Componente visual para ver qué está pasando (solo en desarrollo)
- ✅ **Configuración flexible**: Múltiples opciones de personalización

## 📁 Archivos del Sistema

```
src/
├── hooks/
│   └── usePersistedNavigation.js    # Hook principal
├── components/
│   └── NavigationDebug.jsx          # Componente de debug (opcional)
└── App.jsx                          # Implementación
```

## 🔧 Configuración

### Opciones disponibles:

```javascript
const { restoreLastPage } = usePersistedNavigation({
  validRoutes: ['/', '/calculadora', '/planes', '/partners'], // Rutas que se guardan
  storageKey: 'lastVisitedPage',                              // Clave en localStorage
  timestampKey: 'lastVisitedPageTimestamp',                   // Clave para timestamp
  expirationHours: 48,                                        // Horas antes de expirar
  excludeHomePage: false                                      // Si excluir home de restauración
});
```

### Configuración actual:
- **Rutas válidas**: Home, Calculadora, Planes, Partners
- **Expiración**: 48 horas (2 días)
- **Incluye home**: Sí, puede restaurar a la página de inicio
- **Debug**: Solo visible en modo desarrollo

## 🎯 Cómo Funciona

1. **Navegación**: Cuando visitas una página válida, se guarda en localStorage
2. **Timestamp**: Se guarda también cuándo visitaste la página
3. **Recarga**: Al recargar la página, verifica si hay una página guardada
4. **Validación**: Comprueba que la página sea válida y no haya expirado
5. **Restauración**: Te redirige a la última página visitada

## 🛠️ Funciones Disponibles

```javascript
const {
  restoreLastPage,        // Restaura la última página
  clearPersistedNavigation, // Limpia el localStorage
  getPersistedInfo,       // Obtiene info sobre la página guardada
  currentPath             // Ruta actual
} = usePersistedNavigation();
```

## 🐛 Debug Mode

En modo desarrollo, verás un pequeño panel en la esquina inferior izquierda que muestra:
- Página actual
- Página guardada
- Cuándo se guardó
- Si es válida o ha expirado
- Botón para limpiar el localStorage

## 🚫 Desactivar el Sistema

Para desactivar temporalmente:

1. **Quitar el debug**: Cambia `show={false}` en `NavigationDebug`
2. **Desactivar restauración**: Comenta el `useEffect` en `AppContent`
3. **Quitar completamente**: Elimina los archivos del hook y las importaciones

## 📝 Logs de Consola

El sistema muestra logs útiles en la consola:
- 📍 Cuando se guarda una página
- 🔄 Cuando se restaura una página
- ⏰ Cuando una página ha expirado
- 🚫 Cuando no se cumplen las condiciones para restaurar
- 🗑️ Cuando se limpia el localStorage

## 🔒 Privacidad

- Solo se guarda la ruta de la página, no datos sensibles
- Los datos se almacenan localmente en el navegador del usuario
- Se limpian automáticamente después del tiempo de expiración
- El usuario puede limpiar manualmente desde el panel de debug
