import React, { useState } from 'react';
import { Hexagon, Menu, X, Github } from 'lucide-react';
import { APP_METADATA } from '../constants';
import { useTranslation } from 'react-i18next';
import { LanguageOrganella } from './LanguageOrganella';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const links = [
    { name: t('nav.philosophy'), href: '#philosophy' },
    { name: t('nav.atcg'), href: '#atcg' },
    { name: t('nav.chemistry'), href: '#chemistry' },
    { name: t('nav.patterns'), href: '#patterns' },
    { name: t('nav.dynamics'), href: '#dynamics' },
    { name: t('nav.immune'), href: '#immune' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-stone-200 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Identity / Logo */}
          <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="relative">
              <Hexagon className="text-hive-amber fill-hive-gold transition-transform duration-500 group-hover:scale-110 group-hover:rotate-180" />
              <div className="absolute inset-0 bg-hive-gold blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-500 rounded-full"></div>
            </div>
            <span className="font-serif font-bold text-xl text-slate-900 tracking-tight">{t('meta.subtitle')}</span>
          </div>

          {/* Desktop Synapses (Links) */}
          <div className="hidden md:flex items-center space-x-6 text-sm font-medium text-slate-600">
            {links.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="hover:text-hive-amber transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-hive-amber transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            
            {/* The Language Organella */}
            <div className="pl-2 border-l border-slate-200">
              <LanguageOrganella />
            </div>

            <a 
              href={APP_METADATA.githubUrl} 
              target="_blank" 
              rel="noreferrer" 
              className="bg-slate-900 text-white px-5 py-2.5 rounded-lg text-sm font-bold hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/20 hover:shadow-slate-900/40 flex items-center gap-2 transform hover:-translate-y-0.5"
            >
              <Github size={16} />
              {t('nav.getSdk')}
            </a>
          </div>

          {/* Mobile Spiracle (Menu Toggle) */}
          <div className="flex items-center gap-4 md:hidden">
            <LanguageOrganella />
            
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900 transition-colors p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Membrane */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white border-b border-stone-100 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-1">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-3 rounded-md text-base font-medium text-slate-600 hover:text-hive-amber hover:bg-stone-50 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href={APP_METADATA.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="block w-full text-center mt-4 px-5 py-3 bg-slate-900 text-white rounded-lg font-bold"
          >
            {t('nav.getSdk')}
          </a>
        </div>
      </div>
    </nav>
  );
};