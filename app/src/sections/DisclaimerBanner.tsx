import { AlertTriangle, ExternalLink } from 'lucide-react';
import { linksUtiles } from '@/data/anses-data';

export default function DisclaimerBanner() {
  return (
    <section className="relative z-20 -mt-4">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="legal-banner shadow-lg">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                <AlertTriangle className="w-7 h-7 text-amber-600" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-amber-800 mb-1">
                Este sitio no es oficial de ANSES
              </h3>
              <p className="text-amber-700 text-senior leading-relaxed">
                Esta es una herramienta informativa independiente. La información es orientativa 
                y se basa en datos públicos. Para trámites oficiales, visitá{' '}
                <a
                  href={linksUtiles.anses}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold underline hover:text-amber-900 inline-flex items-center gap-1"
                >
                  anses.gob.ar
                  <ExternalLink className="w-4 h-4" />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
