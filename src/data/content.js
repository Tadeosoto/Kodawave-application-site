/** Featured projects — home grid & My work carousel (Unsplash IDs verified 200 from CDN) */
export const portfolioProjects = [
  {
    tKey: 'symphony',
    title: 'Symphony',
    tags: ['CAD', 'Estructural', 'Revisión de diseño'],
    blurb: 'Caminos de carga legibles. Una carcasa que resistió vibración sin ocultar cómo funciona.',
    img: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  },
  {
    tKey: 'beyond',
    title: 'Beyond',
    tags: ['DFM', 'Lámina', 'Prototipo'],
    blurb: 'Del desplegado al ensamble: tolerancias que mantuvieron el montaje correcto desde la primera construcción.',
    img: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  },
  {
    tKey: 'northline',
    title: 'Northline',
    tags: ['Mecanismo', 'Cadena de tolerancias', 'Pruebas'],
    blurb: 'Movimiento donde la fricción y el desgaste se contemplaron desde el diseño, no al final.',
    img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  },
  {
    tKey: 'cafeMeridian',
    title: 'Café Meridian',
    tags: ['Térmico', 'CFD', 'Validación'],
    blurb: 'Rutas térmicas y límites definidos antes de que el metal tocara el entorno real.',
    img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  },
  {
    tKey: 'bunero',
    title: 'Bunero',
    tags: ['Materiales', 'Acabado', 'Gestión con proveedores'],
    blurb: 'Elecciones de superficie y material que soportaron contacto, limpieza y uso real.',
    img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  },
  {
    tKey: 'castroCapital',
    title: 'Castro Capital',
    tags: ['Sistemas', 'BOM', 'Liberación'],
    blurb: 'Documentación que se mantuvo sólida cuando cambió el programa, con historial de revisiones confiable.',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  },
]

export const services = [
  {
    tKey: 'modeling',
    title: 'Modelado 3D y planos',
    description:
      'Modelos sólidos, ensambles y planos con tolerancias y disciplina de revisión que puedes llevar a taller o a revisión técnica.',
  },
  {
    tKey: 'dfm',
    title: 'Diseño para manufactura',
    description:
      'Selección de materiales, criterio de herramentales y ajuste al proceso para que la pieza no solo sea correcta en papel: se pueda fabricar.',
  },
  {
    tKey: 'analysis',
    title: 'Análisis y validación',
    description:
      'Cálculos manuales y CAE donde importa: rigidez, factores de seguridad y suposiciones claras que se pueden defender.',
  },
  {
    tKey: 'prototypes',
    title: 'Prototipos e iteración',
    description:
      'Planos, pruebas de banco y ciclos de aprendizaje rápido que conectan la geometría con lo que se siente al tener el hardware en mano.',
  },
]

export const partners = [
  { name: 'Burgher Queen', bgClass: 'bg-amber-50', textClass: 'text-amber-700' },
  { name: 'Nussan', bgClass: 'bg-sky-50', textClass: 'text-sky-700' },
  { name: 'Wandos', bgClass: 'bg-rose-50', textClass: 'text-rose-700' },
  { name: 'Googgle', bgClass: 'bg-lime-50', textClass: 'text-lime-700' },
  { name: 'Netflicks', bgClass: 'bg-red-50', textClass: 'text-red-700' },
  { name: 'Spootify', bgClass: 'bg-emerald-50', textClass: 'text-emerald-700' },
  { name: 'Mickrosoft', bgClass: 'bg-indigo-50', textClass: 'text-indigo-700' },
  { name: 'Amazin', bgClass: 'bg-orange-50', textClass: 'text-orange-700' },
]

export const testimonials = [
  {
    tKey: 'maria',
    name: 'Maria M.',
    role: 'Líder de operaciones, startup de hardware',
    quote:
      'Michelle convirtió un concepto difuso en planos liberados que nuestro proveedor pudo cotizar; cada tolerancia y nota estuvo cuando la necesitamos.',
  },
  {
    tKey: 'daniel',
    name: 'Daniel R.',
    role: 'Gerente de programa, OEM industrial',
    quote:
      'Se mantuvo serena en las revisiones, conectó cada cambio con riesgos y casos de carga, y nunca dejó que un “se ve bien” reemplazara una suposición verificada.',
  },
  {
    tKey: 'olivia',
    name: 'Olivia T.',
    role: 'Fundadora, equipo de dispositivos médicos',
    quote:
      'Nuestro segundo prototipo por fin reflejó la intención: menos sorpresas en ensamble y un plan de pruebas repetible sin adivinar.',
  },
]

/** Journal — Michelle Castellanos. */
export const blogPosts = [
  {
    id: 'post-1',
    slug: 'tendencias-diseno-generativo-2026',
    date: '2026-04-08',
    title: 'Standout trends in generative design and manufacturing in 2026',
    excerpt: 'What is shifting in tools, materials, and how I validate before production.',
    category: 'Design & fabrication',
    featured: true,
  },
  {
    id: 'post-2',
    slug: 'ia-en-el-flujo-del-ingeniero',
    date: '2026-04-05',
    title: 'Exploring AI in a product engineer’s day-to-day flow',
    excerpt: 'From idea to geometry—where AI helps without replacing human judgment.',
    category: 'Tools',
    featured: true,
  },
  {
    id: 'post-3',
    slug: 'factores-diseno-pieza-critica',
    date: '2026-04-02',
    title: 'Twelve factors I check before designing a critical part',
    excerpt: 'A checklist across load, tolerances, and real-world use.',
    category: 'Engineering',
    featured: true,
  },
  {
    id: 'post-4',
    slug: 'simulacion-a-pieza-real',
    date: '2026-03-28',
    title: 'From simulation to the shop floor: lessons from one build',
    excerpt: 'Iterations worth keeping—and mistakes I will not repeat.',
    category: 'Projects',
    featured: false,
  },
  {
    id: 'post-5',
    slug: 'cuando-actualizar-documentacion',
    date: '2026-03-22',
    title: 'Signals that it is time to refresh your design documentation',
    excerpt: 'What I watch for in the team and on the manufacturing line.',
    category: 'Process',
    featured: false,
  },
  {
    id: 'post-6',
    slug: 'relaciones-en-equipo',
    date: '2026-03-18',
    title: 'Working relationships that raise the technical bar',
    excerpt: 'Communication between design, prototype, and production.',
    category: 'Collaboration',
    featured: false,
  },
  {
    id: 'post-7',
    slug: 'lanzamientos-rapidos-resultados',
    date: '2026-03-15',
    title: 'Tighter launches, clearer outcomes',
    excerpt: 'How I narrow scope without losing intent.',
    category: 'Strategy',
    featured: false,
  },
  {
    id: 'post-8',
    slug: 'pipeline-cad-cae',
    date: '2026-03-10',
    title: 'Why a coherent CAD–CAE pipeline matters on mid-sized projects',
    excerpt: 'Less friction between models and analysis.',
    category: 'Tools',
    featured: false,
  },
  {
    id: 'post-9',
    slug: 'rebranding-industrial',
    date: '2026-03-05',
    title: 'Reframing an industrial brand while honoring its past',
    excerpt: 'When brand voice walks beside the engineering.',
    category: 'Brand',
    featured: false,
  },
  {
    id: 'post-10',
    slug: 'como-presentar-rediseno',
    date: '2026-02-28',
    title: 'How I present a redesign to non-technical stakeholders',
    excerpt: 'Stories, numbers, and prototypes that land.',
    category: 'Communication',
    featured: false,
  },
]
