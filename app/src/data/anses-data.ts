// Tipos de beneficios ANSES
export type TipoBeneficio = 
  | 'jubilacion'
  | 'pension'
  | 'auh'
  | 'asignacion-embarazo'
  | 'puam'
  | 'progresar';

export interface Beneficio {
  id: TipoBeneficio;
  nombre: string;
  descripcion: string;
}

export const beneficios: Beneficio[] = [
  {
    id: 'jubilacion',
    nombre: 'Jubilación',
    descripcion: 'Jubilación ordinaria, jubilación por invalidez'
  },
  {
    id: 'pension',
    nombre: 'Pensión',
    descripcion: 'Pensión por fallecimiento de titular'
  },
  {
    id: 'auh',
    nombre: 'Asignación Universal por Hijo (AUH)',
    descripcion: 'AUH para hijos menores de 18 años'
  },
  {
    id: 'asignacion-embarazo',
    nombre: 'Asignación por Embarazo',
    descripcion: 'Para mujeres embarazadas desde las 12 semanas'
  },
  {
    id: 'puam',
    nombre: 'Pensión Universal Adultos Mayores (PUAM)',
    descripcion: 'Para personas mayores de 65 años sin jubilación'
  },
  {
    id: 'progresar',
    nombre: 'PROGRESAR',
    descripcion: 'Programa de apoyo a jóvenes para estudiantes'
  }
];

// Calendario de pagos aproximado según terminación de DNI
// NOTA: Estas fechas son orientativas y pueden variar
export interface RangoFecha {
  inicio: number;
  fin: number;
}

export const calendarioJubilaciones: Record<number, RangoFecha> = {
  0: { inicio: 1, fin: 5 },
  1: { inicio: 2, fin: 6 },
  2: { inicio: 3, fin: 7 },
  3: { inicio: 4, fin: 8 },
  4: { inicio: 5, fin: 9 },
  5: { inicio: 6, fin: 10 },
  6: { inicio: 7, fin: 11 },
  7: { inicio: 8, fin: 12 },
  8: { inicio: 9, fin: 13 },
  9: { inicio: 10, fin: 14 }
};

export const calendarioAUH: Record<number, RangoFecha> = {
  0: { inicio: 10, fin: 14 },
  1: { inicio: 11, fin: 15 },
  2: { inicio: 12, fin: 16 },
  3: { inicio: 13, fin: 17 },
  4: { inicio: 14, fin: 18 },
  5: { inicio: 15, fin: 19 },
  6: { inicio: 16, fin: 20 },
  7: { inicio: 17, fin: 21 },
  8: { inicio: 18, fin: 22 },
  9: { inicio: 19, fin: 23 }
};

// Preguntas frecuentes
export interface FAQ {
  pregunta: string;
  respuesta: string;
}

export const faqs: FAQ[] = [
  {
    pregunta: '¿Cómo sé cuándo me toca cobrar?',
    respuesta: 'El calendario de pagos de ANSES se organiza según el último número de tu DNI. Para jubilaciones y pensiones, generalmente los pagos se realizan entre los primeros 10 días del mes. Para AUH y otras asignaciones, los pagos suelen ser a partir del día 10. Podés consultar la fecha exacta ingresando a Mi ANSES con tu DNI y clave.'
  },
  {
    pregunta: '¿Dónde puedo consultar el lugar de cobro?',
    respuesta: 'Podés consultar dónde cobrás ingresando a Mi ANSES (www.anses.gob.ar). Una vez dentro, buscá la opción "Cobros" o "Dónde cobro". Allí vas a ver el banco, la sucursal y la dirección exacta donde tenés habilitado el cobro de tu beneficio. También podés llamar al 130.'
  },
  {
    pregunta: '¿Qué pasa si no cobro el día que me corresponde?',
    respuesta: 'Si no pudiste cobrar el día asignado, no te preocupes. Tu dinero queda depositado en tu cuenta y podés retirarlo cualquier otro día hábil. No perdés el dinero ni se te descuenta nada. Solo tené en cuenta que algunos bancos pueden tener colas los primeros días de pago.'
  },
  {
    pregunta: '¿Puedo cambiar el banco donde cobro?',
    respuesta: 'Sí, podés cambiar el lugar de cobro. Tenés dos opciones: 1) Hacerlo online ingresando a Mi ANSES con tu DNI y clave, en la sección "Cobros" > "Cambiar lugar de cobro". 2) Acercarte a una oficina de ANSES con tu DNI y solicitar el cambio. El nuevo lugar de cobro suele estar disponible dentro de los 30 días.'
  },
  {
    pregunta: '¿Cuándo se paga el aguinaldo?',
    respuesta: 'El aguinaldo se paga en dos cuotas: la primera en junio y la segunda en diciembre. Para jubilados y pensionados, el aguinaldo se abona junto con el haber del mes correspondiente. El monto equivale a la mejor mensualidad percibida en los últimos 6 meses.'
  },
  {
    pregunta: '¿Cómo consulto cuánto cobro este mes?',
    respuesta: 'Para saber el monto exacto de tu beneficio, ingresá a Mi ANSES con tu DNI y clave. En la página principal vas a ver el importe de tu próximo cobro. También podés descargar tu liquidación de haberes donde se detalla el monto bruto, los descuentos y el neto a cobrar.'
  },
  {
    pregunta: '¿Qué necesito para cobrar por primera vez?',
    respuesta: 'Para cobrar tu primer haber, necesitás: 1) Tu DNI original. 2) El número de tu beneficio (que te dan cuando se aprueba). 3) Acudir al banco y sucursal que te asignó ANSES. Es recomendable llegar temprano y llevar una copia de la resolución de tu beneficio.'
  },
  {
    pregunta: '¿Puede otra persona cobrar por mí?',
    respuesta: 'Sí, mediante un apoderado. La persona debe presentar: su DNI, tu DNI, y una autorización de cobro que puede hacerse en Mi ANSES o en una oficina de ANSES. También existe la opción de cuenta sueldo donde el dinero se deposita en una cuenta bancaria a tu nombre.'
  }
];

