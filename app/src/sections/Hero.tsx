import { Calendar, MapPin, Users, TrendingUp } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--anses-light)] via-white to-blue-50" />
      
      {/* Floating blobs */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-100/50 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[var(--anses-light)] rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-blue-50 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-blue-100 rounded-full px-4 py-2 mb-6 shadow-sm">
              <Users className="w-5 h-5 text-[var(--anses-accent)]" />
              <span className="text-sm font-medium text-[var(--anses-primary)]">
                Más de 2 millones de consultas
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--anses-primary)] mb-6 leading-tight">
              Cuándo cobro{' '}
              <span className="text-[var(--anses-secondary)]">ANSES</span>{' '}
              según mi DNI
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Consultá las fechas de cobro de jubilaciones, pensiones y asignaciones.{' '}
              <span className="font-semibold text-[var(--anses-primary)]">
                Información clara, simple y gratuita.
              </span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <button
                onClick={() => scrollToSection('#consulta')}
                className="btn-primary-big flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all"
              >
                <Calendar className="w-6 h-6" />
                Ver calendario de pagos
              </button>
              <button
                onClick={() => scrollToSection('#donde')}
                className="btn-secondary-big flex items-center justify-center gap-3 hover:-translate-y-1 transition-all"
              >
                <MapPin className="w-6 h-6" />
                Consultar dónde cobro
              </button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span>Sin registración</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span>Sin pedir datos personales</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span>100% gratuito</span>
              </div>
            </div>
          </div>

          {/* Right Column - Visual with Glassmorphism Cards */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative">
              {/* Main card - Translucent with glass effect */}
              <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl p-8 w-80 border border-white/60 relative z-10 overflow-hidden">
                {/* Decorative background inside card */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-blue-200/30 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-amber-200/20 rounded-full blur-xl translate-y-1/2 -translate-x-1/2" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-[var(--anses-primary)]/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg">
                      <Calendar className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[var(--anses-primary)]">
                        Próximo cobro
                      </h3>
                      <p className="text-sm text-gray-500">Jubilación</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-blue-50/80 to-blue-100/50 backdrop-blur-sm rounded-xl p-4 border border-blue-100/50">
                      <p className="text-sm text-gray-600 mb-1">Fecha estimada</p>
                      <p className="text-2xl font-bold text-[var(--anses-primary)]">
                        3 al 7 de marzo
                      </p>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">DNI terminado en</span>
                      <span className="font-bold text-[var(--anses-primary)] bg-blue-100/80 backdrop-blur-sm px-3 py-1 rounded-full border border-blue-200/50">
                        5
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating card 1 - Bank - Translucent */}
              <div className="absolute -top-6 -right-6 bg-white/75 backdrop-blur-xl rounded-2xl shadow-xl p-4 border border-white/60 animate-float overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-transparent" />
                <div className="relative flex items-center gap-2">
                  <div className="w-10 h-10 bg-green-100/80 backdrop-blur-sm rounded-lg flex items-center justify-center border border-green-200/50">
                    <MapPin className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Banco</p>
                    <p className="font-semibold text-[var(--anses-primary)]">Nación</p>
                  </div>
                </div>
              </div>

              {/* Floating card 2 - Amount - Translucent */}
              <div className="absolute -bottom-4 -left-6 bg-white/75 backdrop-blur-xl rounded-2xl shadow-xl p-4 border border-white/60 animate-float overflow-hidden" style={{ animationDelay: '1s' }}>
                <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 to-transparent" />
                <div className="relative flex items-center gap-2">
                  <div className="w-10 h-10 bg-amber-100/80 backdrop-blur-sm rounded-lg flex items-center justify-center border border-amber-200/50">
                    <TrendingUp className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Monto aprox.</p>
                    <p className="font-semibold text-[var(--anses-primary)]">$285.000</p>
                  </div>
                </div>
              </div>

              {/* Floating card 3 - Extra info - Translucent */}
              <div className="absolute top-1/2 -right-12 bg-white/70 backdrop-blur-xl rounded-xl shadow-lg p-3 border border-white/50 animate-float" style={{ animationDelay: '2s' }}>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs font-medium text-gray-600">Al día</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
