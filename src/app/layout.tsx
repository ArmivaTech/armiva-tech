import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Armiva Tech — Inteligencia Artificial para Empresas',
  description: 'Consultoría, desarrollo de producto y automatización con IA para empresas. Transformamos tus procesos con inteligencia artificial aplicada. Basados en Elche, trabajamos en toda España.',
  keywords: 'inteligencia artificial empresas, consultoría IA, desarrollo IA, automatización procesos, MVP inteligencia artificial, IA aplicada España',
  authors: [{ name: 'Armiva Tech' }],
  openGraph: {
    title: 'Armiva Tech — Inteligencia Artificial para Empresas',
    description: 'Consultoría, desarrollo de producto y automatización con IA para empresas en España.',
    url: 'https://armiva.ai',
    siteName: 'Armiva Tech',
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Armiva Tech — Inteligencia Artificial para Empresas',
    description: 'Consultoría, desarrollo de producto y automatización con IA para empresas en España.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: 'https://armiva.ai',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={inter.variable}>{children}</body>
    </html>
  )
}
