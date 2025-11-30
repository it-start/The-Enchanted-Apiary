import React from 'react';
import { Heart, FlaskConical, Network, Zap, ArrowRight, MousePointer2 } from 'lucide-react';
import { DnaStrand } from './Illustrations';
import { HexDisplay } from './HexButton';
import { HIVE_ELEMENTS } from '../constants';
import { ElementType } from '../types';
import { useTranslation } from 'react-i18next';

const iconMap: Record<string, React.FC<any>> = {
  Heart,
  FlaskConical,
  Network,
  Zap
};

interface DnaMappingProps {
  activeId?: ElementType;
  onSelect?: (id: ElementType) => void;
}

export const DnaMapping: React.FC<DnaMappingProps> = ({ activeId, onSelect }) => {
  const { t } = useTranslation();
  const mappings = HIVE_ELEMENTS.map(el => {
    const Icon = iconMap[el.iconName];
    return {
      dnaTitle: t(`elements.${el.id}.dnaBase`),
      hiveId: el.id,
      hiveName: t(`elements.${el.id}.name`),
      color: el.color.split(' ')[0], // Extract bg color class
      icon: <Icon size={20} className={el.color.split(' ').find(c => c.startsWith('text-'))} />,
      desc: t(`elements.${el.id}.dnaDescription`)
    };
  });

  return (
    <div className="bg-white rounded-3xl shadow-xl border border-stone-200 p-8 lg:p-12 relative overflow-hidden transition-all duration-500">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 p-64 bg-slate-50 rounded-full blur-3xl -z-10 opacity-50"></div>
      
      <div className="flex flex-col xl:flex-row gap-12 items-center">
        
        {/* DNA Visual */}
        <div className="flex flex-col items-center gap-6">
            <div className="relative h-[480px] w-40 flex items-center justify-center bg-white rounded-full shadow-inner border border-stone-100 py-8">
                <DnaStrand className="h-full w-full drop-shadow-md" />
            </div>
            <div className="text-center">
                <h3 className="font-serif font-bold text-2xl text-slate-900">The Genetic Code</h3>
                <p className="text-sm text-slate-500 mt-2 max-w-[200px]">Biological Base pairs mapping directly to Software Primitives.</p>
            </div>
        </div>

        {/* Mapping Grid */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {mappings.map((m, i) => {
                const isActive = activeId === m.hiveId;
                return (
                  <div 
                    key={i} 
                    onClick={() => onSelect && onSelect(m.hiveId)}
                    className={`flex items-center gap-4 p-4 rounded-2xl border transition-all duration-500 group cursor-pointer relative overflow-hidden
                      ${isActive 
                        ? 'bg-hive-pollen border-hive-amber shadow-md scale-105 ring-1 ring-hive-amber/50' 
                        : 'bg-stone-50/50 border-stone-100 hover:bg-white hover:shadow-lg hover:border-stone-300'
                      }`}
                  >
                      {/* Active Indicator */}
                      {isActive && (
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-hive-amber"></div>
                      )}

                      {/* DNA Side */}
                      <div className="flex-1 min-w-0">
                          <div className={`text-xs font-bold uppercase tracking-widest mb-1 transition-colors ${isActive ? 'text-hive-amber' : 'text-slate-400 group-hover:text-slate-600'}`}>DNA Base</div>
                          <div className="font-serif font-bold text-lg text-slate-700 mb-2 group-hover:text-slate-900 transition-colors">{m.dnaTitle}</div>
                          <p className="text-xs text-slate-600 leading-relaxed">{m.desc}</p>
                      </div>

                      {/* Connection */}
                      <div className={`hidden sm:flex items-center justify-center w-8 transition-colors ${isActive ? 'text-hive-amber' : 'text-slate-300 group-hover:text-hive-amber'}`}>
                          {isActive ? <ArrowRight size={20} /> : <MousePointer2 size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />}
                      </div>

                      {/* Hive Side */}
                      <div className="flex-shrink-0 transform group-hover:scale-105 transition-transform duration-300">
                          <HexDisplay 
                              label={m.hiveId} 
                              subLabel={m.hiveName} 
                              icon={m.icon} 
                              color={m.color} 
                          />
                      </div>
                  </div>
                );
            })}
        </div>

      </div>
    </div>
  );
};