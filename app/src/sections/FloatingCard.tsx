import { useState, useEffect } from 'react';
import { Calendar, X, TrendingUp, MapPin } from 'lucide-react';

export default function FloatingCard() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Mostrar la tarjeta después de scrollear 300px
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed right-4 top-24 z-40 transition-all duration-500 ${
        isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
      }`}
    >
      {isMinimized ? (
        // Versión minimizada - botón circular
        <button
          onClick={() => setIsMinimized(false)}
          className="w-14 h-14 bg-[var(--anses-primary)]/90 backdrop-blur-md rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition-transform border border-white/30"
          title="Ver próximo cobro"
        >
          <Calendar className="w-6 h-6 text-white" />
        </button>
      ) : (
        // Versión completa - tarjeta translúcida
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/50 p-5 w-72 relative overflow-hidden">
          {/* Fondo decorativo sutil */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100/50 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-amber-100/30 rounded-full blur-xl translate-y-1/2 -translate-x-1/2" />
          
          {/* Botón cerrar/minimizar */}
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

          {/* Contenido */}
          <div className="relative z-10">
            {/* Header */}
            <div className="flex items-center gap-3 mb-4 pr-12">
              <div className="w-10 h-10 bg-[var(--anses-primary)]/90 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <Calendar className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-[var(--anses-primary)] text-sm">
                  Próximo cobro
                </h4>
                <p className="text-xs text-gray-500">Jubilación</p>
              </div>
            </div>

            {/* Fecha */}
            <div className="bg-gradient-to-r from-blue-50/80 to-blue-100/50 backdrop-blur-sm rounded-xl p-3 mb-3 border border-blue-100/50">
              <p className="text-xs text-gray-500 mb-1">Fecha estimada</p>
              <p className="text-xl font-bold text-[var(--anses-primary)]">
                3 al 7 de marzo
              </p>
            </div>

            {/* Info adicional */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-500 flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  Banco
                </span>
                <span className="font-medium text-[var(--anses-primary)]">Nación</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-500 flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" />
                  Monto aprox.
                </span>
                <span className="font-medium text-[var(--anses-primary)]">$285.000</span>
              </div>
            </div>

            {/* Link a consulta */}
            <a
              href="#consulta"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#consulta')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="mt-3 w-full py-2 bg-[var(--anses-primary)]/10 hover:bg-[var(--anses-primary)]/20 text-[var(--anses-primary)] text-xs font-medium rounded-lg text-center block transition-colors"
            >
              Consultar mi fecha →
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
