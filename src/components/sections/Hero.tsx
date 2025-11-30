import React from 'react';
import { MoveRight, Leaf } from 'lucide-react';
import { HoneycombPattern, LittleBee } from '../Illustrations';
import { APP_METADATA } from '../../constants';
import { useTranslation } from 'react-i18next';

export const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <header className="relative pt-36 pb-32 lg:pt-48 lg:pb-48 overflow-hidden">
      {/* Background Patterns */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
         <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4">
           <HoneycombPattern className="w-[600px] h-[600px] text-hive-amber" />
         </div>
         <div className="absolute bottom-0 left-0 transform -translate-x-1/4 translate-y-1/4 rotate-90">
           <HoneycombPattern className="w-[500px] h-[500px] text-hive-gold" />
         </div>
      </div>

      {/* Floating Little Bee */}
      <div className="absolute top-32 right-[15%] hidden lg:block pointer-events-none animate-float z-20">
        <LittleBee className="w-32 h-32" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-hive-pollen border border-hive-honey text-hive-dark text-sm font-medium mb-8 animate-float">
          <Leaf size={16} /> {t('meta.tagline')}
        </div>
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-slate-900 mb-6 leading-tight">
          {t('hero.titlePrefix')} <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-hive-amber to-hive-gold">{t('hero.titleHighlight')}</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          {t('meta.quote')}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#atcg" className="px-8 py-4 bg-slate-900 text-white rounded-xl font-bold text-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
            {t('hero.explore')} <MoveRight size={20} />
          </a>
          <a href="#learning" className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-xl font-bold text-lg hover:bg-stone-50 transition-all">
            {t('hero.path')}
          </a>
        </div>
      </div>
    </header>
  );
};