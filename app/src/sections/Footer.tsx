import { Shield, Phone, ExternalLink } from 'lucide-react';
import { linksUtiles } from '@/data/anses-data';

const quickLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Cuándo cobro', href: '#consulta' },
  { label: 'Dónde cobro', href: '#donde' },
  { label: 'Preguntas frecuentes', href: '#faq' },
];

const legalLinks = [
  { label: 'Aviso legal', href: '#aviso' },
  { label: 'Política de privacidad', href: '#privacidad' },
];

export default function Footer() {
  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer id="footer" className="bg-[var(--anses-primary)] text-white">
      {/* Wave decoration */}
      <div className="relative h-16 bg-white">
        <svg
          className="absolute bottom-0 w-full h-16"
          viewBox="0 0 1440 64"
          preserveAspectRatio="none"
        >
          <path
            fill="#1a3a5c"
            d="M0,32 C480,64 960,0 1440,32 L1440,64 L0,64 Z"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold">ANSES Simple</span>
              </div>
            </div>
            <p className="text-blue-200 text-senior mb-6 max-w-md">
              Información clara y accesible sobre los beneficios de ANSES. 
              Ayudamos a personas mayores a entender cuándo y dónde cobrar 
              sus beneficios de forma simple.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-blue-200">
                <Phone className="w-5 h-5" />
                <span>ANSES: 130 (llamada gratuita)</span>
              </div>
              <a
                href={linksUtiles.anses}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-blue-200 hover:text-white transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
                <span>www.anses.gob.ar</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Enlaces rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-blue-200 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">
                      {link.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Legal</h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-blue-200 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Publicidad en bloque - footer */}
            <div className="mt-6 rounded-xl overflow-hidden bg-white/5 p-2">
              <ins
                className="adsbygoogle"
                style={{ display: 'block' }}
                data-ad-client="ca-pub-3494072602842969"
                data-ad-slot="7010710292"
                data-ad-format="auto"
                data-full-width-responsive="true"
              />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 mt-10 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-blue-300 text-sm text-center md:text-left">
              © {new Date().getFullYear()} ANSES Simple. Sitio no oficial.
            </p>
            <p className="text-blue-300 text-sm text-center md:text-right">
              Para trámites oficiales, visitá{' '}
              <a
                href={linksUtiles.anses}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:underline"
              >
                anses.gob.ar
              </a>
            </p>
          </div>
        </div>

        {/* Legal Notice */}
        <div id="aviso" className="mt-6 bg-white/5 rounded-xl p-4">
          <p className="text-blue-300 text-sm text-center">
            <span className="font-semibold text-white">Aviso legal:</span> Este sitio no es oficial de ANSES. 
            Es una herramienta informativa independiente. La información es orientativa y se basa en datos públicos. 
            Para trámites oficiales, consultá directamente en{' '}
            <a
              href={linksUtiles.anses}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline"
            >
              www.anses.gob.ar
            </a>{' '}
            o llamá al 130.
          </p>
        </div>
      </div>
    </footer>
  );
}
