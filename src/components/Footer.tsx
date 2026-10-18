import React from 'react';
import { MessageCircle, Mail, ArrowUp } from 'lucide-react';
import { WHATSAPP_DISPLAY, CONTACT_EMAIL, createWhatsAppUrl, DEFAULT_WA_MESSAGE } from '../data/landingData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs py-10 border-t border-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-6 border-b border-slate-900">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-slate-900 text-amber-400 flex items-center justify-center font-bold text-sm border border-slate-800">
              CO
            </div>
            <div>
              <p className="font-extrabold text-sm text-white">
                Asesoría Claudio Oyarzún
              </p>
              <p className="text-[11px] text-slate-500">
                Servicios Contables, Tributarios y Auditoría en Chile
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={createWhatsAppUrl(DEFAULT_WA_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp: {WHATSAPP_DISPLAY}</span>
            </a>
            <span className="hidden sm:inline text-slate-700">·</span>
            <div className="hidden sm:flex items-center gap-1.5 text-slate-400">
              <Mail className="w-4 h-4 text-slate-500" />
              <span>{CONTACT_EMAIL}</span>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <p>© {new Date().getFullYear()} Asesoría Claudio Oyarzún. Todos los derechos reservados.</p>
          <button
            type="button"
            onClick={scrollToTop}
            className="hover:text-white flex items-center gap-1 transition-colors"
          >
            <span>Volver arriba</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