// Información adicional para páginas
export const infoAdicional = {
  montos: {
    titulo: '¿Cuánto se cobra este mes?',
    contenido: `
      Los montos de los beneficios de ANSES se actualizan periódicamente según la movilidad jubilatoria.
      
      Para conocer el monto exacto de tu beneficio:
      
      1. Ingresá a Mi ANSES con tu DNI y clave
      2. En la página principal verás el importe de tu próximo cobro
      3. Podés descargar tu liquidación de haberes
      
      Recordá que los montos varían según:
      - Tipo de beneficio (jubilación, pensión, AUH, etc.)
      - Años de aportes
      - Moratoria (si corresponde)
      - Asignaciones familiares que percibas
      
      Para información actualizada, consultá siempre Mi ANSES o llamá al 130.
    `
  },
  noCobre: {
    titulo: '¿Qué hacer si no cobré?',
    contenido: `
      Si no pudiste cobrar tu beneficio, seguí estos pasos:
      
      1. Verificá la fecha de cobro
         - Asegurate de que sea el día correcto según tu DNI
         - Los feriados y fines de semana no se cobra
      
      2. Revisá el lugar de cobro
         - Ingresá a Mi ANSES para confirmar el banco
         - Verificá que no haya cambiado la sucursal
      
      3. Si el dinero no está en la cuenta
         - Esperá 24-48 horas hábiles
         - A veces hay demoras en los primeros días de pago
      
      4. Contactá a ANSES
         - Llamá al 130 (atención gratuita)
         - Acercate a una oficina de ANSES con tu DNI
         - Consultá en Mi ANSES el estado de tu beneficio
      
      5. Si hay un problema con tu beneficio
         - Puede estar suspendido por falta de presentación de libreta (AUH)
         - Puede haber un trámite en curso
         - Consultá en ANSES para regularizar
    `
  },
  cambiarBanco: {
    titulo: '¿Puedo cambiar el banco donde cobro?',
    contenido: `
      Sí, podés cambiar el lugar de cobro de tu beneficio ANSES.
      
      Opción 1: Online por Mi ANSES
      1. Ingresá a www.anses.gob.ar
      2. Hacé clic en "Mi ANSES"
      3. Ingresá con tu DNI y clave
      4. Buscá la opción "Cobros" o "Dónde cobro"
      5. Seleccioná "Cambiar lugar de cobro"
      6. Elegí el nuevo banco y sucursal
      7. Confirmá el cambio
      
      Opción 2: En persona
      1. Acercate a cualquier oficina de ANSES
      2. Presentá tu DNI
      3. Solicitá el cambio de lugar de cobro
      4. Te darán un comprobante
      
      Importante:
      - El cambio suele estar disponible dentro de 30 días
      - Podés elegir cualquier banco del país
      - La cuenta es gratuita y no tiene costos de mantenimiento
      - Podés cambiar las veces que necesites
    `
  },
  aguinaldo: {
    titulo: '¿Cuándo se paga el aguinaldo?',
    contenido: `
      El aguinaldo (Sueldo Anual Complementario) se paga en dos cuotas:
      
      Primera cuota: Junio
      - Se abona junto con el haber de junio
      - Equivale a la mejor mensualidad de los últimos 6 meses
      
      Segunda cuota: Diciembre
      - Se abona junto con el haber de diciembre
      - Completa el aguinaldo anual
      
      ¿A quiénes les corresponde?
      - Jubilados y pensionados
      - Titulares de PUAM
      - Beneficiarios de asignaciones familiares (proporcional)
      
      ¿Cómo se calcula?
      - Se toma la mejor mensualidad percibida en el semestre
      - Se divide en dos pagos (junio y diciembre)
      - Incluye todos los conceptos del haber
      
      Para jubilados y pensionados, el aguinaldo se paga automáticamente. No necesitás hacer ningún trámite.
    `
  }
};

// Bancos más comunes
export const bancosComunes = [
  'Banco Nación',
  'Banco Provincia',
  'Banco Santander',
  'Banco Galicia',
  'Banco Francés',
  'Banco Macro',
  'Banco Patagonia',
  'Banco Hipotecario',
  'Banco Ciudad',
  'Banco Supervielle'
];

// Links útiles
export const linksUtiles = {
  anses: 'https://www.anses.gob.ar/',
  miAnses: 'https://www.anses.gob.ar/',
  calendarioPagos: 'https://www.anses.gob.ar/consultas/calendario-de-pagos',
  progresar: 'https://www.anses.gob.ar/educacion/progresar',
  consultaTarjeta: 'https://www.anses.gob.ar/',
  oficinas: 'https://www.anses.gob.ar/',
  turnos: 'https://www.anses.gob.ar/'
};
