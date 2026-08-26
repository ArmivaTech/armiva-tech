import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import CursorTracker from '@/components/CursorTracker'
import RevealOnScroll from '@/components/RevealOnScroll'
import styles from './page.module.css'

const RobotTracker = dynamic(() => import('@/components/RobotTracker'), { ssr: false })

const services = [
  {
    num: '01',
    title: 'Consultoría de IA',
    desc: 'Analizamos tu negocio, identificamos dónde la IA genera más impacto y te entregamos una hoja de ruta accionable. Sin tecnicismos, sin inversión inicial a ciegas.',
    tags: ['Auditoría de procesos', 'Roadmap 6-12 meses', 'Acompañamiento técnico'],
  },
  {
    num: '02',
    title: 'Desarrollo de producto',
    desc: 'De la idea al MVP con IA integrada desde el primer día. Construimos contigo o para ti, en 8 a 12 semanas, con modelos que realmente cambian tu propuesta de valor.',
    tags: ['Discovery + prototipado', 'MVP en 8-12 semanas', 'Iteración con usuarios reales'],
  },
  {
    num: '03',
    title: 'Automatización de procesos',
    desc: 'Conectamos modelos de IA con tus sistemas, datos y flujos de trabajo actuales. Reducimos tareas repetitivas y liberamos a tu equipo para lo que realmente importa.',
    tags: ['Integración con tus herramientas', 'Asistentes internos', 'Informes automáticos'],
  },
  {
    num: '04',
    title: 'Partnerships estratégicos',
    desc: 'Co-creamos soluciones de IA para sectores específicos. Compartimos riesgo, equipo e infraestructura para llegar más lejos juntos.',
    tags: ['Joint ventures sectoriales', 'I+D conjunto', 'Licencias de tecnología'],
  },
]

const steps = [
  { num: '01', title: 'Diagnóstico', desc: 'Revisamos tu negocio, tus herramientas y tus cuellos de botella. En una llamada de 30 minutos identificamos los casos de uso con más impacto.' },
  { num: '02', title: 'Propuesta', desc: 'Te entregamos un plan concreto: qué construir, cuánto tarda, qué resultado esperar. Sin letra pequeña ni compromisos a ciegas.' },
  { num: '03', title: 'Ejecución', desc: 'Construimos, iteramos y medimos. Trabajamos en ciclos cortos para que veas resultados reales antes de escalar.' },
  { num: '04', title: 'Escala', desc: 'Una vez validado, optimizamos y expandimos la solución. Tu equipo queda formado y autónomo para seguir evolucionando.' },
]

const stats = [
  { value: '3+', label: 'Sectores activos', sub: 'Educación, salud y empresa' },
  { value: '100%', label: 'IA en el core', sub: 'De todos nuestros proyectos' },
  { value: '< 2sem', label: 'Primer prototipo', sub: 'De idea a MVP funcional' },
  { value: '24h', label: 'Respuesta garantizada', sub: 'A cualquier consulta' },
]

