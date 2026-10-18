import React from 'react';
import { Star, Quote, Building2, MapPin, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/landingData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonios" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-700 mb-2">
            <span>Experiencia Comprobada</span>
            <span aria-hidden="true">·</span>
            <span>Clientes Satisfechos</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight [text-wrap:balance]">
            Empresas y profesionales que confían en nuestra gestión
          </h2>
          <p className="mt-3 text-base text-slate-600 font-normal">
            Conozca la experiencia de directores y fundadores que delegan su área contable y tributaria en Claudio Oyarzún.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              className="p-7 rounded-2xl bg-slate-50 border border-slate-200/90 flex flex-col justify-between shadow-2xs hover:shadow-xs hover:border-slate-300 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-slate-300" />
                </div>

                {/* Outcome badge */}
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white border border-slate-200/80 text-[11px] font-semibold text-slate-800 mb-4 shadow-2xs">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  <span>{t.outcome}</span>
                </div>

                <p className="text-sm text-slate-700 leading-relaxed font-normal mb-6 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/80 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-slate-900 text-amber-400 font-bold text-xs flex items-center justify-center shrink-0">
                  {t.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-sm text-slate-900 leading-tight truncate">
                    {t.author}
                  </p>
                  <p className="text-xs text-slate-500 font-medium truncate">
                    {t.role}
                  </p>
                  <div className="flex items-center gap-2 mt-1 text-[11px] text-slate-500">
                    <span className="truncate">{t.company}</span>
                    <span aria-hidden="true">·</span>
                    <span className="shrink-0">{t.city}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
