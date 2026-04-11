/** Featured projects — home grid & My work carousel (Unsplash IDs verified 200 from CDN) */
export const portfolioProjects = [
  {
    title: 'Symphony',
    tags: ['CAD', 'Structural', 'Design review'],
    blurb: 'Load paths made legible. A housing that survived vibration without hiding how it works.',
    img: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Beyond',
    tags: ['DFM', 'Sheet metal', 'Prototype'],
    blurb: 'From flat pattern to assembled stack—tolerances that kept assembly honest on the first build.',
    img: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Northline',
    tags: ['Mechanism', 'Tolerance stack', 'Testing'],
    blurb: 'Motion where friction and wear were budgeted in—not discovered late.',
    img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Café Meridian',
    tags: ['Thermal', 'CFD', 'Validation'],
    blurb: 'Thermal paths and guardrails before metal met the real environment.',
    img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Bunero',
    tags: ['Materials', 'Finish', 'Supplier liaison'],
    blurb: 'Surface and material choices that survived contact, cleaning, and real users.',
    img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Castro Capital',
    tags: ['Systems', 'BOM', 'Release'],
    blurb: 'Documentation that held together when the program shifted—revision history people could trust.',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  },
]

export const services = [
  {
    title: '3D modeling & drawings',
    description:
      'Solid models, assemblies, and drawings with tolerances and revision discipline you can take to a shop or a review.',
  },
  {
    title: 'Design for manufacturing',
    description:
      'Material choices, tooling awareness, and process fit so the part is not just correct on paper—it can be made.',
  },
  {
    title: 'Analysis & validation',
    description:
      'Hand calculations and CAE where it matters: stiffness, safety factors, and clear assumptions you can defend.',
  },
  {
    title: 'Prototypes & iteration',
    description:
      'Prints, bench tests, and learn-fast loops that connect geometry to what you feel when the hardware is in hand.',
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
    name: 'Maria M.',
    role: 'Operations lead, hardware startup',
    quote:
      'Michelle turned a fuzzy concept into released drawings our vendor could quote—every tolerance and note was there when we needed it.',
  },
  {
    name: 'Daniel R.',
    role: 'Program manager, industrial OEM',
    quote:
      'She stayed calm through reviews, tied every change to risk and load cases, and never let “looks fine” replace a checked assumption.',
  },
  {
    name: 'Olivia T.',
    role: 'Founder, medical device team',
    quote:
      'Our second prototype finally matched intent: fewer surprises at assembly, and a test plan we could repeat without guessing.',
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
