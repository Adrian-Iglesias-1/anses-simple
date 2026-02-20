import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { faqs } from '@/data/anses-data';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 section-light">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-2xl mb-6">
            <HelpCircle className="w-8 h-8 text-purple-600" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--anses-primary)] mb-4">
            Preguntas frecuentes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Todo lo que necesitás saber sobre el cobro de beneficios de ANSES, 
            explicado de forma simple.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${index === 0 ? 'border-t-0' : ''}`}
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className="text-lg font-semibold text-[var(--anses-primary)] pr-4">
                  {faq.pregunta}
                </span>
                <div
                  className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                    openIndex === index
                      ? 'bg-[var(--anses-primary)] text-white'
                      : 'bg-gray-100 text-gray-500'
                  }`}
                >
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </div>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-6">
                  <div className="bg-[var(--anses-light)] rounded-xl p-5">
                    <p className="text-gray-700 text-senior leading-relaxed whitespace-pre-line">
                      {faq.respuesta}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Help */}
        <div className="mt-10 text-center">
          <p className="text-gray-600 mb-4">
            ¿No encontraste lo que buscabas?
          </p>
          <a
            href="https://www.anses.gob.ar/contacto"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[var(--anses-secondary)] font-semibold hover:underline"
          >
            Contactá directamente con ANSES
            <span>→</span>
          </a>
        </div>

        {/* Publicidad en bloque - faq */}
        <div className="mt-8">
          <ins
            className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-3494072602842969"
            data-ad-slot="4445915260"
            data-ad-format="auto"
            data-full-width-responsive="true"
          />
        </div>
      </div>
    </section>
  );
}
