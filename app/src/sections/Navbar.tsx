import { useState, useEffect } from 'react';
import { Menu, X, Shield } from 'lucide-react';

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Cuándo Cobro', href: '#consulta' },
  { label: 'Dónde Cobro', href: '#donde' },
  { label: 'Preguntas', href: '#faq' },
  { label: 'Contacto', href: '#footer' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#inicio');
            }}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 bg-[var(--anses-primary)] rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-[var(--anses-primary)] leading-tight">
                ANSES Simple
              </span>
              <span className="text-xs text-gray-500">Información clara</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="nav-link"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button Desktop */}
          <a
            href="#consulta"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#consulta');
            }}
            className="hidden lg:inline-flex btn-primary-big shadow-lg hover:shadow-xl"
          >
            Consultar Ahora
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-3 rounded-xl hover:bg-[var(--anses-light)] transition-colors"
            aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {isMobileMenuOpen ? (
              <X className="w-7 h-7 text-[var(--anses-primary)]" />
            ) : (
              <Menu className="w-7 h-7 text-[var(--anses-primary)]" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-100 pt-4 animate-fade-in">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="text-lg font-medium text-gray-700 hover:text-[var(--anses-primary)] hover:bg-[var(--anses-light)] px-4 py-3 rounded-xl transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#consulta"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('#consulta');
                }}
                className="btn-primary-big text-center mt-2"
              >
                Consultar Ahora
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
