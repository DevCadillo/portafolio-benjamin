// EDITA AQUÍ tu información. No publiques teléfonos ni correos que no desees hacer públicos.
export const profile = {
  name: 'Benjamin Cadillo',
  role: 'Desarrollador de Software · Full Stack',
  tagline: 'Construyo soluciones digitales que conectan ideas, personas y tecnología.',
  bio: 'Ingeniero de Sistemas, enfocado en desarrollar soluciones web, aplicaciones móviles, plataformas de gestión, análisis de datos y proyectos integrados con hardware.',
  city: 'El Alto, Bolivia',
  email: 'benjamincadillo32@gmail.com', // EJEMPLO: 'correo@dominio.com' (dejar vacío para ocultar)
  whatsapp: '59177587271', // EJEMPLO: '5917XXXXXXXX' (solo dígitos, sin '+')
  github: 'https://github.com/DevCadillo', // EJEMPLO: 'https://github.com/tu-usuario'
  linkedin: 'https://www.linkedin.com/feed/', // EJEMPLO: 'https://linkedin.com/in/tu-perfil'
  cv: '/cv.pdf', // EJEMPLO: '/cv.pdf' (colocar el PDF en public/cv.pdf)
}

// "estado" indica el estado de presentación, NO necesariamente el estado técnico real.
// Las tecnologías de proyectos sin stack verificado quedan editables en tags.
export const projects = [
  {
    id: 'sade', title: 'SADE · Analítica académica inteligente', category: 'Web', featured: true,
    description: 'Plataforma académica multidimensional para gestionar estudiantes, materias, períodos, asistencias e indicadores de riesgo de deserción.',
    details: 'Integra aplicaciones docentes y estudiantiles, servicios API, reportes, seguimiento académico y métodos de validación de asistencia mediante biometría, reconocimiento facial y geolocalización.',
    tags: ['Blazor', 'ASP.NET Core', 'PostgreSQL', 'Python', 'Power BI'],
    highlights: ['Gestión académica', 'Control de asistencia multimodal', 'Analítica e indicadores'],
    image: '', demo: '', repository: '', icon: 'graduation', tone: 'cyan',
  },
  {
    id: 'docentes', title: 'Asistencia y control docente', category: 'Web', featured: true,
    description: 'Solución para administrar docentes, sesiones, horarios y registro de asistencia con consultas y reportes.',
    details: 'Organiza la información por docentes y sesiones para facilitar el seguimiento y la generación de reportes de control académico.',
    tags: ['Gestión académica', 'Reportes', 'Bases de datos'], highlights: ['Registro de asistencia', 'Control docente', 'Reportes'], image: '', demo: '', repository: '', icon: 'calendar', tone: 'violet',
  },
  {
    id: 'movil-asistencia', title: 'Aplicaciones móviles de asistencia', category: 'Móvil', featured: true,
    description: 'Interfaces móviles para docentes y estudiantes, conectadas con una API académica y funciones de consulta y registro.',
    details: 'Incluyen flujos diferenciados por rol, información de clases y registros de asistencia integrados con el ecosistema SADE.',
    tags: ['Aplicaciones móviles', 'API REST', 'Geolocalización'], highlights: ['Roles docente y estudiante', 'Consulta de registros', 'Integración con API'], image: '', demo: '', repository: '', icon: 'smartphone', tone: 'blue',
  },
  {
    id: 'inventarios', title: 'Sistemas de inventarios y ventas', category: 'Gestión', featured: true,
    description: 'Herramientas para administrar productos, compras, ventas, clientes, proveedores, existencias y movimientos de almacén.',
    details: 'Incluyen control de Kardex, cuentas por cobrar, cotizaciones, comprobantes e indicadores comerciales.',
    tags: ['Excel VBA', 'Gestión comercial', 'Reportes'], highlights: ['Kardex y existencias', 'Compras y ventas', 'Indicadores y reportes'], image: '', demo: '', repository: '', icon: 'boxes', tone: 'amber',
  },
  {
    id: 'robotica', title: 'Aplicación móvil para robótica', category: 'IoT', featured: false,
    description: 'Proyecto de interacción y control de robótica mediante una interfaz móvil.',
    details: 'Experiencia de desarrollo orientada a la comunicación entre una aplicación y dispositivos físicos. Agrega aquí capturas y especificaciones del robot utilizado.',
    tags: ['Robótica', 'Aplicación móvil', 'Hardware'], highlights: ['Interfaz de control', 'Interacción con hardware'], image: '', demo: '', repository: '', icon: 'bot', tone: 'pink',
  },
  {
    id: 'vet-mobile', title: 'Aplicación móvil veterinaria', category: 'Móvil', featured: false,
    description: 'Solución móvil orientada a la organización de información y procesos del ámbito veterinario.',
    details: 'Proyecto de aplicación para atención y gestión veterinaria. Personaliza este apartado con las funciones y pantallas exactas de tu versión.',
    tags: ['Móvil', 'Veterinaria', 'Gestión'], highlights: ['Experiencia móvil', 'Gestión veterinaria'], image: '', demo: '', repository: '', icon: 'heart', tone: 'green',
  },
  {
    id: 'vet-web', title: 'Sistema web veterinario', category: 'Web', featured: false,
    description: 'Aplicación web de gestión diseñada para procesos y registros de una veterinaria.',
    details: 'Proyecto web administrativo para el contexto veterinario. Se pueden incorporar módulos, capturas y tecnologías específicas al editar este portafolio.',
    tags: ['Web', 'Veterinaria', 'Base de datos'], highlights: ['Gestión de información', 'Interfaz administrativa'], image: '', demo: '', repository: '', icon: 'stethoscope', tone: 'teal',
  },
  {
    id: 'biblioteca', title: 'Sistema de gestión de biblioteca', category: 'Gestión', featured: false,
    description: 'Sistema orientado a la administración de libros, usuarios y operaciones bibliotecarias.',
    details: 'Proyecto de digitalización de procesos de biblioteca. Completa las funcionalidades concretas de préstamos y devoluciones si están disponibles en tu implementación.',
    tags: ['Gestión', 'Biblioteca', 'Bases de datos'], highlights: ['Catálogo de libros', 'Administración de registros'], image: '', demo: '', repository: '', icon: 'book', tone: 'blue',
  },
  {
    id: 'adopcion', title: 'Plataforma de adopción de mascotas', category: 'Web', featured: false,
    description: 'Experiencia web para presentar mascotas y organizar información relacionada con la adopción responsable.',
    details: 'Proyecto enfocado en facilitar la consulta de mascotas y la gestión de información asociada. Agrega el flujo de solicitud implementado en tu versión.',
    tags: ['Desarrollo web', 'Mascotas', 'Gestión'], highlights: ['Fichas de mascotas', 'Información de adopción'], image: '', demo: '', repository: '', icon: 'paw', tone: 'amber',
  },
  {
    id: 'feria', title: 'Plataforma de feria científica', category: 'Web', featured: false,
    description: 'Sistema para gestionar proyectos participantes, jurados, evaluaciones y documentos de una feria científica universitaria.',
    details: 'Contempla clasificación por líneas, criterios de evaluación, generación de certificados y documentos de apoyo.',
    tags: ['Gestión de eventos', 'Evaluaciones', 'Certificados QR'], highlights: ['Registro de proyectos', 'Evaluación de jurados', 'Certificados'], image: '', demo: '', repository: '', icon: 'trophy', tone: 'violet',
  },
  {
    id: 'biometrico', title: 'Terminal de asistencia biométrica', category: 'IoT', featured: false,
    description: 'Integración de un ESP32, lector de huellas y pantalla con un sistema académico para validar marcaciones.',
    details: 'Incluye autenticación para funciones administrativas, comunicación con API y registro de eventos de asistencia.',
    tags: ['ESP32', 'C++', 'API REST', 'Biometría'], highlights: ['Lector de huellas', 'Conexión con API', 'Control de acceso'], image: '', demo: '', repository: '', icon: 'fingerprint', tone: 'cyan',
  },
  {
    id: 'fundacion', title: 'Sitio institucional de fundación', category: 'Web', featured: false,
    description: 'Personalización y mejoras de presencia digital institucional, estructura, navegación y experiencia de usuario.',
    details: 'Trabajo de adaptación de un sitio institucional, con mejoras en navegación, presentación del contenido y opciones de idioma.',
    tags: ['WordPress', 'CSS', 'Diseño responsive'], highlights: ['Diseño institucional', 'Navegación', 'Experiencia de usuario'], image: '', demo: 'https://bendicion-para-ninos.com/', repository: '', icon: 'globe', tone: 'green',
  },
]

export const skillGroups = [
  { title: 'Frontend', skills: ['React', 'Angular', 'Blazor', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'] },
  { title: 'Backend', skills: ['Laravel', 'PHP', 'ASP.NET Core', 'C#', 'Python', 'API REST'] },
  { title: 'Móvil & hardware', skills: ['Flutter', 'Aplicaciones móviles', 'ESP32', 'Arduino', 'Integración IoT'] },
  { title: 'Datos & herramientas', skills: ['PostgreSQL', 'MySQL', 'SQL Server', 'MongoDB', 'SQL', 'NoSQL', 'Git', 'GitHub', 'Power BI', 'Excel VBA'] },
]
