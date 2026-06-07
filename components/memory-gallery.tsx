import Image from 'next/image'
import { Camera } from 'lucide-react'

const memories = [
  { src: '/fotos/img13.jpg', title: 'Nuestro primer recuerdo bonito', text: 'Ese momento donde todo empezó a sentirse especial.' },
  { src: '/fotos/img3.jpg', title: 'Una sonrisa que me salva', text: 'Porque verte feliz siempre será mi parte favorita.' },
  { src: '/fotos/img5.jpg', title: 'Momentos simples', text: 'Los días normales contigo se vuelven inolvidables.' },
  { src: '/fotos/img17.jpg', title: 'Lo que quiero cuidar', text: 'Nuestro amor, nuestra confianza y nuestra historia.' }
]

export function MemoryGallery() {
  return (
    <section id="recuerdos" className="container px-4 py-16">
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-pink-100 text-pink-600">
          <Camera className="h-6 w-6" />
        </div>
        <p className="font-display text-5xl text-pink-500">Nuestros recuerdos</p>
        <h2 className="text-3xl font-bold sm:text-4xl">Pequeños momentos que se volvieron enormes</h2>
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {memories.map((memory) => (
          <article key={memory.title} className="group overflow-hidden rounded-[2rem] bg-white p-3 shadow-lg shadow-pink-200/40 transition hover:-translate-y-2">
            <div className="overflow-hidden rounded-[1.5rem]">
              <Image src={memory.src} alt={memory.title} width={500} height={600} className="h-72 w-full object-cover transition duration-500 group-hover:scale-105" />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold text-pink-700">{memory.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{memory.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
