import React from 'react';
import { MessageCircle } from 'lucide-react';
import { createWhatsAppUrl, DEFAULT_WA_MESSAGE, WHATSAPP_DISPLAY } from '../data/landingData';

export const FloatingWhatsApp: React.FC = () => {
  const waUrl = createWhatsAppUrl(DEFAULT_WA_MESSAGE);

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Contactar a Claudio Oyarzún por WhatsApp al ${WHATSAPP_DISPLAY}`}
        className="group relative flex items-center justify-center w-13 h-13 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-300"
      >
        <MessageCircle className="w-6 h-6 fill-white text-emerald-600" />
      </a>
    </div>
  );
};
