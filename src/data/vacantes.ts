// Datos de ejemplo: en producción vienen del backoffice / API.
export interface Vacante {
  id: string;
  area: string;
  tipo: 'Full time' | 'Part time';
  titulo: string;
  ciudad: string;
  resumen: string;
  desafio: string;
  requisitos: string[];
}

export const VACANTES: Vacante[] = [
  {
    id: 'asesor-comercial', area: 'Ventas', tipo: 'Full time', titulo: 'Asesor Comercial', ciudad: 'Asunción',
    resumen: 'Atendés a clientes, resolvés consultas y acompañás la experiencia de compra en tienda y online.',
    desafio: 'Vas a ser la cara de Electro Diesel frente a nuestros clientes: asesorarlos en la elección de repuestos y accesorios, cerrar ventas en salón y canales digitales, y asegurarte de que cada persona se vaya con la solución que necesita para su vehículo.',
    requisitos: ['Experiencia mínima de 1 año en ventas o atención al cliente.', 'Conocimientos básicos de repuestos automotrices (deseable).', 'Bachiller concluido.', 'Buena comunicación y orientación a resultados.', 'Disponibilidad para trabajar en horario comercial y sábados.'],
  },
  {
    id: 'coordinador-despacho', area: 'Ventas', tipo: 'Full time', titulo: 'Coordinador de Despacho', ciudad: 'Asunción',
    resumen: 'Organizás pedidos, gestionás tiempos de entrega y asegurás que los procesos de salida sean eficientes.',
    desafio: 'Vas a liderar la salida de mercaderías: planificar rutas y entregas, coordinar al equipo de despacho y garantizar que cada pedido llegue completo y a tiempo a nuestros clientes y sucursales.',
    requisitos: ['Experiencia de 2 años en logística, despacho o depósito.', 'Manejo de Excel y sistemas de gestión (ERP).', 'Capacidad para liderar equipos operativos.', 'Estudios universitarios en curso en Administración, Ingeniería o afines.'],
  },
  {
    id: 'especialista-digital', area: 'Marketing', tipo: 'Full time', titulo: 'Especialista Digital', ciudad: 'Asunción',
    resumen: 'Creás contenidos, gestionás campañas y conectás la marca con nuestros clientes en canales digitales.',
    desafio: 'Vas a impulsar la presencia digital de Electro Diesel: planificar y ejecutar campañas pagas, gestionar redes sociales y el e-commerce, y medir resultados para mejorar continuamente.',
    requisitos: ['Experiencia de 2 años en marketing digital.', 'Manejo de Meta Ads, Google Ads y Analytics.', 'Conocimientos de diseño (Canva / Adobe) y edición de video básica.', 'Pensamiento analítico y creatividad.'],
  },
  {
    id: 'tecnico-electricista', area: 'Taller', tipo: 'Full time', titulo: 'Técnico Electricista Automotriz', ciudad: 'San Lorenzo',
    resumen: 'Diagnosticás y reparás sistemas eléctricos de vehículos con herramientas de última generación.',
    desafio: 'Vas a diagnosticar fallas eléctricas y electrónicas, instalar componentes y brindar un servicio técnico de calidad, trabajando con equipos de diagnóstico modernos y en constante capacitación.',
    requisitos: ['Formación técnica en electricidad o electrónica automotriz.', 'Experiencia mínima de 2 años en taller.', 'Manejo de scanner y multímetro.', 'Responsabilidad y cuidado por la seguridad (uso de EPP).'],
  },
  {
    id: 'auxiliar-deposito', area: 'Depósito', tipo: 'Part time', titulo: 'Auxiliar de Depósito', ciudad: 'Luque',
    resumen: 'Recibís, ordenás y preparás mercaderías para que todo esté listo para la venta.',
    desafio: 'Vas a ser clave en la operación diaria: recepción y control de mercaderías, reposición, armado de pedidos y mantenimiento del orden y la seguridad del depósito.',
    requisitos: ['No se requiere experiencia: ¡ideal primer empleo!', 'Bachiller concluido o en curso.', 'Buena disposición para tareas operativas.', 'Disponibilidad en turno mañana.'],
  },
  {
    id: 'vendedor-salon-cde', area: 'Ventas', tipo: 'Full time', titulo: 'Vendedor de Salón', ciudad: 'Ciudad del Este',
    resumen: 'Asesorás a clientes en el salón de ventas y los ayudás a encontrar el repuesto justo.',
    desafio: 'Vas a atender el mostrador de nuestra sucursal de Ciudad del Este, identificar lo que cada cliente necesita para su vehículo y concretar la venta con una atención cercana y rápida.',
    requisitos: ['Experiencia en ventas al público (deseable en rubro automotor).', 'Bachiller concluido.', 'Manejo básico de sistemas de facturación.', 'Disponibilidad de lunes a sábado.'],
  },
  {
    id: 'mecanico-general', area: 'Taller', tipo: 'Full time', titulo: 'Mecánico General', ciudad: 'Fernando de la Mora',
    resumen: 'Realizás mantenimientos y reparaciones mecánicas con foco en calidad y seguridad.',
    desafio: 'Vas a encargarte de servicios de mantenimiento preventivo y correctivo, diagnóstico de fallas mecánicas y entrega de vehículos en tiempo y forma.',
    requisitos: ['Experiencia mínima de 3 años como mecánico.', 'Formación técnica en mecánica automotriz.', 'Manejo de herramientas de diagnóstico.', 'Licencia de conducir vigente.'],
  },
  {
    id: 'ayudante-taller', area: 'Taller', tipo: 'Full time', titulo: 'Ayudante de Taller', ciudad: 'Asunción',
    resumen: 'Acompañás al equipo técnico en el día a día del taller y aprendés el oficio.',
    desafio: 'Vas a asistir a los técnicos en la preparación de vehículos, el orden de herramientas y tareas de mantenimiento básico, con capacitación continua.',
    requisitos: ['No se requiere experiencia previa.', 'Interés por la mecánica automotriz.', 'Bachiller concluido o en curso.', 'Ganas de aprender.'],
  },
  {
    id: 'atencion-telefonica', area: 'Atención al cliente', tipo: 'Part time', titulo: 'Agente de Atención Telefónica', ciudad: 'Asunción',
    resumen: 'Respondés consultas por teléfono y WhatsApp y acompañás a los clientes en cada pedido.',
    desafio: 'Vas a ser el primer contacto de muchos clientes: resolver dudas sobre productos, tomar pedidos, hacer seguimiento de entregas y derivar casos al área correspondiente.',
    requisitos: ['Excelente comunicación oral y escrita.', 'Manejo de herramientas digitales y WhatsApp Business.', 'Experiencia en call center (deseable).', 'Disponibilidad en turno tarde.'],
  },
  {
    id: 'postventa', area: 'Atención al cliente', tipo: 'Full time', titulo: 'Analista de Postventa', ciudad: 'San Lorenzo',
    resumen: 'Gestionás reclamos, garantías y devoluciones para que cada cliente quede conforme.',
    desafio: 'Vas a gestionar los casos de postventa de punta a punta: registrar reclamos, coordinar garantías con proveedores y asegurarte de que cada cliente reciba una solución.',
    requisitos: ['Experiencia de 1 año en atención al cliente o postventa.', 'Capacidad de negociación y empatía.', 'Manejo de Excel.', 'Estudios universitarios en curso (deseable).'],
  },
  {
    id: 'chofer-reparto', area: 'Logística', tipo: 'Full time', titulo: 'Chofer de Reparto', ciudad: 'Luque',
    resumen: 'Entregás pedidos a clientes y sucursales cumpliendo rutas y horarios.',
    desafio: 'Vas a realizar las entregas diarias en Gran Asunción, cuidar la mercadería y el vehículo, y mantener una buena relación con los clientes en cada visita.',
    requisitos: ['Licencia de conducir categoría profesional.', 'Experiencia en reparto (deseable).', 'Conocimiento de Gran Asunción.', 'Responsabilidad y puntualidad.'],
  },
  {
    id: 'analista-inventario', area: 'Logística', tipo: 'Full time', titulo: 'Analista de Inventario', ciudad: 'Asunción',
    resumen: 'Controlás el stock y aseguras que los datos del sistema coincidan con lo que hay en depósito.',
    desafio: 'Vas a planificar y ejecutar inventarios cíclicos, analizar diferencias de stock y proponer mejoras en los procesos de control.',
    requisitos: ['Experiencia de 2 años en control de inventario.', 'Manejo avanzado de Excel y ERP.', 'Estudios en Administración, Contabilidad o afines.', 'Atención al detalle.'],
  },
  {
    id: 'repositor-encarnacion', area: 'Depósito', tipo: 'Full time', titulo: 'Repositor', ciudad: 'Encarnación',
    resumen: 'Mantenés las góndolas ordenadas, abastecidas y con los precios al día.',
    desafio: 'Vas a encargarte de la reposición de productos en la sucursal de Encarnación, controlar fechas y etiquetas, y mantener el salón listo para atender.',
    requisitos: ['Bachiller concluido.', 'Experiencia en reposición (deseable).', 'Buena disposición y trabajo en equipo.', 'Disponibilidad de lunes a sábado.'],
  },
  {
    id: 'disenador-grafico', area: 'Marketing', tipo: 'Part time', titulo: 'Diseñador Gráfico', ciudad: 'Lambaré',
    resumen: 'Diseñás piezas para redes, punto de venta y campañas de la marca.',
    desafio: 'Vas a crear piezas gráficas para redes sociales, cartelería de sucursales y campañas, cuidando la identidad visual de la marca.',
    requisitos: ['Portfolio con trabajos recientes.', 'Manejo de Illustrator, Photoshop y Figma.', 'Conocimientos de motion (deseable).', 'Creatividad y prolijidad.'],
  },
];

/** Áreas del formulario. Las que tienen vacantes publicadas muestran el tag "Vacante abierta" y van primero. */
export const AREAS = ['Ventas', 'Atención al cliente', 'Marketing', 'Taller', 'Depósito', 'Logística', 'Administración'];
export const AREAS_ABIERTAS = new Set(VACANTES.map((v) => v.area));
export const AREAS_ORDENADAS = [...AREAS].sort((a, b) => Number(AREAS_ABIERTAS.has(b)) - Number(AREAS_ABIERTAS.has(a)));

export const CIUDADES = ['Asunción', 'Capiatá', 'Ciudad del Este', 'Encarnación', 'Fernando de la Mora', 'Lambaré', 'Limpio', 'Luque', 'Mariano Roque Alonso', 'Ñemby', 'San Lorenzo', 'Villa Elisa', 'Otra'];
