import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hexagon, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { SEOHelper } from './components/SEOHelper';

// Pages
import { Home } from './pages/Home';
import { GenesisPage } from './pages/GenesisPage';
import { CodonLibraryPage } from './pages/CodonLibraryPage';
import { ChemicalAnalysisPage } from './pages/ChemicalAnalysisPage';

const Footer: React.FC = () => {
  const { t, i18n } = useTranslation();
  
  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ru' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <Hexagon className="mx-auto text-slate-600 mb-4" />
        <p className="serif italic text-lg mb-8">{t('footer.quote')}</p>
        <div className="flex justify-center gap-8 text-sm">
           <a href="#" className="hover:text-hive-gold">Documentation</a>
           <a href="#" className="hover:text-hive-gold">GitHub</a>
           <a href="#" className="hover:text-hive-gold">Community</a>
        </div>
        
        <div className="flex justify-center mt-8">
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-slate-500 hover:text-hive-gold transition-colors"
          >
            <Globe size={14} />
            {i18n.language === 'en' ? 'Switch to Russian' : 'Switch to English'}
          </button>
        </div>

        <p className="mt-8 text-xs text-slate-600">{t('footer.copyright')}</p>
      </div>
    </footer>
  );
};

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-stone-50 overflow-x-hidden">
          <SEOHelper />
          <Navbar />
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/genesis" element={<GenesisPage />} />
            <Route path="/codons" element={<CodonLibraryPage />} />
            <Route path="/chemical-analysis" element={<ChemicalAnalysisPage />} />
          </Routes>

          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default App;