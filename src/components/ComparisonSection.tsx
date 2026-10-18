import React from 'react';
import { Check, X, Shield, Star } from 'lucide-react';
import { COMPARISON_ITEMS } from '../data/landingData';

export const ComparisonSection: React.FC = () => {
  return (
    <section id="diferencial" className="py-16 sm:py-24 bg-slate-50/70 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-700 mb-2">
            <span>Diferenciación Real</span>
            <span aria-hidden="true">·</span>
            <span>Estándar Profesional</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight [text-wrap:balance]">
            La diferencia de trabajar directamente con Claudio Oyarzún
          </h2>
          <p className="mt-3 text-base text-slate-600 font-normal">
            Compromiso ético, respuesta oportuna y una gestión pensada para cuidar la rentabilidad y el patrimonio de su negocio.
          </p>
        </div>

        {/* Comparison Table / Grid */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
          {/* Header row */}
          <div className="grid grid-cols-1 md:grid-cols-12 border-b border-slate-200 bg-slate-100/60 text-xs font-bold uppercase tracking-wider text-slate-700">
            <div className="p-4 md:col-span-4 text-slate-500">
              Aspecto Clave
            </div>
            <div className="p-4 md:col-span-4 text-slate-500 border-t md:border-t-0 md:border-l border-slate-200">
              Servicios Contables Tradicionales
            </div>
            <div className="p-4 md:col-span-4 text-slate-900 bg-amber-50/50 border-t md:border-t-0 md:border-l border-slate-200 flex items-center gap-1.5 font-extrabold text-amber-900">
              <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
              <span>Asesoría Claudio Oyarzún</span>
            </div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-slate-100 text-sm">
            {COMPARISON_ITEMS.map((item, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 md:grid-cols-12 hover:bg-slate-50/50 transition-colors"
              >
                <div className="p-4 md:col-span-4 font-semibold text-slate-900 flex items-center gap-2">
                  <Shield className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>{item.criterion}</span>
                </div>

                <div className="p-4 md:col-span-4 text-slate-500 border-t md:border-t-0 md:border-l border-slate-100 flex items-start gap-2.5">
                  <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm">{item.traditional}</span>
                </div>

                <div className="p-4 md:col-span-4 font-medium text-slate-900 bg-amber-50/20 border-t md:border-t-0 md:border-l border-slate-100 flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5 stroke-[2.5]" />
                  <span className="text-xs sm:text-sm text-slate-800 font-semibold">{item.oyarzun}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
