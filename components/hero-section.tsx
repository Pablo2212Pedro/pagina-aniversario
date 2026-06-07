import Image from 'next/image'
import { CalendarHeart, Heart, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { MusicButton } from '@/components/music-button'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-10 sm:pt-16">
      <div className="container grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-7 text-center lg:text-left">
          

          <div className="space-y-4">
            <p className="font-display text-5xl text-pink-500 sm:text-7xl">Feliz aniversario</p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Para la niña que hace mi mundo mas bonito.
            </h1>
            <p className="mx-auto max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg lg:mx-0">
              Esta página guarda un pedacito de nuestra historia: Los momentos, las sonrisas
              y todo lo que todavía nos falta vivir juntos.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
            <Button asChild size="lg">
              <a href="#carta">
                <Heart className="mr-2 h-5 w-5 fill-white" />
                Leer mi carta
              </a>
            </Button>
            <MusicButton />
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {['Amor', 'Recuerdos', 'Siempre'].map((item) => (
              <div key={item} className="glass-card rounded-3xl px-5 py-4 text-center shadow-sm">
                <CalendarHeart className="mx-auto mb-2 h-5 w-5 text-pink-500" />
                <p className="text-sm font-semibold text-pink-700">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
          <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-pink-300/60 via-rose-200/60 to-amber-200/60 blur-2xl" />
          <div className="photo-frame relative overflow-hidden rounded-[3rem] border-8 border-white bg-white shadow-glow rotate-2">
            <Image
              src="/fotos/img15.jpg"
              alt="Foto principal de aniversario"
              width={700}
              height={850}
              priority
              className="h-[560px] w-full object-cover"
            />
            <div className="absolute inset-x-5 bottom-5 rounded-3xl bg-white/75 p-5 backdrop-blur-md">
              <p className="font-display text-4xl text-pink-500">Tú y yo Mi Amor</p>
              <p className="text-sm text-muted-foreground">Mi lugar favorito siempre será estar a tu lado.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
