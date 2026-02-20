import { useState } from 'react';
import { Users, Heart, TrendingUp, ArrowRight, ExternalLink } from 'lucide-react';
import { infoAdicional, linksUtiles } from '@/data/anses-data';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface InfoCard {
  icon: typeof Users;
  title: string;
  description: string;
  color: string;
  contentKey: keyof typeof infoAdicional;
}

const infoCards: InfoCard[] = [
  {
    icon: Users,
    title: 'Calendario de Jubilaciones',
    description: 'Consultá las fechas de cobro para jubilaciones, pensiones y PUAM.',
    color: 'bg-blue-100 text-blue-600',
    contentKey: 'montos',
  },
  {
    icon: Heart,
    title: 'Asignaciones Familiares',
    description: 'Fechas de pago de AUH, asignación por embarazo y otras asignaciones.',
    color: 'bg-pink-100 text-pink-600',
    contentKey: 'montos',
  },
  {
    icon: TrendingUp,
    title: 'Montos Actualizados',
    description: 'Enterate de los últimos aumentos y nuevas escalas de haberes.',
    color: 'bg-green-100 text-green-600',
    contentKey: 'montos',
  },
];

export default function InfoCards() {
  const [selectedCard, setSelectedCard] = useState<InfoCard | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--anses-primary)] mb-4">
            Información importante
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Consejos útiles para el cobro de tus beneficios de ANSES.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {infoCards.map((card, index) => (
            <button
              key={index}
              onClick={() => setSelectedCard(card)}
              className="group text-left bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-[var(--anses-primary)] hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className={`w-14 h-14 ${card.color} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                <card.icon className="w-7 h-7" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-[var(--anses-primary)] mb-3 group-hover:text-[var(--anses-secondary)] transition-colors">
                {card.title}
              </h3>
              <p className="text-gray-600 text-senior leading-relaxed mb-4">
                {card.description}
              </p>

              {/* Link indicator */}
              <div className="flex items-center gap-2 text-[var(--anses-secondary)] font-medium">
                <span>Ver información</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          ))}
        </div>

        {/* Additional Info Boxes */}
        <div className="grid sm:grid-cols-2 gap-6 mt-10">
          {/* No cobré */}
          <div className="bg-red-50 rounded-2xl p-6 border-l-4 border-red-400">
            <h3 className="text-xl font-bold text-red-800 mb-3">
              ¿Qué hacer si no cobré?
            </h3>
            <p className="text-red-700 text-senior mb-4">
              Si no pudiste cobrar tu beneficio, te explicamos los pasos a seguir 
              para resolver el problema.
            </p>
            <button
              onClick={() => setSelectedCard({
                icon: Users,
                title: '¿Qué hacer si no cobré?',
                description: '',
                color: 'bg-red-100 text-red-600',
                contentKey: 'noCobre',
              })}
              className="text-red-700 font-semibold hover:underline flex items-center gap-2"
            >
              Ver pasos
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Cambiar banco */}
          <div className="bg-blue-50 rounded-2xl p-6 border-l-4 border-blue-400">
            <h3 className="text-xl font-bold text-blue-800 mb-3">
              ¿Puedo cambiar el banco?
            </h3>
            <p className="text-blue-700 text-senior mb-4">
              Sí, podés cambiar el lugar de cobro. Te explicamos cómo hacerlo 
              paso a paso.
            </p>
            <button
              onClick={() => setSelectedCard({
                icon: Users,
                title: '¿Puedo cambiar el banco donde cobro?',
                description: '',
                color: 'bg-blue-100 text-blue-600',
                contentKey: 'cambiarBanco',
              })}
              className="text-blue-700 font-semibold hover:underline flex items-center gap-2"
            >
              Ver cómo cambiar
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Aguinaldo */}
          <div className="bg-amber-50 rounded-2xl p-6 border-l-4 border-amber-400">
            <h3 className="text-xl font-bold text-amber-800 mb-3">
              ¿Cuándo se paga el aguinaldo?
            </h3>
            <p className="text-amber-700 text-senior mb-4">
              El aguinaldo se paga en dos cuotas. Conocé las fechas y cómo se calcula.
            </p>
            <button
              onClick={() => setSelectedCard({
                icon: Users,
                title: '¿Cuándo se paga el aguinaldo?',
                description: '',
                color: 'bg-amber-100 text-amber-600',
                contentKey: 'aguinaldo',
              })}
              className="text-amber-700 font-semibold hover:underline flex items-center gap-2"
            >
              Ver fechas
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Contacto */}
          <div className="bg-green-50 rounded-2xl p-6 border-l-4 border-green-400">
            <h3 className="text-xl font-bold text-green-800 mb-3">
              ¿Necesitás ayuda?
            </h3>
            <p className="text-green-700 text-senior mb-4">
              Si tenés dudas, podés contactar directamente a ANSES llamando al 130.
            </p>
            <a
              href="tel:130"
              className="text-green-700 font-semibold hover:underline flex items-center gap-2"
            >
              Llamar al 130
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Publicidad en bloque - infoCard */}
        <div className="mt-10">
          <ins
            className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-3494072602842969"
            data-ad-slot="7974096734"
            data-ad-format="auto"
            data-full-width-responsive="true"
          />
        </div>
      </div>

      {/* Info Dialog */}
      <Dialog open={!!selectedCard} onOpenChange={() => setSelectedCard(null)}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-[var(--anses-primary)]">
              {selectedCard?.title}
            </DialogTitle>
          </DialogHeader>
          
          {selectedCard && (
            <div className="mt-4">
              <div className="prose prose-lg max-w-none">
                <div className="bg-[var(--anses-light)] rounded-xl p-6 whitespace-pre-line text-gray-700 text-senior leading-relaxed">
                  {infoAdicional[selectedCard.contentKey].contenido}
                </div>
              </div>
              
              <div className="mt-6 flex justify-end">
                <a
                  href={linksUtiles.miAnses}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary-big flex items-center gap-2"
                >
                  <ExternalLink className="w-5 h-5" />
                  Ir a Mi ANSES
                </a>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
