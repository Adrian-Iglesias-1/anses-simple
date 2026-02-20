import { createContext, useContext, useState, type ReactNode } from 'react';
import type { TipoBeneficio } from '@/data/anses-data';
import type { RangoFecha } from '@/data/anses-data';

export interface ConsultaResult {
  tipoBeneficio: TipoBeneficio;
  dniNumber: number;
  fechaCobro: RangoFecha;
  nombreBeneficio: string;
}

interface ConsultaContextValue {
  consultaResult: ConsultaResult | null;
  setConsultaResult: (result: ConsultaResult | null) => void;
}

const ConsultaContext = createContext<ConsultaContextValue | null>(null);

export function ConsultaProvider({ children }: { children: ReactNode }) {
  const [consultaResult, setConsultaResult] = useState<ConsultaResult | null>(null);
  return (
    <ConsultaContext.Provider value={{ consultaResult, setConsultaResult }}>
      {children}
    </ConsultaContext.Provider>
  );
}

export function useConsulta() {
  const ctx = useContext(ConsultaContext);
  if (!ctx) throw new Error('useConsulta must be used within ConsultaProvider');
  return ctx;
}
