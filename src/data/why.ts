/**
 * Slides de "¿Por qué Electro Diesel?" (rotan cada 3 s). Pensado para el backoffice:
 * - fondo:   foto completa (JPG/WebP, ideal ≥ 1000 px de lado). El front la recorta en el círculo.
 * - foco:    (opcional) qué parte de la foto queda visible, como object-position ('50% 50%' = centro).
 * - persona: recorte con fondo transparente (PNG/WebP), proporción ~ 720×1018, cuerpo apoyado abajo.
 * - alt:     descripción de la persona.
 */
export interface WhySlide { fondo: string; foco?: string; persona: string; alt: string }

export const WHY_SLIDES: WhySlide[] = [
  { fondo: 'assets/why/fondo-1.jpg', foco: '50% 50%', persona: 'assets/why/persona-1.webp', alt: 'Colaboradora de Electro Diesel en la oficina' },
  { fondo: 'assets/why/fondo-2.jpg', foco: '50% 50%', persona: 'assets/why/persona-2.webp', alt: 'Colaborador operativo con casco y chaleco en el depósito' },
  { fondo: 'assets/why/fondo-3.jpg', foco: '100% 0%', persona: 'assets/why/persona-3.webp', alt: 'Colaborador frente al local de Electro Diesel' },
];

export const WHY_POINTS = [
  { icon: 'target', titulo: 'Carrera con propósito', texto: 'Desarrollá tu trayectoria en una empresa que combina tecnología, servicio y crecimiento sostenible.' },
  { icon: 'award', titulo: 'Capacitación y reconocimiento', texto: 'Accedé a programas de formación y reconocimientos que acompañan tu crecimiento dentro de la empresa.' },
  { icon: 'heart', titulo: 'Bienestar y calidad de vida', texto: 'Buscamos que tu trabajo se equilibre con tu vida personal y tu bienestar diario.' },
] as const;
