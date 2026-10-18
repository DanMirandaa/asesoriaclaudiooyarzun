import React from 'react';
import { ArrowRight, CheckCircle2, FileSearch, ShieldCheck, TrendingUp } from 'lucide-react';
import { PROCESS_STEPS, createWhatsAppUrl } from '../data/landingData';

export const ProcessSection: React.FC = () => {
  const waUrl = createWhatsAppUrl(
    'Hola Claudio, me gustaría solicitar el diagnóstico inicial gratuito para evaluar la contabilidad de mi empresa.'
  );

  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <FileSearch className="w-6 h-6 text-amber-700" />;
      case 1:
        return <ShieldCheck className="w-6 h-6 text-blue-700" />;
      case 2:
        return <TrendingUp className="w-6 h-6 text-emerald-700" />;
      default:
        return <CheckCircle2 className="w-6 h-6 text-slate-800" />;
    }
  };

  return (
    <section id="metodologia" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-700 mb-2">
            <span>Metodología de Trabajo</span>
            <span aria-hidden="true">·</span>
            <span>Paso a Paso</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight [text-wrap:balance]">
            Un proceso de transición claro, seguro y sin traumatismos operativos.
          </h2>
          <p className="mt-3 text-base text-slate-600 font-normal">
            Iniciar o traspasar la contabilidad de su negocio hacia nuestra oficina es un proceso ordenado de 3 etapas diseñado para no interrumpir su facturación.
          </p>
        </div>

        {/* 3 Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={step.step}
              className="relative p-8 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-2xs hover:border-slate-300 hover:bg-white hover:shadow-xs transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="font-mono text-2xl font-black text-slate-900">
                    {step.step}.
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200/80 flex items-center justify-center shadow-xs">
                    {getStepIcon(idx)}
                  </div>
                </div>

                <span className="inline-block px-2.5 py-1 rounded-md text-[11px] font-semibold bg-white border border-slate-200 text-slate-700 mb-2 shadow-2xs">
                  {step.badge}
                </span>

                <h3 className="text-lg font-bold text-slate-900 mb-1">
                  {step.title}
                </h3>
                <p className="text-xs font-semibold text-amber-800 mb-3">
                  {step.subtitle}
                </p>

                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200/70 text-xs font-medium text-slate-500 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Supervisado por Claudio Oyarzún</span>
              </div>
            </div>
          ))}
        </div>

        {/* Diagnostic Action Strip */}
        <div className="mt-12 p-6 sm:p-7 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-bold">
              ¿Desea conocer el estado tributario de su empresa ante el SII?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 font-normal">
              Realizamos una auditoría preliminar sin costo para verificar declaraciones pendientes o posibles diferencias.
            </p>
          </div>

          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold text-slate-900 bg-white hover:bg-slate-100 rounded-xl transition-all shadow-xs whitespace-nowrap shrink-0"
          >
            <span>Solicitar Diagnóstico Sin Costo</span>
            <ArrowRight className="w-4 h-4 text-slate-700" />
          </a>
        </div>
      </div>
    </section>
  );
};
