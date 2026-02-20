import { useState } from 'react';
import { Calendar, Check, AlertCircle, ExternalLink } from 'lucide-react';
import { beneficios, calendarioJubilaciones, calendarioAUH, linksUtiles } from '@/data/anses-data';
import type { TipoBeneficio } from '@/data/anses-data';
import { useConsulta } from '@/context/ConsultaContext';

export default function PaymentTool() {
  const { setConsultaResult } = useConsulta();
  const [tipoBeneficio, setTipoBeneficio] = useState<TipoBeneficio | ''>('');
  const [dniNumber, setDniNumber] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const getFechaCobro = () => {
    if (dniNumber === null) return null;

    if (tipoBeneficio === 'jubilacion' || tipoBeneficio === 'pension' || tipoBeneficio === 'puam') {
      return calendarioJubilaciones[dniNumber];
    } else if (tipoBeneficio === 'auh' || tipoBeneficio === 'asignacion-embarazo') {
      return calendarioAUH[dniNumber];
    } else {
      // Para PROGRESAR y otros, usamos calendario similar a AUH
      return calendarioAUH[dniNumber];
    }
  };

  const getNombreBeneficio = () => {
    const beneficio = beneficios.find(b => b.id === tipoBeneficio);
    return beneficio?.nombre || 'tu beneficio';
  };

  const handleConsultar = () => {
    if (tipoBeneficio && dniNumber !== null) {
      setShowResult(true);
      const fecha = getFechaCobro();
      const nombre = getNombreBeneficio();
      if (fecha && nombre) {
        setConsultaResult({
          tipoBeneficio,
          dniNumber,
          fechaCobro: fecha,
          nombreBeneficio: nombre,
        });
      }
    }
  };

  const fechaCobro = getFechaCobro();

  return (
    <section id="consulta" className="py-20 section-light">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[var(--anses-primary)] rounded-2xl mb-6">
            <Calendar className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--anses-primary)] mb-4">
            Consultá cuándo cobrás
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Seleccioná tu tipo de beneficio y el último número de tu DNI.
            Te mostramos la fecha estimada de cobro.
          </p>
        </div>

        {/* Tool Card */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="p-6 sm:p-10">
            {/* Step 1: Select Benefit Type */}
            <div className="mb-8">
              <label className="block text-lg font-semibold text-[var(--anses-primary)] mb-3">
                1. ¿Qué beneficio recibís?
              </label>
              <select
                value={tipoBeneficio}
                onChange={(e) => {
                  setTipoBeneficio(e.target.value as TipoBeneficio);
                  setShowResult(false);
                }}
                className="select-senior"
              >
                <option value="">Seleccioná tu beneficio...</option>
                {beneficios.map((beneficio) => (
                  <option key={beneficio.id} value={beneficio.id}>
                    {beneficio.nombre}
                  </option>
                ))}
              </select>
            </div>

            {/* Step 2: Select DNI Number */}
            {tipoBeneficio && (
              <div className="mb-8 animate-slide-up">
                <label className="block text-lg font-semibold text-[var(--anses-primary)] mb-3">
                  2. ¿Cuál es el último número de tu DNI?
                </label>
                <div className="grid grid-cols-5 sm:grid-cols-10 gap-2 sm:gap-3">
                  {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                    <button
                      key={num}
                      onClick={() => {
                        setDniNumber(num);
                        setShowResult(false);
                      }}
                      className={`dni-number ${dniNumber === num ? 'selected' : ''}`}
                    >
                      {dniNumber === num && (
                        <Check className="w-5 h-5" />
                      )}
                      {dniNumber !== num && num}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Consult Button */}
            {tipoBeneficio && dniNumber !== null && (
              <div className="animate-slide-up">
                <button
                  onClick={handleConsultar}
                  className="w-full btn-primary-big text-xl shadow-lg hover:shadow-xl"
                >
                  Ver cuándo cobro
                </button>
              </div>
            )}

            {/* Result */}
            {showResult && fechaCobro && (
              <div className="mt-8 animate-slide-up">
                <div className="bg-[var(--anses-light)] rounded-2xl p-6 border-2 border-blue-200">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Check className="w-6 h-6 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[var(--anses-primary)] mb-2">
                        Fecha estimada de cobro
                      </h3>
                      <p className="text-senior text-gray-700 mb-4">
                        Según el calendario de ANSES, los beneficiarios de{' '}
                        <span className="font-semibold">{getNombreBeneficio()}</span> con DNI 
                        terminado en <span className="font-bold text-[var(--anses-primary)] text-xl">{dniNumber}</span> cobran 
                        entre los días{' '}
                        <span className="font-bold text-[var(--anses-primary)] text-xl">
                          {fechaCobro.inicio} y {fechaCobro.fin}
                        </span>{' '}
                        de cada mes.
                      </p>
                      
                      <div className="bg-white rounded-xl p-4 border border-blue-100">
                        <div className="flex items-start gap-3">
                          <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-sm text-gray-600 mb-2">
                              <span className="font-semibold">Importante:</span> Las fechas son orientativas 
                              y pueden variar según el calendario oficial de ANSES.
                            </p>
                            <a
                              href={tipoBeneficio === 'jubilacion' || tipoBeneficio === 'pension' || tipoBeneficio === 'puam' 
                                ? linksUtiles.calendarioPagos 
                                : tipoBeneficio === 'progresar' 
                                ? linksUtiles.progresar 
                                : linksUtiles.miAnses}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-[var(--anses-secondary)] font-medium hover:underline"
                            >
                              {tipoBeneficio === 'jubilacion' || tipoBeneficio === 'pension' || tipoBeneficio === 'puam' 
                                ? 'Verificar fecha exacta en calendario oficial' 
                                : tipoBeneficio === 'progresar'
                                ? 'Verificar fecha exacta en PROGRESAR'
                                : 'Verificar fecha exacta en Mi ANSES'}
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Info */}
          <div className="bg-gray-50 px-6 sm:px-10 py-4 border-t border-gray-100">
            <p className="text-sm text-gray-500 text-center">
              Esta información es aproximada. Para datos exactos, consultá siempre{' '}
              <a
                href={tipoBeneficio === 'jubilacion' || tipoBeneficio === 'pension' || tipoBeneficio === 'puam' 
                  ? linksUtiles.calendarioPagos 
                  : tipoBeneficio === 'progresar' 
                  ? linksUtiles.progresar 
                  : linksUtiles.miAnses}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--anses-secondary)] hover:underline"
              >
                {tipoBeneficio === 'jubilacion' || tipoBeneficio === 'pension' || tipoBeneficio === 'puam' 
                  ? 'el calendario oficial de pagos' 
                  : tipoBeneficio === 'progresar'
                  ? 'PROGRESAR'
                  : 'Mi ANSES'}
              </a>
            </p>
          </div>
        </div>

        {/* AdSense - payment2 */}
        <div className="mt-8">
          <ins
            className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-3494072602842969"
            data-ad-slot="8323791961"
            data-ad-format="auto"
            data-full-width-responsive="true"
          />
        </div>
      </div>
    </section>
  );
}
