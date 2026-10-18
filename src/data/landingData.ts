export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  included: string[];
  iconName: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  company: string;
  city: string;
  role: string;
  outcome: string;
  initials: string;
}

export const WHATSAPP_PHONE = '56984523910';
export const WHATSAPP_DISPLAY = '+56 9 8452 3910';
export const CONTACT_EMAIL = 'contacto@asesoriaclaudiooyarzun.cl';
export const OFFICE_LOCATION = 'Santiago & Atención Remota a todo Chile';

export const createWhatsAppUrl = (message: string) => {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
};

export const DEFAULT_WA_MESSAGE = `Hola Claudio, me gustaría coordinar una evaluación inicial de la contabilidad de mi empresa.`;

export const QUICK_INQUIRY_TOPICS = [
  {
    id: 'spa',
    label: 'Tengo una SpA o Pyme y busco contador mensual',
    message: 'Hola Claudio, tengo una SpA / Pyme activa y me gustaría consultar por sus servicios de contabilidad mensual y F29.'
  },
  {
    id: 'constitucion',
    label: 'Quiero constituir una empresa e iniciar actividades',
    message: 'Hola Claudio, estoy planificando crear una nueva empresa y requiero asesoría para constitución, RUT e inicio de actividades en el SII.'
  },
  {
    id: 'cambio',
    label: 'Deseo cambiar de contador de forma ordenada',
    message: 'Hola Claudio, me gustaría evaluar el traspaso de la contabilidad de mi empresa desde mi contador actual hacia su oficina.'
  },
  {
    id: 'regularizacion',
    label: 'Tengo declaraciones pendientes u observaciones en el SII',
    message: 'Hola Claudio, mi empresa tiene algunas observaciones o declaraciones pendientes en el SII y necesito una revisión para regularizar.'
  }
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Diagnóstico Inicial Gratuito',
    subtitle: 'Revisión sin costo ni compromiso',
    description: 'Analizamos la situación tributaria de su empresa en el SII, historial de F29 y concordancia contable previa para identificar el estado real.',
    badge: '24 a 48 hrs hábiles'
  },
  {
    step: '02',
    title: 'Propuesta Clara y Traspaso Seguro',
    subtitle: 'Honorarios fijos y transparentes',
    description: 'Pautamos un plan a la medida exacta de su negocio sin cobros ocultos y coordinamos la recepción ordenada de libros y antecedentes.',
    badge: 'Cero interrupción operativa'
  },
  {
    step: '03',
    title: 'Gestión Mensual y Tranquilidad Total',
    subtitle: 'Cumplimiento continuo y asesoría directa',
    description: 'Presentación puntual de F29, liquidaciones en Previred, balances periódicos y canal directo vía WhatsApp con Claudio Oyarzún.',
    badge: 'Respaldo permanente'
  }
];

export const COMPARISON_ITEMS = [
  {
    criterion: 'Canal de comunicación',
    traditional: 'Correos que tardan días o atención por juniors rotativos',
    oyarzun: 'Contacto directo vía WhatsApp y teléfono con Claudio Oyarzún'
  },
  {
    criterion: 'Puntualidad en impuestos (F29)',
    traditional: 'Cálculos de última hora con riesgo de recargos o multas',
    oyarzun: 'Anticipación y presentación holgada antes de cada vencimiento'
  },
  {
    criterion: 'Claridad en los honorarios',
    traditional: 'Costos variables imprevistos por balances o consultas',
    oyarzun: 'Honorario mensual pactado, transparente y sin cobros sorpresa'
  },
  {
    criterion: 'Enfoque de asesoría',
    traditional: 'Recopilación pasiva de documentos al cierre del mes',
    oyarzun: 'Acompañamiento estratégico y proactivo para cuidar su patrimonio'
  }
];

export const SERVICES_SUMMARY: ServiceItem[] = [
  {
    id: 'contabilidad-mensual',
    number: '01',
    title: 'Contabilidad Mensual Integral',
    tagline: 'Gestión continua y confiable',
    description: 'Registro fidedigno de sus operaciones comerciales, conciliación bancaria y confección de estados financieros para decisiones seguras.',
    included: [
      'Libros oficiales de compras, ventas y diario',
      'Conciliaciones bancarias periódicas',
      'Balances de comprobación y estados de resultados'
    ],
    iconName: 'Calculator'
  },
  {
    id: 'tributaria-f29-f22',
    number: '02',
    title: 'Gestión Tributaria e Impuestos',
    tagline: 'Cumplimiento normativo estricto',
    description: 'Cálculo y presentación sin observaciones de sus declaraciones mensuales de IVA (F29) y el ciclo anual de Operación Renta (F22).',
    included: [
      'Declaración mensual de IVA, PPM y retenciones',
      'Confección y envío de Declaraciones Juradas anuales',
      'Declaración de Renta F22 de la sociedad y socios'
    ],
    iconName: 'FileText'
  },
  {
    id: 'remuneraciones-previred',
    number: '03',
    title: 'Remuneraciones y Leyes Sociales',
    tagline: 'Tranquilidad con su equipo de trabajo',
    description: 'Elaboración de nóminas, cálculo de imposiciones, contratos de trabajo y carga puntual en Previred y la Dirección del Trabajo.',
    included: [
      'Emisión mensual de liquidaciones de sueldo',
      'Declaración y pago de cotizaciones en Previred',
      'Contratos, anexos, finiquitos y Libro de Remuneraciones DT'
    ],
    iconName: 'Users'
  },
  {
    id: 'constitucion-empresas',
    number: '04',
    title: 'Constitución y Creación de Empresas',
    tagline: 'Comience su negocio con bases sólidas',
    description: 'Asesoría en la elección societaria óptima (SpA, EIRL o SRL), redacción de estatutos, obtención de RUT e inicio de actividades ante el SII.',
    included: [
      'Redacción y tramitación de estatutos societarios',
      'Inicio de Actividades y verificación de domicilio',
      'Habilitación inmediata de facturación electrónica'
    ],
    iconName: 'Building'
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: '1',
    quote: 'Teníamos dudas constantes con las declaraciones y el cálculo de PPM. Claudio Oyarzún asumió nuestra contabilidad con un orden impecable; su claridad y puntualidad en cada F29 nos dieron total tranquilidad.',
    author: 'Carolina Valenzuela',
    role: 'Socia Fundadora & Gerenta General',
    company: 'InnovaTech Soluciones SpA',
    city: 'Santiago',
    outcome: 'Cumplimiento 100% puntual ante el SII',
    initials: 'CV'
  },
  {
    id: '2',
    quote: 'La atención de Claudio destaca por su profesionalismo. Siempre disponible para responder dudas concretas y explicar la situación tributaria de forma transparente y sin enredos.',
    author: 'Rodrigo Morales',
    role: 'Director de Operaciones',
    company: 'Constructora del Sur SpA',
    city: 'Puerto Varas',
    outcome: 'Optimización tributaria y comunicación fluida',
    initials: 'RM'
  },
  {
    id: '3',
    quote: 'Excelente asesoría. Traspasar mi contabilidad a su oficina fue rápido y ordenado. Hoy tengo mis balances al día y las liquidaciones de mi equipo presentadas en Previred a tiempo.',
    author: 'Matías Benítez',
    role: 'Gerente Comercial',
    company: 'Logística Austral',
    city: 'Concepción',
    outcome: 'Gestión mensual integral y confiable',
    initials: 'MB'
  }
];
