import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight,
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  MapPin,
  Code2,
  Smartphone,
  Database,
  Cpu,
  ExternalLink,
  ChevronDown,
  Sparkles,
  GraduationCap,
  CalendarDays,
  Boxes,
  Bot,
  Heart,
  Stethoscope,
  BookOpen,
  PawPrint,
  Trophy,
  Fingerprint,
  Globe2,
  Check,
  Download,
  Layers3,
  Send,
  Search,
  ChevronLeft,
  ChevronRight,
  Laptop,
  MonitorCog,
  Network,
  Wrench,
  ShieldCheck,
  Headset,
  Wifi,
  HardDrive,
} from "lucide-react";
import { profile, projects, skillGroups } from "./data";
import "./styles.css";

const icons = {
  graduation: GraduationCap,
  calendar: CalendarDays,
  smartphone: Smartphone,
  boxes: Boxes,
  bot: Bot,
  heart: Heart,
  stethoscope: Stethoscope,
  book: BookOpen,
  paw: PawPrint,
  trophy: Trophy,
  fingerprint: Fingerprint,
  globe: Globe2,
};
const filters = ["Todos", "Web", "Móvil", "Gestión", "IoT"];
const scrollTo = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

function Brand() {
  return (
    <a className="brand" href="#inicio" aria-label="Volver al inicio">
      <span className="brand-mark">
        B<span>.</span>
      </span>
      <span>
        BENJAMIN<span className="brand-muted">/DEV</span>
      </span>
    </a>
  );
}
function App() {
  const [menu, setMenu] = useState(false),
    [filter, setFilter] = useState("Todos"),
    [query, setQuery] = useState(""),
    [selected, setSelected] = useState(null),
    [visible, setVisible] = useState(6);
  const listed = useMemo(
    () =>
      projects.filter(
        (p) =>
          (filter === "Todos" || p.category === filter) &&
          `${p.title} ${p.description} ${p.tags.join(" ")}`
            .toLowerCase()
            .includes(query.toLowerCase()),
      ),
    [filter, query],
  );
  useEffect(() => {
    const key = (e) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", key);
    return () => window.removeEventListener("keydown", key);
  }, []);
  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selected]);
  const closeMenu = () => setMenu(false);
  return (
    <>
      <header className="header">
        <div className="container nav">
          <Brand />
          <nav
            className={menu ? "nav-links open" : "nav-links"}
            aria-label="Menú principal"
          >
            {[
              ["Inicio", "inicio"],
              ["Sobre mí", "sobre-mi"],
              ["Proyectos", "proyectos"],
              ["Tecnologías", "tecnologias"],
              ["Servicios", "servicios"],
              ["Soporte técnico", "soporte"],
              ["Contacto", "contacto"],
            ].map(([label, id]) => (
              <a href={"#" + id} key={id} onClick={closeMenu}>
                {label}
              </a>
            ))}
          </nav>
          <a className="nav-cta" href="#contacto">
            Hablemos <ArrowUpRight size={16} />
          </a>
          <button
            className="menu-toggle"
            aria-label={menu ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menu}
            onClick={() => setMenu(!menu)}
          >
            {menu ? <X /> : <Menu />}
          </button>
        </div>
      </header>
      <main>
        <section id="inicio" className="hero">
          <div className="hero-glow glow-one" />
          <div className="hero-glow glow-two" />
          <div className="container hero-inner">
            <div className="hero-copy">
              <span className="eyebrow">
                <span className="pulse" /> DISPONIBLE PARA COLABORACIONES
              </span>
              <div className="hero-sub">
                Hola, soy Benjamin <span className="wave">✳</span>
              </div>
              <h1>
                Desarrollo software.
                <br />
                <span>Creo soluciones.</span>
                <br />
                Transformo ideas.
              </h1>
              <p>
                {profile.tagline} Desarrollo plataformas web, aplicaciones
                móviles y sistemas a medida. También ofrezco soporte técnico,
                mantenimiento de computadoras y soluciones de conectividad.
              </p>
              <div className="hero-actions">
                <a className="btn primary" href="#proyectos">
                  Explorar proyectos <ArrowUpRight size={18} />
                </a>
                <a className="btn secondary" href="#contacto">
                  Trabajemos juntos <ArrowRight size={18} />
                </a>
              </div>
              <div className="hero-social">
                {profile.github && (
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                  >
                    <Github size={19} />
                  </a>
                )}
                {profile.linkedin && (
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={19} />
                  </a>
                )}
                <span>
                  <MapPin size={14} />
                  {profile.city}
                </span>
              </div>
            </div>
            <div className="hero-art" aria-hidden="true">
              <div className="art-orbit orbit-1" />
              <div className="art-orbit orbit-2" />
              <div className="art-window">
                <div className="window-top">
                  <div className="dots">
                    <i />
                    <i />
                    <i />
                  </div>
                  <span>~/portfolio/benjamin</span>
                  <Code2 size={15} />
                </div>
                <div className="code">
                  <div>
                    <span className="purple">const</span> developer{" "}
                    <span className="muted">=</span> {"{"}
                  </div>
                  <div className="indent">
                    name: <span className="lime">'Benjamin Cadillo'</span>,
                  </div>
                  <div className="indent">
                    focus: <span className="lime">'Full Stack'</span>,
                  </div>
                  <div className="indent">builds: [</div>
                  <div className="indent2">
                    <span className="lime">'Web Apps'</span>,{" "}
                    <span className="lime">'Mobile'</span>,
                  </div>
                  <div className="indent2">
                    <span className="lime">'APIs'</span>,{" "}
                    <span className="lime">'IoT'</span>
                  </div>
                  <div className="indent">],</div>
                  <div className="indent">
                    passion: <span className="orange">true</span>
                  </div>
                  <div>{"}"};</div>
                  <div className="code-bottom">
                    // Construyendo el futuro, una línea a la vez
                    <span className="cursor">▍</span>
                  </div>
                </div>
              </div>
              <div className="float-tag tag-one">
                <span className="float-symbol">
                  <Database size={19} />
                </span>
                <span>
                  Database
                  <br />
                  <b>Architecture</b>
                </span>
              </div>
              <div className="float-tag tag-two">
                <span className="float-symbol">
                  <Smartphone size={19} />
                </span>
                <span>
                  Mobile
                  <br />
                  <b>Development</b>
                </span>
              </div>
            </div>
          </div>
          <a className="scroll-down" href="#sobre-mi">
            <span>SCROLL PARA EXPLORAR</span>
            <ChevronDown size={16} />
          </a>
        </section>
        <div className="ticker" aria-label="Tecnologías">
          <div className="ticker-track">
            {Array.from({ length: 2 }).flatMap((_, i) =>
              [
                "REACT",
                "ANGULAR",
                "LARAVEL",
                "FLUTTER",
                "PYTHON",
                "POSTGRESQL",
                "ASP.NET CORE",
                "MONGODB",
              ].map((t, j) => (
                <span key={`${i}-${j}`}>
                  {t}
                  <span className="asterisk">✳</span>
                </span>
              )),
            )}
          </div>
        </div>
        <section id="sobre-mi" className="section">
          <div className="container about-grid">
            <div>
              <span className="section-kicker">01 / SOBRE MÍ</span>
              <h2>
                Más que escribir código,
                <br />
                <em>resuelvo problemas.</em>
              </h2>
              <div className="about-avatar">
                <div className="avatar-shape">
                  <span>
                    BC<span>.</span>
                  </span>
                </div>
                <div className="avatar-label">
                  <span className="signal" /> FULL STACK DEVELOPER
                </div>
              </div>
            </div>
            <div className="about-right">
              <p className="lead">
                ¡Mucho gusto! Soy <strong>Benjamin Cadillo</strong>, apasionado
                por la tecnología y la creación de soluciones que tienen un
                impacto real.
              </p>
              <p>{profile.bio}</p>
              <p>
                Trabajo tanto en el desarrollo de software como en la atención
                de necesidades tecnológicas: diagnóstico de equipos,
                mantenimiento preventivo, redes y asesoramiento para elegir
                soluciones adecuadas.
              </p>
              <div className="about-pills">
                <span>
                  <GraduationCap size={17} /> Ingeniería de Sistemas
                </span>
                <span>
                  <MapPin size={17} /> El Alto, Bolivia
                </span>
              </div>
              {profile.cv && (
                <a className="text-link" href={profile.cv} download>
                  Descargar CV <Download size={17} />
                </a>
              )}
            </div>
          </div>
        </section>
        <section id="proyectos" className="section projects-section">
          <div className="container">
            <div className="section-top">
              <div>
                <span className="section-kicker">02 / MI TRABAJO</span>
                <h2>
                  Proyectos que <em>hablan por mí.</em>
                </h2>
                <p>
                  Una selección de plataformas, aplicaciones e integraciones.
                  Abre cada proyecto para conocer sus detalles.
                </p>
              </div>
              <div className="count-bubble">
                <strong>{String(projects.length).padStart(2, "0")}</strong>
                <span>
                  PROYECTOS
                  <br />
                  DESTACADOS
                </span>
              </div>
            </div>
            <div className="project-toolbar">
              <div className="filters" aria-label="Filtrar proyectos">
                {filters.map((f) => (
                  <button
                    key={f}
                    className={filter === f ? "active" : ""}
                    onClick={() => {
                      setFilter(f);
                      setVisible(6);
                    }}
                  >
                    {f}
                  </button>
                ))}
              </div>
              <label className="search">
                <Search size={16} />
                <input
                  aria-label="Buscar proyectos"
                  placeholder="Buscar proyecto..."
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setVisible(6);
                  }}
                />
              </label>
            </div>
            <div className="project-grid">
              {listed.slice(0, visible).map((p, i) => (
                <ProjectCard
                  key={p.id}
                  p={p}
                  number={projects.indexOf(p) + 1}
                  onOpen={() => setSelected(p)}
                />
              ))}
            </div>
            {listed.length === 0 && (
              <div className="empty">
                No se encontraron proyectos con ese criterio.
              </div>
            )}
            {listed.length > visible && (
              <div className="more-wrap">
                <button
                  className="btn secondary"
                  onClick={() => setVisible((v) => v + 6)}
                >
                  Ver más proyectos <ChevronDown size={17} />
                </button>
              </div>
            )}
          </div>
        </section>
        <section id="tecnologias" className="section skills-section">
          <div className="container">
            <span className="section-kicker">03 / STACK TECNOLÓGICO</span>
            <div className="section-top">
              <div>
                <h2>
                  Herramientas para <em>hacerlo posible.</em>
                </h2>
                <p>
                  Experiencia e interés en diferentes ecosistemas de desarrollo,
                  bases de datos y plataformas.
                </p>
              </div>
              <span className="section-icon">
                <Layers3 size={34} />
              </span>
            </div>
            <div className="skills-grid">
              {skillGroups.map((g, i) => (
                <div className="skill-group" key={g.title}>
                  <span className="skill-number">0{i + 1} /</span>
                  <h3>{g.title}</h3>
                  <div className="chips">
                    {g.skills.map((s) => (
                      <span key={s}>{s}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="servicios" className="section services-section">
          <div className="container">
            <span className="section-kicker">04 / QUÉ PUEDO HACER</span>
            <div className="section-top">
              <div>
                <h2>
                  De la idea al <em>producto.</em>
                </h2>
                <p>
                  Soluciones desarrolladas según las necesidades de cada
                  proyecto.
                </p>
              </div>
            </div>
            <div className="services-grid">
              {[
                {
                  icon: Code2,
                  title: "Desarrollo web",
                  text: "Sitios institucionales, paneles administrativos, sistemas empresariales y plataformas web a medida.",
                },
                {
                  icon: Smartphone,
                  title: "Aplicaciones móviles",
                  text: "Experiencias móviles conectadas con APIs para usuarios, estudiantes, negocios y servicios.",
                },
                {
                  icon: Database,
                  title: "Bases de datos y APIs",
                  text: "Modelado de información, sistemas relacionales y NoSQL, integración de servicios y reportes.",
                },
                {
                  icon: Cpu,
                  title: "Automatización e IoT",
                  text: "Procesos automatizados, dispositivos ESP32, controles biométricos e integración hardware-software.",
                },
              ].map(({ icon: Icon, title, text }, i) => (
                <div className="service-card" key={title}>
                  <div className="service-head">
                    <Icon size={26} />
                    <span>0{i + 1}</span>
                  </div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <a href="#contacto" aria-label={`Consultar por ${title}`}>
                    <ArrowUpRight size={20} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="soporte" className="section support-section">
          <div className="container">
            <span className="section-kicker">05 / SERVICIOS TÉCNICOS</span>
            <div className="section-top">
              <div>
                <h2>
                  Tu tecnología, <em>en buenas manos.</em>
                </h2>
                <p>
                  Además del desarrollo de software, ofrezco asistencia técnica
                  y asesoramiento para personas, estudiantes, negocios y
                  oficinas. Cada trabajo comienza con una revisión de las
                  necesidades y del estado del equipo o la red.
                </p>
              </div>
              <span className="section-icon">
                <Wrench size={34} />
              </span>
            </div>
            <div className="services-grid">
              {[
                {
                  icon: Laptop,
                  title: "Mantenimiento de PC y laptops",
                  text: "Limpieza física, revisión de ventilación, mantenimiento preventivo y recomendaciones para mejorar el rendimiento.",
                },
                {
                  icon: MonitorCog,
                  title: "Diagnóstico y solución de fallas",
                  text: "Revisión de lentitud, errores del sistema, problemas de encendido, software y posibles fallas de componentes.",
                },
                {
                  icon: Network,
                  title: "Instalación y configuración de redes",
                  text: "Configuración básica de redes cableadas e inalámbricas, routers, puntos de acceso y conectividad entre equipos.",
                },
                {
                  icon: Wifi,
                  title: "Verificación de conexión y red",
                  text: "Pruebas de conectividad, revisión de cobertura Wi-Fi, dirección IP, conflictos de red y problemas de acceso.",
                },
                {
                  icon: HardDrive,
                  title: "Instalación y optimización",
                  text: "Instalación y configuración de sistemas operativos, programas, controladores y recomendaciones de respaldo de información.",
                },
                {
                  icon: ShieldCheck,
                  title: "Revisión preventiva",
                  text: "Comprobación de actualizaciones, medidas básicas de seguridad, análisis de posibles amenazas y estado general del equipo.",
                },
                {
                  icon: Headset,
                  title: "Soporte y asistencia",
                  text: "Acompañamiento técnico presencial o remoto según el caso, orientación de uso y resolución de incidencias.",
                },
                {
                  icon: Wrench,
                  title: "Asesoramiento tecnológico",
                  text: "Orientación para compra o actualización de equipos, selección de componentes, programas y soluciones para hogares o negocios.",
                },
              ].map(({ icon: Icon, title, text }, i) => (
                <div className="service-card" key={title}>
                  <div className="service-head">
                    <Icon size={26} />
                    <span>{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <a href="#contacto" aria-label={`Consultar por ${title}`}>
                    <ArrowUpRight size={20} />
                  </a>
                </div>
              ))}
            </div>
            <div className="support-cta">
              <div>
                <strong>
                  ¿Tu computadora tiene problemas o necesitas una red estable?
                </strong>
                <p>
                  Cuéntame qué sucede para evaluar el servicio o asesoramiento
                  que necesitas. Las reparaciones dependen del diagnóstico y
                  disponibilidad de componentes.
                </p>
              </div>
              <a className="btn primary" href="#contacto">
                Solicitar asesoramiento <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </section>
        <section id="contacto" className="section contact-section">
          <div className="container">
            <div className="contact-panel">
              <span className="section-kicker">06 / CONTACTO</span>
              <div className="contact-content">
                <div>
                  <h2>
                    ¿Tienes una idea?
                    <br />
                    <em>Hagámosla realidad.</em>
                  </h2>
                  <p>
                    ¿Necesitas una web, una aplicación, mantenimiento de
                    computadoras, instalación de redes o soporte técnico?
                    Conversemos sobre lo que necesitas.
                  </p>
                  <div className="contact-buttons">
                    {profile.email && (
                      <a
                        className="btn primary"
                        href={`mailto:${profile.email}?subject=${encodeURIComponent("Consulta sobre un proyecto")}`}
                      >
                        Enviar correo <Mail size={18} />
                      </a>
                    )}
                    {profile.whatsapp && (
                      <a
                        className="btn primary"
                        target="_blank"
                        rel="noreferrer"
                        href={`https://wa.me/${profile.whatsapp}?text=${encodeURIComponent("Hola Benjamin, me gustaría conversar sobre un proyecto.")}`}
                      >
                        Escribir por WhatsApp <Send size={18} />
                      </a>
                    )}
                    {!profile.email && !profile.whatsapp && (
                      <span className="contact-note">
                        Agrega tu correo o WhatsApp en <code>src/data.js</code>{" "}
                        para activar el contacto directo.
                      </span>
                    )}
                  </div>
                </div>
                <div className="contact-decoration" aria-hidden="true">
                  <span>@</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="container footer-inner">
          <Brand />
          <div>
            © {new Date().getFullYear()} Benjamin Cadillo. <span>✳</span>
          </div>
          <div className="footer-links">
            {profile.github && (
              <a target="_blank" rel="noreferrer" href={profile.github}>
                GitHub <ArrowUpRight size={13} />
              </a>
            )}
            {profile.linkedin && (
              <a target="_blank" rel="noreferrer" href={profile.linkedin}>
                LinkedIn <ArrowUpRight size={13} />
              </a>
            )}
            <a href="#inicio">Volver arriba ↑</a>
          </div>
        </div>
      </footer>
      {selected && (
        <div
          className="modal-backdrop"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setSelected(null);
          }}
        >
          <article
            className="modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <button
              className="modal-close"
              onClick={() => setSelected(null)}
              aria-label="Cerrar detalles"
            >
              <X />
            </button>
            <ProjectVisual p={selected} large />
            <div className="modal-body">
              <span className="section-kicker">
                {selected.category.toUpperCase()} / PROYECTO
              </span>
              <h2 id="modal-title">{selected.title}</h2>
              <p className="modal-lead">{selected.description}</p>
              <p>{selected.details}</p>
              <h3>Características</h3>
              <ul>
                {selected.highlights.map((x) => (
                  <li key={x}>
                    <Check size={17} />
                    {x}
                  </li>
                ))}
              </ul>
              <div className="project-tags">
                {selected.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <div className="modal-actions">
                {selected.demo && (
                  <a
                    className="btn primary"
                    target="_blank"
                    rel="noreferrer"
                    href={selected.demo}
                  >
                    Ver sitio <ExternalLink size={16} />
                  </a>
                )}
                {selected.repository && (
                  <a
                    className="btn secondary"
                    target="_blank"
                    rel="noreferrer"
                    href={selected.repository}
                  >
                    Código en GitHub <Github size={16} />
                  </a>
                )}
              </div>
            </div>
          </article>
        </div>
      )}
    </>
  );
}
function ProjectVisual({ p, large = false }) {
  const Icon = icons[p.icon] || Code2;
  return (
    <div
      className={`project-visual visual-${p.tone} ${large ? "visual-large" : ""}`}
    >
      {p.image ? (
        <img src={p.image} alt={`Captura de ${p.title}`} loading="lazy" />
      ) : (
        <>
          <div className="visual-grid" />
          <div className="visual-ring ring-a" />
          <div className="visual-ring ring-b" />
          <div className="visual-icon">
            <Icon size={large ? 66 : 48} strokeWidth={1.25} />
          </div>
          <span className="visual-letter">
            {p.category === "Móvil"
              ? "APP"
              : p.category === "IoT"
                ? "IOT"
                : p.category === "Gestión"
                  ? "SYS"
                  : "WEB"}
          </span>
        </>
      )}
    </div>
  );
}
function ProjectCard({ p, number, onOpen }) {
  return (
    <button
      className="project-card"
      onClick={onOpen}
      aria-label={`Ver detalles de ${p.title}`}
    >
      <div className="card-image">
        <ProjectVisual p={p} />
        <div className="project-image-label">{p.category}</div>
        <span className="project-open">
          <ArrowUpRight size={20} />
        </span>
      </div>
      <div className="card-body">
        <div className="card-meta">
          <span>PROYECTO {String(number).padStart(2, "0")}</span>
          <span>{p.featured ? "DESTACADO" : "PORTAFOLIO"}</span>
        </div>
        <h3>{p.title}</h3>
        <p>{p.description}</p>
        <div className="project-tags">
          {p.tags.slice(0, 3).map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </div>
    </button>
  );
}

createRoot(document.getElementById("root")).render(<App />);
