import { HeartHandshake, Smile, Star, Sun } from 'lucide-react'

const reasons = [
  { icon: Smile, title: 'Por tu sonrisa', text: 'Porque tienes esa forma tan bonita de mejorarme cualquier día.' },
  { icon: HeartHandshake, title: 'Por tu manera de amar', text: 'Porque contigo aprendí que el amor también es cuidado y paz.' },
  { icon: Star, title: 'Por ser única', text: 'Porque no existe nadie como tú, y eso me encanta cada día más.' },
  { icon: Sun, title: 'Por tu luz', text: 'Porque haces que mi mundo se sienta más cálido y bonito.' }
]

export function ReasonsSection() {
  return (
    <section className="container px-4 py-16">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="font-display text-5xl text-pink-500">Razones por las que te amo</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Podría escribir mil, pero aquí van algunas</h2>
          <p className="mt-5 leading-8 text-muted-foreground">
            Esta sección es para recordarte que no te amo solo por un día especial, sino por cada detalle que te hace ser tú.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {reasons.map(({ icon: Icon, title, text }) => (
            <div key={title} className="glass-card rounded-[2rem] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-rose-400 text-white">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-pink-700">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
