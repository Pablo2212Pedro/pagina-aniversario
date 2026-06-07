import Image from 'next/image'
import { Images, Heart } from 'lucide-react'

const photos = [
  { src: '/fotos/img1.png', title: 'Una foto especial' },
  { src: '/fotos/img2.jpg', title: 'Para siempre' },
  { src: '/fotos/img3.jpg', title: 'Recuerdo dulce' },
  { src: '/fotos/img4.jpg', title: 'Mi felicidad' },
  { src: '/fotos/img5.jpg', title: 'Nuestro momento' },
  { src: '/fotos/img6.jpg', title: 'Mi lugar favorito' },
  { src: '/fotos/img7.jpg', title: 'Siempre tú' },
  { src: '/fotos/img8.jpg', title: 'Mi persona bonita' },
  { src: '/fotos/img10.jpg', title: 'Una foto especial' },
  { src: '/fotos/img11.jpg', title: 'Recuerdo dulce' },
  { src: '/fotos/img12.jpg', title: 'Pequeños momentos' },
  { src: '/fotos/img13.jpg', title: 'Recuerdo bonito' },
  { src: '/fotos/img14.jpg', title: 'Sonrisas contigo' },
  { src: '/fotos/img15.jpg', title: 'Mi lugar seguro' },
  { src: '/fotos/img16.jpg', title: 'Nuestro amor' },
  { src: '/fotos/img17.jpg', title: 'Un instante perfecto' },
  { src: '/fotos/img18.jpg', title: 'Mi persona favorita' },
  { src: '/fotos/img19.jpg', title: 'Días felices' },
  { src: '/fotos/img21.jpg', title: 'Siempre juntos' },
  { src: '/fotos/img20.jpg', title: 'Momento bonito' },
  { src: '/fotos/img23.jpg', title: 'Mi foto favorita' },
  { src: '/fotos/img24.jpg', title: 'Recuerdo inolvidable' },
  { src: '/fotos/img25.jpg', title: 'Una aventura más' },
  { src: '/fotos/img28.jpg', title: 'Mi amor' },
  { src: '/fotos/img27.jpg', title: 'Una sonrisa contigo' },
  { src: '/fotos/img31.jpg', title: 'Mi alegría' },
  { src: '/fotos/img32.jpg', title: 'Contigo todo' },
  { src: '/fotos/img33.jpg', title: 'Nuestra historia' },
  { src: '/fotos/img34.jpg', title: 'Tú y yo' },
  { src: '/fotos/img35.jpg', title: 'Un recuerdo lindo' },
  { src: '/fotos/img36.jpg', title: 'Siempre en mi corazón' },
  { src: '/fotos/img37.jpg', title: 'Un instante perfecto' },
  { src: '/fotos/img38.jpg', title: 'Mi felicidad' },
  { src: '/fotos/img39.jpg', title: 'Para siempre' },
  { src: '/fotos/img40.jpg', title: 'Momento bonito' },
  { src: '/fotos/img41.jpg', title: 'Mi vida bonita' },
  { src: '/fotos/img42.jpg', title: 'Tu mirada bonita' },
  { src: '/fotos/img43.jpg', title: 'Mi amor bonito' },
  { src: '/fotos/img44.jpg', title: 'Nuestro para siempre' }
]

export function PhotoGallery() {
  return (
    <section id="galeria" className="container px-4 py-16">
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-rose-100 text-rose-600">
          <Images className="h-6 w-6" />
        </div>
        <p className="font-display text-5xl text-pink-500">Galería de fotos</p>
        <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Más pedacitos de nuestra historia</h2>
        
      </div>

      <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-white/70 bg-white/45 p-4 shadow-glow backdrop-blur-md sm:p-6 lg:p-8">
        <div className="grid justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {photos.map((photo, index) => (
            <article
              key={photo.src}
              className="group w-full max-w-[300px] overflow-hidden rounded-[2rem] border-4 border-white bg-white shadow-lg shadow-pink-200/40 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-pink-50">
                <Image
                  src={photo.src}
                  alt={photo.title}
                  fill
                  sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, (max-width: 1280px) 30vw, 300px"
                  className="object-cover object-center transition duration-500 group-hover:scale-110"
                  priority={index < 4}
                />
              </div>

              <div className="flex min-h-[76px] items-center justify-center px-4 py-4 text-center">
                <div className="flex items-center justify-center gap-2">
                  <Heart className="h-4 w-4 shrink-0 fill-pink-500 text-pink-500" />
                  <p className="text-sm font-bold text-pink-700">{photo.title}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
