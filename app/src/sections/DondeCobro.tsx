import { MapPin, ExternalLink, Building2, CreditCard, Landmark } from 'lucide-react';
import { bancosComunes, linksUtiles } from '@/data/anses-data';

const pasos = [
  {
    numero: 1,
    titulo: 'Entrá a Mi ANSES',
    descripcion: 'Ingresá a www.anses.gob.ar y hacé clic en "Mi ANSES".',
    icono: ExternalLink,
  },
  {
    numero: 2,
    titulo: 'Ingresá con tu DNI y clave',
    descripcion: 'Usá tu número de DNI y tu clave de seguridad social. Si no tenés clave, podés crearla en el mismo sitio.',
    icono: CreditCard,
  },
  {
    numero: 3,
    titulo: 'Buscá "Cobros" o "Dónde cobro"',
    descripcion: 'En el menú principal, buscá la opción relacionada con tus cobros.',
    icono: MapPin,
  },
  {
    numero: 4,
    titulo: 'Mirá la información',
    descripcion: 'Allí vas a ver el banco, la sucursal y la dirección exacta donde tenés habilitado el cobro.',
    icono: Building2,
  },
];

export default function DondeCobro() {
  return (
    <section id="donde" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-2xl mb-6">
            <MapPin className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--anses-primary)] mb-4">
            ¿Dónde cobro ANSES?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Aprendé cómo consultar el banco y la sucursal donde tenés habilitado el cobro de tu beneficio.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left Column - Steps */}
          <div>
            <h3 className="text-2xl font-bold text-[var(--anses-primary)] mb-6">
              Pasos para consultar
            </h3>
            
            <div className="space-y-4">
              {pasos.map((paso, index) => (
                <div
                  key={index}
                  className="flex gap-4 bg-white rounded-2xl p-5 border-2 border-gray-100 hover:border-green-200 hover:shadow-lg transition-all"
                >
                  {/* Step Number */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[var(--anses-primary)] rounded-xl flex items-center justify-center">
                      <span className="text-xl font-bold text-white">{paso.numero}</span>
                    </div>
                  </div>
                  
                  {/* Step Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <paso.icono className="w-5 h-5 text-[var(--anses-secondary)]" />
                      <h4 className="text-lg font-bold text-[var(--anses-primary)]">
                        {paso.titulo}
                      </h4>
                    </div>
                    <p className="text-gray-600 text-senior leading-relaxed">
                      {paso.descripcion}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href={linksUtiles.miAnses}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 w-full btn-primary-big flex items-center justify-center gap-3"
            >
              <ExternalLink className="w-5 h-5" />
              Ir a Mi ANSES
            </a>
          </div>

          {/* Right Column - Info */}
          <div className="space-y-6">
            {/* What you'll see */}
            <div className="bg-[var(--anses-light)] rounded-2xl p-6">
              <h3 className="text-xl font-bold text-[var(--anses-primary)] mb-4 flex items-center gap-2">
                <Building2 className="w-6 h-6" />
                ¿Qué información vas a ver?
              </h3>
              <ul className="space-y-3">
                {[
                  'Nombre del banco donde cobrás',
                  'Número de sucursal',
                  'Dirección completa',
                  'Fecha de habilitación del cobro',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <span className="text-gray-700 text-senior">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Common Banks */}
            <div className="bg-white rounded-2xl p-6 border-2 border-gray-100">
              <h3 className="text-xl font-bold text-[var(--anses-primary)] mb-4 flex items-center gap-2">
                <Landmark className="w-6 h-6" />
                Bancos más comunes
              </h3>
              <div className="flex flex-wrap gap-2">
                {bancosComunes.map((banco, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                  >
                    {banco}
                  </span>
                ))}
              </div>
            </div>

            {/* Important Note */}
            <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-xl p-5">
              <h4 className="font-bold text-amber-800 mb-2">Importante</h4>
              <p className="text-amber-700 text-senior">
                Si querés cambiar el banco donde cobrás, podés hacerlo desde Mi ANSES 
                o acercándote a una oficina de ANSES. El cambio suele estar disponible 
                dentro de 30 días.
              </p>
            </div>

            {/* Ad Placeholder */}
            <div className="ad-placeholder">
              <span>Espacio publicitario</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
