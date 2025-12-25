// Shares Contentful settings across all components 
import { createContext, useContext } from 'react';
import { useSiteSettings } from '../hooks/useSiteSettings';

const SiteSettingsContext = createContext(null);

export function SiteSettingsProvider({ children }) {
  const settings = useSiteSettings();

  return (
    <SiteSettingsContext.Provider value={settings}>
      {children}
    </SiteSettingsContext.Provider>
  );
}

export function useSiteSettingsContext() {
  const context = useContext(SiteSettingsContext);
  if (context === null) {
    throw new Error('useSiteSettingsContext must be used within a SiteSettingsProvider');
  }
  return context;
}
