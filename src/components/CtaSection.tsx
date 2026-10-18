import React from 'react';
import { MessageCircle, Mail, MapPin, Clock } from 'lucide-react';
import {
  WHATSAPP_DISPLAY,
  CONTACT_EMAIL,
  OFFICE_LOCATION,
  createWhatsAppUrl,
  DEFAULT_WA_MESSAGE
} from '../data/landingData';

export const CtaSection: React.FC = () => {
  const waUrl = createWhatsAppUrl(DEFAULT_WA_MESSAGE);

  return (
    <section id="contacto" className="py-16 sm:py-24 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <span className="inline-block text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-950/60 px-3 py-1 rounded-full border border-amber-800/80">
          Contacto Directo
        </span>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
          Inicie una gestión contable transparente y sin riesgos
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto font-normal leading-relaxed">
          Coordinemos una evaluación inicial de su situación contable y tributaria. Claudio Oyarzún atenderá personalmente su requerimiento.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-bold text-slate-900 bg-white hover:bg-slate-100 rounded-xl transition-all shadow-md active:scale-95"
          >
            <MessageCircle className="w-5 h-5 text-emerald-600 fill-emerald-600/30" />
            <span>Conversar por WhatsApp</span>
          </a>
        </div>

        {/* Contact details strip */}
        <div className="pt-10 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-slate-400">
          <div className="flex items-center justify-center gap-2">
            <Clock className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Lunes a Viernes · 08:30 a 18:30 hrs</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Mail className="w-4 h-4 text-slate-400 shrink-0" />
            <span>{CONTACT_EMAIL}</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{OFFICE_LOCATION}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
