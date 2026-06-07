import Link from 'next/link'
import { ArrowLeft, Heart } from 'lucide-react'
import { FloatingHearts } from '@/components/floating-hearts'
import { PhotoGallery } from '@/components/photo-gallery'
import { Button } from '@/components/ui/button'

export const metadata = {
  title: 'Galería de fotos | Feliz aniversario',
  description: 'Una galería romántica con los recuerdos más bonitos de nuestra historia.'
}

export default function GaleriaPage() {
  return (
    <main className="romantic-grid min-h-screen overflow-hidden">
      <FloatingHearts />

      <section className="container px-4 pb-4 pt-10">
        <Button asChild variant="secondary">
          <Link href="/" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Volver al inicio
          </Link>
        </Button>

        <div className="mx-auto mt-8 max-w-4xl text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-rose-100 text-rose-600">
            <Heart className="h-7 w-7 fill-rose-500" />
          </div>
          <p className="font-display text-6xl text-pink-500">Nuestros recuerdos</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Galería de fotos
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            Un espacio especial para guardar las fotos que cuentan nuestra historia de amor.
          </p>
        </div>
      </section>

      <PhotoGallery />

      <footer className="px-4 py-10 text-center text-sm text-muted-foreground">
        Cada foto guarda un pedacito de lo que somos 💗
      </footer>
    </main>
  )
}
