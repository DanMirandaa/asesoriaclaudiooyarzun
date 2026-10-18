import React from 'react';
import { Calculator, FileText, Users, Building, Check, ArrowUpRight } from 'lucide-react';
import { SERVICES_SUMMARY, createWhatsAppUrl } from '../data/landingData';

export const ServicesSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Calculator':
        return <Calculator className="w-5 h-5 text-amber-700" />;
      case 'FileText':
        return <FileText className="w-5 h-5 text-blue-700" />;
      case 'Users':
        return <Users className="w-5 h-5 text-purple-700" />;
      case 'Building':
        return <Building className="w-5 h-5 text-emerald-700" />;
      default:
        return <Calculator className="w-5 h-5 text-slate-800" />;
    }
  };

  return (
    <section id="servicios" className="py-16 sm:py-24 bg-slate-50/80 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-700 mb-2">
            <span>Servicios Profesionales</span>
            <span aria-hidden="true">·</span>
            <span>Área Contable y Tributaria</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight [text-wrap:balance]">
            Cobertura completa para las necesidades de su empresa
          </h2>
          <p className="mt-3 text-base text-slate-600 font-normal">
            Soluciones integrales de auditoría, tributación y gestión de personal ejecutadas bajo la normativa vigente del SII y la Dirección del Trabajo.
          </p>
        </div>

        {/* 4 Clean, Elegant Cards with micro-interactions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES_SUMMARY.map((service) => {
            const serviceWaUrl = createWhatsAppUrl(
              `Hola Claudio, me interesa consultar detalles sobre el servicio de "${service.title}" para mi empresa.`
            );

            return (
              <div
                key={service.id}
                className="group p-8 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md hover:border-slate-300 hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-xs font-bold text-slate-400 tracking-wider">
                      {service.number}.
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-colors">
                      {getIcon(service.iconName)}
                    </div>
                  </div>

                  <span className="text-[11px] font-semibold text-amber-800 uppercase tracking-wider block mb-1">
                    {service.tagline}
                  </span>

                  <h3 className="text-xl font-bold text-slate-900 mb-2.5 group-hover:text-amber-900 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                    {service.description}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-slate-100">
                    <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                      Alcance del servicio:
                    </p>
                    <ul className="space-y-2">
                      {service.included.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 stroke-[2.5]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-medium">
                    Atención personalizada
                  </span>
                  <a
                    href={serviceWaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-slate-800 hover:text-emerald-700 flex items-center gap-1 transition-colors"
                  >
                    <span>Consultar por este servicio</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
