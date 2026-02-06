import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import MobileSidebar from './components/MobileSidebar';
import Hero from './components/Hero';
import MobileHero from './components/MobileHero';
import Architects from './components/Architects';
import Integrations from './components/Integrations';
import IndustrySelector from './components/IndustrySelector';
import MobileIndustrySelector from './components/MobileIndustrySelector';
import SectorDetail from './components/SectorDetail';
import ProcessHorizontal from './components/ProcessHorizontal';
import MobileProcessHorizontal from './components/MobileProcessHorizontal';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ProtocolOverlay from './components/ProtocolOverlay';
import ExitIntentPopup from './components/ExitIntentPopup';
import LogoCarousel from './components/LogoCarousel';
import LocationDetail from './components/LocationDetail';
import StickyHeaderBanner from './components/StickyHeaderBanner';
import { AnimatePresence } from 'framer-motion';
import { useDeviceDetection } from './hooks/useDeviceDetection';
import { SECTORS, LOCATIONS } from './constants';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isProtocolOpen, setIsProtocolOpen] = useState(false);
  const [selectedSectorId, setSelectedSectorId] = useState<number | null>(null);
  const [selectedLocationId, setSelectedLocationId] = useState<string | null>(null);
  const { isMobile } = useDeviceDetection();

  // Handle simple path-based routing for locations
  useEffect(() => {
    const path = window.location.pathname;
    if (path.includes('family-offices-florida')) {
      setSelectedLocationId('florida');
    } else if (path.includes('luxury-concierge-miami')) {
      setSelectedLocationId('miami');
    } else if (path.startsWith('executive-assistant-services-us') || path.includes('executive-assistant-services-us')) {
      setSelectedLocationId('us');
    } else {
      setSelectedLocationId(null);
    }
  }, []);

  // Initialize theme based on preference or local storage
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleOpenProtocol = () => setIsProtocolOpen(true);
  const resetView = () => {
    setSelectedSectorId(null);
    setSelectedLocationId(null);
    window.history.pushState({}, '', '/');
  };

  const selectedSector = SECTORS.find(s => s.id === selectedSectorId);
  const selectedLocation = LOCATIONS.find(l => l.id === selectedLocationId);

  return (
    <div className="bg-cream dark:bg-dark min-h-screen transition-colors duration-500 relative">
      <StickyHeaderBanner isDarkMode={isDarkMode} onOpenProtocol={handleOpenProtocol} />

      {isMobile ? (
        <MobileSidebar
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          isDarkMode={isDarkMode}
          toggleTheme={toggleTheme}
          onOpenProtocol={handleOpenProtocol}
          onHomeClick={resetView}
          onSelectSector={setSelectedSectorId}
        />
      ) : (
        <Sidebar
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          isDarkMode={isDarkMode}
          toggleTheme={toggleTheme}
          onOpenProtocol={handleOpenProtocol}
          onHomeClick={resetView}
          onSelectSector={setSelectedSectorId}
        />
      )}

      <ProtocolOverlay
        isOpen={isProtocolOpen}
        onClose={() => setIsProtocolOpen(false)}
      />

      <main className="pt-0 md:pt-[68px]">
        <AnimatePresence mode="wait">
          {selectedSector ? (
            <SectorDetail
              key="detail"
              sector={selectedSector}
              onBack={() => setSelectedSectorId(null)}
              onOpenProtocol={handleOpenProtocol}
            />
          ) : selectedLocation ? (
            <LocationDetail
              key="location"
              location={selectedLocation}
              onBack={() => {
                setSelectedLocationId(null);
                window.history.pushState({}, '', '/');
              }}
              onOpenProtocol={handleOpenProtocol}
            />
          ) : (
            <div key="home">
              {isMobile ? <MobileHero onOpenProtocol={handleOpenProtocol} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} /> : <Hero onOpenProtocol={handleOpenProtocol} />}
              <Architects />
              {isMobile ? <MobileIndustrySelector onSelectSector={setSelectedSectorId} /> : <IndustrySelector onSelectSector={setSelectedSectorId} />}
              <LogoCarousel />
              <Integrations />
              {isMobile ? <MobileProcessHorizontal /> : <ProcessHorizontal />}
              <FAQ />
            </div>
          )}
        </AnimatePresence>
      </main>

      <Footer
        onOpenProtocol={handleOpenProtocol}
        onSelectSector={setSelectedSectorId}
        onSelectLocation={(id) => {
          setSelectedLocationId(id);
          const path = id === 'florida' ? 'family-offices-florida' :
            id === 'miami' ? 'luxury-concierge-miami' :
              'executive-assistant-services-us';
          window.history.pushState({}, '', `/${path}`);
        }}
      />

      {!isMobile && <ExitIntentPopup onOpenProtocol={handleOpenProtocol} />}
    </div>
  );
};

export default App;
