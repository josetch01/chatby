import { usePersistedNavigation } from '../hooks/usePersistedNavigation';

const NavigationDebug = ({ show = false }) => {
  const { getPersistedInfo, clearPersistedNavigation, currentPath } = usePersistedNavigation();
  
  if (!show) return null;
  
  const persistedInfo = getPersistedInfo();
  
  const formatTimeAgo = (milliseconds) => {
    const seconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    
    if (hours > 0) return `${hours}h ${minutes % 60}m ago`;
    if (minutes > 0) return `${minutes}m ${seconds % 60}s ago`;
    return `${seconds}s ago`;
  };

  return (
    <div className="">
       
    </div>
  );
};

export default NavigationDebug;
