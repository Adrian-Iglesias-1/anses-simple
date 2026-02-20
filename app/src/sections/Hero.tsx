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
          <div className="hidden lg:flex justify-end items-center pr-8">
            <div className="relative">
              {/* Main card - Much más grande y centrada */}
              <div className="bg-white/80 backdrop-blur-xl rounded-xl shadow-lg p-6 w-80 border border-white/60 relative z-10 mx-auto">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-[var(--anses-primary)] rounded-lg flex items-center justify-center">
                    <Calendar className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[var(--anses-primary)]">Próximo cobro</h3>
                  </div>
                </div>
                
                <div className="bg-blue-50/80 rounded-lg p-3 mb-3">
                  <p className="text-sm text-gray-600 mb-1">Fecha</p>
                  <p className="text-lg font-bold text-[var(--anses-primary)]">3 al 7 de marzo</p>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">DNI en</span>
                  <span className="font-bold text-[var(--anses-primary)] bg-blue-100 px-2 py-0.5 rounded-full">5</span>
                </div>
              </div>

              {/* Floating card 1 - Banco - Arriba derecha visible */}
              <div className="absolute -top-12 right-4 bg-white/90 backdrop-blur-xl rounded-lg shadow-lg p-3 border border-white/70 animate-float">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 bg-green-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-3.5 h-3.5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Banco</p>
                    <p className="font-semibold text-sm text-[var(--anses-primary)]">Nación</p>
                  </div>
                </div>
              </div>

              {/* Floating card 2 - Monto - Abajo izquierda visible */}
              <div className="absolute -bottom-12 left-4 bg-white/90 backdrop-blur-xl rounded-lg shadow-lg p-3 border border-white/70 animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 bg-amber-100 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-3.5 h-3.5 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Monto</p>
                    <p className="font-semibold text-sm text-[var(--anses-primary)]">$285.000</p>
                  </div>
                </div>
              </div>

              {/* Floating card 3 - Al día - Derecha visible */}
              <div className="absolute top-1/2 -translate-y-1/2 -right-20 bg-white/90 backdrop-blur-xl rounded-lg shadow-md px-3 py-2 border border-white/70 animate-float" style={{ animationDelay: '2s' }}>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs font-medium text-gray-700">Al día</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
