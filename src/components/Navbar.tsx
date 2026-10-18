import React from 'react';
import { MessageCircle } from 'lucide-react';
import { createWhatsAppUrl, DEFAULT_WA_MESSAGE } from '../data/landingData';

export const Navbar: React.FC = () => {
  const waUrl = createWhatsAppUrl(DEFAULT_WA_MESSAGE);

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200/80 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Monogram & Name */}
          <a href="#" className="flex items-center gap-3.5 group focus-visible:outline-none">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-slate-900 text-amber-400 flex items-center justify-center font-bold text-sm tracking-wider shadow-sm ring-1 ring-amber-500/30 group-hover:ring-amber-500/60 transition-all">
                CO
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-white" />
            </div>
            <div>
              <span className="font-extrabold text-base sm:text-lg text-slate-900 tracking-tight block leading-tight group-hover:text-amber-900 transition-colors">
                Asesoría Claudio Oyarzún
              </span>
              <span className="text-[11px] text-slate-500 font-medium tracking-wider uppercase block mt-0.5">
                Contabilidad & Asesoría Tributaria
              </span>
            </div>
          </a>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#servicios" className="hover:text-slate-950 transition-colors">
              Servicios
            </a>
            <a href="#metodologia" className="hover:text-slate-950 transition-colors">
              Cómo Trabajamos
            </a>
            <a href="#diferencial" className="hover:text-slate-950 transition-colors">
              Por Qué Elegirnos
            </a>
            <a href="#testimonios" className="hover:text-slate-950 transition-colors">
              Testimonios
            </a>
          </nav>

          {/* Action button */}
          <div className="flex items-center gap-3">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-900 bg-slate-100 hover:bg-slate-200/90 border border-slate-200 rounded-xl transition-all shadow-2xs hover:shadow-xs active:scale-[0.98]"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600 fill-emerald-600/20" />
              <span>WhatsApp Directo</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
