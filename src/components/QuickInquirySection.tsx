import React, { useState } from 'react';
import { MessageCircle, Check, ArrowRight, Sparkles } from 'lucide-react';
import { QUICK_INQUIRY_TOPICS, createWhatsAppUrl } from '../data/landingData';

export const QuickInquirySection: React.FC = () => {
  const [selectedTopicId, setSelectedTopicId] = useState(QUICK_INQUIRY_TOPICS[0].id);

  const selectedTopic = QUICK_INQUIRY_TOPICS.find((t) => t.id === selectedTopicId) || QUICK_INQUIRY_TOPICS[0];
  const waUrl = createWhatsAppUrl(selectedTopic.message);

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Contacto Rápido sin Formularios Extensos</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight [text-wrap:balance]">
            ¿Cuál es la situación actual de su empresa?
          </h2>
          <p className="mt-2 text-sm text-slate-600 font-normal">
            Seleccione su caso para generar un mensaje personalizado y conversar directamente con Claudio Oyarzún.
          </p>
        </div>

        {/* 4 Interactive Scenario Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
          {QUICK_INQUIRY_TOPICS.map((topic) => {
            const isSelected = selectedTopicId === topic.id;
            return (
              <button
                key={topic.id}
                type="button"
                onClick={() => setSelectedTopicId(topic.id)}
                className={`p-4 text-left rounded-xl border text-sm transition-all duration-200 flex items-center justify-between cursor-pointer ${
                  isSelected
                    ? 'border-slate-900 bg-slate-900 text-white shadow-xs font-semibold'
                    : 'border-slate-200 bg-slate-50/70 hover:border-slate-300 hover:bg-white text-slate-700 font-normal'
                }`}
              >
                <span>{topic.label}</span>
                {isSelected ? (
                  <Check className="w-4 h-4 text-amber-400 shrink-0 ml-2" />
                ) : (
                  <div className="w-4 h-4 rounded-full border border-slate-300 shrink-0 ml-2" />
                )}
              </button>
            );
          })}
        </div>

        {/* Generated Message Preview Card */}
        <div className="p-6 sm:p-7 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-left w-full sm:w-auto">
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Mensaje preconfigurado para WhatsApp:
            </p>
            <p className="text-xs sm:text-sm text-slate-700 italic bg-white p-3 rounded-lg border border-slate-200/70 font-mono">
              &ldquo;{selectedTopic.message}&rdquo;
            </p>
          </div>

          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition-all shadow-xs active:scale-[0.98] whitespace-nowrap shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Enviar Consulta en WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
