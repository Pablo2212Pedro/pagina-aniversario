import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import { Great_Vibes, Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans'
})

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-display'
})

export const metadata: Metadata = {
  title: 'Feliz aniversario, mi amor',
  description: 'Una página web romántica de aniversario creada con Next.js, React y Tailwind CSS.'
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={`${poppins.variable} ${greatVibes.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