export default function Home() {
  return (
    <>
      <CursorTracker />
      <RevealOnScroll />
      <Navbar />

      {/* ── HERO ── */}
      <section className={styles.hero} id="top">
        <div className={`wrap ${styles.heroInner}`}>
          <div className={styles.heroText}>
            <span className="label reveal">Inteligencia Artificial Aplicada</span>
            <h1 className={styles.heroTitle}>
              <span className="reveal" data-delay="1">La IA que</span>
              <span className={`reveal grad-text ${styles.heroItalic}`} data-delay="2">transforma</span>
              <span className="reveal" data-delay="3">tu empresa.</span>
            </h1>
            <p className={`${styles.heroSub} reveal`} data-delay="4">
              Convertimos inteligencia artificial en resultados medibles para tu negocio.
              Consultoría, desarrollo de producto y automatización para empresas que quieren
              ir más allá del hype.
            </p>
            <div className={`${styles.heroCta} reveal`} data-delay="5">
              <a href="#contacto" className="btn-primary">
                Solicitar demo gratuita
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"/><path d="M13 6l6 6-6 6"/>
                </svg>
              </a>
              <a href="#servicios" className="btn-ghost">Ver servicios</a>
            </div>
            <div className={`${styles.heroMeta} reveal`} data-delay="5">
              <span>Basados en Elche · España</span>
              <span>·</span>
              <span>Proyectos en toda España</span>
            </div>
          </div>

          <div className={styles.heroRobot}>
            <RobotTracker />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className={styles.scrollHint}>
          <span>Scroll</span>
          <div className={styles.scrollLine} />
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div className={styles.marquee} aria-hidden="true">
        <div className={styles.marqueeInner}>
          {['IA Aplicada', 'Consultoría', 'Automatización', 'MVP en 2 semanas', 'Educación · Salud · Empresa', 'Elche · España', 'IA Aplicada', 'Consultoría', 'Automatización', 'MVP en 2 semanas', 'Educación · Salud · Empresa', 'Elche · España'].map((t, i) => (
            <span key={i} className={styles.marqueeItem}>{t}</span>
          ))}
        </div>
      </div>

      {/* ── SERVICES ── */}
      <section className={styles.section} id="servicios">
        <div className="wrap">
          <div className={styles.sectionHead}>
            <span className="label reveal">Nuestros servicios</span>
            <div>
              <h2 className={`${styles.sectionTitle} reveal`} data-delay="1">
                Lo que hacemos<br />
                <span className="grad-text">con tu empresa.</span>
              </h2>
              <p className={`${styles.sectionLead} reveal`} data-delay="2">
                Cada proyecto empieza por entender dónde la IA puede cambiar un resultado real.
                Después decidimos si hace falta consultoría, un producto nuevo o una automatización.
              </p>
            </div>
          </div>

          <div className={styles.serviceGrid}>
            {services.map((s, i) => (
              <article key={s.num} className={`${styles.serviceCard} reveal`} data-delay={String(i % 2 + 1)}>
                <span className={styles.serviceNum}>{s.num}</span>
                <h3 className={styles.serviceTitle}>{s.title}</h3>
                <p className={styles.serviceDesc}>{s.desc}</p>
                <ul className={styles.serviceTags}>
                  {s.tags.map(t => (
                    <li key={t} className={styles.serviceTag}>{t}</li>
                  ))}
                </ul>
                <a href="#contacto" className={styles.serviceLink}>
                  Solicitar este servicio
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"/><path d="M13 6l6 6-6 6"/>
                  </svg>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className={styles.section} id="proceso">
        <div className="wrap">
          <div className={styles.sectionHead}>
            <span className="label reveal">Cómo trabajamos</span>
            <h2 className={`${styles.sectionTitle} reveal`} data-delay="1">
              Cuatro pasos.<br />
              <span className="grad-text">Un resultado.</span>
            </h2>
          </div>

          <div className={styles.processList}>
            {steps.map((s, i) => (
              <div key={s.num} className={`${styles.processItem} reveal`} data-delay={String(i % 3)}>
                <span className={styles.processNum}>{s.num}</span>
                <div className={styles.processContent}>
                  <h3 className={styles.processTitle}>{s.title}</h3>
                  <p className={styles.processDesc}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── IMPACT ── */}
      <section className={styles.section} id="impacto">
        <div className="wrap">
          <span className="label reveal">Resultados reales</span>
          <div className={styles.statsGrid}>
            {stats.map((s, i) => (
              <div key={s.label} className={`${styles.stat} reveal`} data-delay={String(i)}>
                <div className={`${styles.statValue} grad-text`}>{s.value}</div>
                <div className={styles.statLabel}>{s.label}</div>
                <div className={styles.statSub}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section className={styles.contactSection} id="contacto">
        <div className="wrap">
          <div className={styles.contactInner}>
            <span className="label reveal">Empecemos</span>
            <h2 className={`${styles.contactTitle} reveal`} data-delay="1">
              ¿Listo para aplicar<br />
              <span className="grad-text">IA en tu empresa?</span>
            </h2>
            <p className={`${styles.contactSub} reveal`} data-delay="2">
              Cuéntanos qué necesita tu equipo. Te respondemos en menos de 24 horas
              con un diagnóstico inicial gratuito y sin compromiso.
            </p>

            <form className={`${styles.form} reveal`} data-delay="3" name="armiva-contact" method="POST" data-netlify="true">
              <input type="hidden" name="form-name" value="armiva-contact" />
              <div className={styles.formRow}>
                <input type="text" name="nombre" placeholder="Nombre" className={styles.input} required />
                <input type="text" name="empresa" placeholder="Empresa" className={styles.input} />
              </div>
              <input type="email" name="email" placeholder="Email de trabajo" className={styles.input} required />
              <textarea name="mensaje" placeholder="Cuéntanos brevemente qué quieres mejorar con IA" className={styles.textarea} rows={4} />
              <button type="submit" className={`btn-primary ${styles.formBtn}`}>
                Enviar mensaje
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"/><path d="M13 6l6 6-6 6"/>
                </svg>
              </button>
            </form>

            <p className={`${styles.contactMeta} reveal`} data-delay="4">
              También puedes escribirnos directamente a{' '}
              <a href="mailto:hola@armiva.ai" className={styles.contactEmail}>hola@armiva.ai</a>
            </p>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className={styles.footer}>
        <div className="wrap">
          <div className={styles.footerInner}>
            <span className={styles.footerBrand}>
              <span className="grad-text">A</span>rmiva Tech
            </span>
            <span className={styles.footerCopy}>© 2026 Armiva Tech · Elche, España</span>
            <div className={styles.footerLinks}>
              <a href="#servicios">Servicios</a>
              <a href="#proceso">Proceso</a>
              <a href="mailto:hola@armiva.ai">Contacto</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
