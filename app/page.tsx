import Link from 'next/link'
import { Images } from 'lucide-react'
import { FloatingHearts } from '@/components/floating-hearts'
import { HeroSection } from '@/components/hero-section'
import { LoveCounter } from '@/components/love-counter'
import { MemoryGallery } from '@/components/memory-gallery'
import { ReasonsSection } from '@/components/reasons-section'
import { TimelineSection } from '@/components/timeline-section'
import { LoveLetter } from '@/components/love-letter'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <main className="romantic-grid min-h-screen overflow-hidden">
      <FloatingHearts />
      <HeroSection />
      <LoveCounter />
      <MemoryGallery />

      <section className="container px-4 py-12 text-center">
        <div className="mx-auto max-w-3xl rounded-[2rem] border border-white/70 bg-white/70 p-8 shadow-glow backdrop-blur-md">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-pink-100 text-pink-600">
            <Images className="h-7 w-7" />
          </div>
          <p className="font-display text-5xl text-pink-500">Galería de fotos</p>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Mira nuestros recuerdos más bonitos</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Preparé una página especial para guardar más fotos de nuestra historia, momentos simples, salidas y recuerdos que siempre quiero tener presentes.
          </p>
          <Button asChild size="lg" className="mt-6">
            <Link href="/galeria">Abrir galería</Link>
          </Button>
        </div>
      </section>

      <ReasonsSection />
      <TimelineSection />
      <LoveLetter />
      <footer className="px-4 py-10 text-center text-sm text-muted-foreground">
        Hecho con amor para celebrar nuestra historia 💗
      </footer>
    </main>
  )
}
