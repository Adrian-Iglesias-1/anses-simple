import { Calendar, MapPin, TrendingUp, FileText } from 'lucide-react';

const benefits = [
  {
    icon: Calendar,
    title: '¿Cuándo cobro?',
    description: 'Descubrí la fecha de cobro de tu jubilación, pensión o asignación según tu DNI.',
    color: 'bg-blue-100 text-blue-600',
    href: '#consulta',
  },
  {
    icon: MapPin,
    title: '¿Dónde cobro?',
    description: 'Consultá en qué banco y sucursal tenés habilitado el cobro de tu beneficio.',
    color: 'bg-green-100 text-green-600',
    href: '#donde',
  },
  {
    icon: TrendingUp,
    title: '¿Cuánto cobro?',
    description: 'Enterate los montos actualizados, aumentos y nuevas escalas de haberes.',
    color: 'bg-amber-100 text-amber-600',
    href: '#faq',
  },
  {
    icon: FileText,
    title: '¿Cómo reclamo?',
    description: 'Aprendé los pasos para hacer reclamos y trámites ante ANSES.',
    color: 'bg-purple-100 text-purple-600',
    href: '#faq',
  },
];

export default function Benefits() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--anses-primary)] mb-4">
            ¿Qué podés consultar?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Toda la información sobre tus beneficios de ANSES en un solo lugar, 
            explicada de forma simple.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(benefit.href)}
              className="group text-left bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-[var(--anses-primary)] hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className={`w-16 h-16 ${benefit.color} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                <benefit.icon className="w-8 h-8" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-[var(--anses-primary)] mb-3 group-hover:text-[var(--anses-secondary)] transition-colors">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-senior leading-relaxed">
                {benefit.description}
              </p>

              {/* Arrow indicator */}
              <div className="mt-4 flex items-center gap-2 text-[var(--anses-secondary)] font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Ver más</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
