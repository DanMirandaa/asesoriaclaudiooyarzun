import React from 'react';
import { MessageCircle, ArrowRight, ShieldCheck, CheckCircle2, Award, Clock, FileCheck } from 'lucide-react';
import { createWhatsAppUrl, DEFAULT_WA_MESSAGE } from '../data/landingData';
import claudioPortrait from '../assets/images/claudio_oyarzun_portrait_1792118724512.jpg';

export const Hero: React.FC = () => {
  const waUrl = createWhatsAppUrl(DEFAULT_WA_MESSAGE);

  return (
    <section className="relative pt-12 pb-16 lg:pt-20 lg:pb-24 bg-gradient-to-b from-white via-slate-50 to-slate-100/70 border-b border-slate-200 overflow-hidden">
      {/* Subtle architectural dot grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Value Proposition (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Top unboxed kicker */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-lg bg-amber-50/80 border border-amber-200/70 text-amber-900 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-amber-600 animate-pulse" />
              <span>Auditoría & Asesoría Tributaria Integral en Chile</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-[3.25rem] font-extrabold text-slate-900 leading-[1.12] tracking-tight [text-wrap:balance]">
              Solidez contable y certeza tributaria para proteger el patrimonio de su empresa.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-xl">
              Contabilidad mensual fidedigna, declaraciones F29 y Renta F22 sin multas, remuneraciones y orden legal ante el SII. Asesoría directa con el Contador Auditor <strong className="font-semibold text-slate-900">Claudio Oyarzún</strong>, con más de 15 años de trayectoria.
            </p>

            {/* Core commitments list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-sm text-slate-700">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 stroke-[2.5]" />
                <span>Presentación puntual de F29 (IVA y PPM)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 stroke-[2.5]" />
                <span>Balances y estados financieros actualizados</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 stroke-[2.5]" />
                <span>Atención directa con Claudio por WhatsApp</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 stroke-[2.5]" />
                <span>Planes a la medida según su facturación</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-3">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-slate-900 hover:bg-slate-800 active:scale-[0.98] rounded-xl shadow-md hover:shadow-lg transition-all whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400 fill-emerald-400" />
                <span>Conversar con Claudio Oyarzún</span>
                <ArrowRight className="w-4 h-4 ml-0.5 text-slate-400" />
              </a>

              <a
                href="#metodologia"
                className="inline-flex items-center justify-center px-5 py-3.5 text-sm sm:text-base font-medium text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 hover:border-slate-400 rounded-xl transition-all shadow-2xs whitespace-nowrap"
              >
                <span>Cómo Trabajamos</span>
              </a>
            </div>

            {/* Trust disclaimer */}
            <div className="flex items-center gap-2 pt-2 text-xs text-slate-500">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Diagnóstico inicial sin costo de su situación tributaria en el portal del SII</span>
            </div>
          </div>

          {/* Right Column: Executive Portrait with High-End Detailing (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative max-w-md mx-auto">
              {/* Outer decorative glow ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-amber-500/20 via-slate-300 to-emerald-500/20 rounded-3xl blur-xs -z-10" />

              <div className="relative rounded-2xl overflow-hidden border border-slate-200/90 shadow-2xl bg-slate-900 group">
                <img
                  src={claudioPortrait}
                  alt="Claudio Oyarzún, Contador Auditor y Asesor Tributario"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src = '/images/claudio_oyarzun.jpg';
                  }}
                  className="w-full h-[400px] sm:h-[460px] object-cover object-top group-hover:scale-[1.01] transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none" />

                {/* Floating Glassmorphic Identity Card */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-white/10 text-white shadow-lg">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-1.5 text-amber-400 text-[11px] font-semibold uppercase tracking-wider mb-0.5">
                        <Award className="w-3.5 h-3.5" />
                        <span>Contador Auditor Colegiado</span>
                      </div>
                      <p className="text-base font-bold text-white leading-tight">
                        Claudio Oyarzún
                      </p>
                      <p className="text-xs text-slate-300 mt-0.5">
                        Consultor Tributario y Laboral
                      </p>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="inline-block px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                        Atención Directa
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width 3-Metric Strip with Refined Visual Polish */}
        <div className="mt-14 pt-8 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs flex items-center gap-4">
            <div className="w-11 h-11 rounded-lg bg-amber-50 border border-amber-200/80 flex items-center justify-center text-amber-700 shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xl font-bold text-slate-900 font-mono tabular-nums leading-tight">
                +15 Años
              </p>
              <p className="text-xs text-slate-500 mt-0.5">
                De trayectoria contable y tributaria en Chile
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs flex items-center gap-4">
            <div className="w-11 h-11 rounded-lg bg-emerald-50 border border-emerald-200/80 flex items-center justify-center text-emerald-700 shrink-0">
              <FileCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xl font-bold text-slate-900 font-mono tabular-nums leading-tight">
                100%
              </p>
              <p className="text-xs text-slate-500 mt-0.5">
                Puntualidad en declaraciones F29 y Previred
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs flex items-center gap-4">
            <div className="w-11 h-11 rounded-lg bg-blue-50 border border-blue-200/80 flex items-center justify-center text-blue-700 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xl font-bold text-slate-900 font-mono tabular-nums leading-tight">
                24 - 48 hrs
              </p>
              <p className="text-xs text-slate-500 mt-0.5">
                Diagnóstico inicial y revisión de situación en SII
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
