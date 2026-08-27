'use client'

import Image from 'next/image'
import styles from './LogoCarousel.module.css'

const logos = [
  { name: 'Clínica Valero', src: '/logos/clinica-valero.png', url: 'https://fisioterapiaclinicavalero.com/' },
  { name: 'Casa el Campanario', src: '/logos/casa-campanario.png', url: 'https://woundmentor.armiva.ai/' },
  { name: 'Aprende a Curar', src: '/logos/aprende-a-curar.png', url: 'https://www.aprendeacurar.com/' },
  { name: 'WoundMentor', src: '/logos/woundmentor.png', url: 'https://woundmentor.armiva.ai/' },
]

export default function LogoCarousel() {
  const tripled = [...logos, ...logos, ...logos]

  return (
    <div className={styles.wrapper}>
      <div className={styles.fadeLeft} />
      <div className={styles.track}>
        <div className={styles.inner}>
          {tripled.map((logo, i) => (
            <a
              key={i}
              href={logo.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.logo}
              aria-label={logo.name}
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={120}
                height={60}
                style={{ objectFit: 'contain', width: 'auto', height: '48px' }}
              />
            </a>
          ))}
        </div>
      </div>
      <div className={styles.fadeRight} />
    </div>
  )
}
