import { useState, useEffect } from 'react';
import { Calendar, X, TrendingUp, MapPin } from 'lucide-react';
import { useConsulta } from '@/context/ConsultaContext';
import { linksUtiles } from '@/data/anses-data';

const MESES = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

function formatearFechaCobro(inicio: number, fin: number): string {
  const mes = new Date().getMonth();
  const nombreMes = MESES[mes];
  return `${inicio} al ${fin} de ${nombreMes}`;
}

export default function FloatingCard() {
  const { consultaResult } = useConsulta();
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed right-4 bottom-4 z-40 transition-all duration-500 ${
        isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
      }`}
    >
      {isMinimized ? (
        <button
          onClick={() => setIsMinimized(false)}
          className="w-14 h-14 bg-[var(--anses-primary)]/90 backdrop-blur-md rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition-transform border border-white/30"
          title="Ver próximo cobro"
        >
          <Calendar className="w-6 h-6 text-white" />
        </button>
      ) : (
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/50 p-5 w-72 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100/50 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-amber-100/30 rounded-full blur-xl translate-y-1/2 -translate-x-1/2" />

          <div className="absolute top-2 right-2 flex gap-1">
            <button
              onClick={() => setIsMinimized(true)}
              className="w-7 h-7 bg-gray-100/80 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
              title="Minimizar"
            >
              <span className="text-gray-500 text-xs">−</span>
            </button>
            <button
              onClick={() => setIsVisible(false)}
              className="w-7 h-7 bg-gray-100/80 hover:bg-red-100 rounded-full flex items-center justify-center transition-colors"
              title="Cerrar"
            >
              <X className="w-3 h-3 text-gray-500" />
            </button>
          </div>

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4 pr-12">
              <div className="w-10 h-10 bg-[var(--anses-primary)]/90 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <Calendar className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-[var(--anses-primary)] text-sm">
                  Próximo cobro
                </h4>
                <p className="text-xs text-gray-500">
                  {consultaResult ? consultaResult.nombreBeneficio : 'Consultá según tu DNI'}
                </p>
              </div>
            </div>

            {consultaResult ? (
              <>
                <div className="bg-gradient-to-r from-blue-50/80 to-blue-100/50 backdrop-blur-sm rounded-xl p-3 mb-3 border border-blue-100/50">
                  <p className="text-xs text-gray-500 mb-1">Fecha estimada</p>
                  <p className="text-xl font-bold text-[var(--anses-primary)]">
                    {formatearFechaCobro(consultaResult.fechaCobro.inicio, consultaResult.fechaCobro.fin)}
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-500 flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      Banco
                    </span>
                    <a
                      href={linksUtiles.miAnses}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-[var(--anses-secondary)] hover:underline"
                    >
                      Ver en Mi ANSES
                    </a>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-500 flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      Monto aprox.
                    </span>
                    <a
                      href={linksUtiles.miAnses}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-[var(--anses-secondary)] hover:underline"
                    >
                      Ver en Mi ANSES
                    </a>
                  </div>
                </div>
              </>
            ) : (
              <div className="bg-gradient-to-r from-blue-50/80 to-blue-100/50 backdrop-blur-sm rounded-xl p-3 mb-3 border border-blue-100/50">
                <p className="text-sm text-gray-600">
                  Seleccioná tu beneficio y el último número de tu DNI para ver tu fecha estimada de cobro.
                </p>
              </div>
            )}

            <a
              href="#consulta"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#consulta')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="mt-3 w-full py-2 bg-[var(--anses-primary)]/10 hover:bg-[var(--anses-primary)]/20 text-[var(--anses-primary)] text-xs font-medium rounded-lg text-center block transition-colors"
            >
              {consultaResult ? 'Consultar otra fecha →' : 'Consultar mi fecha →'}
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
