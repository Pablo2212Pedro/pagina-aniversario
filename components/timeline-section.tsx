import { CalendarDays } from 'lucide-react'

const steps = [
  { date: 'Día 1', title: 'Cuando empezó todo', text: 'Ese momento que sin saberlo se convirtió en el inicio de algo hermoso.' },
  { date: 'Nuestro camino', title: 'Aprendimos juntos', text: 'Con detalles, paciencia, risas, dias dificiles pero con las mismas ganas de intentarlo porque se que lo nuestro sera algo muy duradero y hermoso.' },
  { date: 'Hoy', title: 'Nuestro aniversario', text: 'Un día para mirar atrás con cariño y mirar adelante con ilusión.' }
]

export function TimelineSection() {
  return (
    <section className="container px-4 py-16">
      <div className="mx-auto max-w-3xl text-center">
        <CalendarDays className="mx-auto mb-4 h-10 w-10 text-pink-500" />
        <p className="font-display text-5xl text-pink-500">Nuestra historia</p>
        <h2 className="text-3xl font-bold sm:text-4xl">Un camino que quiero seguir contigo</h2>
      </div>

      <div className="mx-auto mt-10 max-w-4xl space-y-5">
        {steps.map((step, index) => (
          <div key={step.title} className="glass-card flex gap-5 rounded-[2rem] p-5 shadow-sm">
            <div className="flex flex-col items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-500 font-bold text-white">{index + 1}</div>
              {index < steps.length - 1 && <div className="mt-3 h-16 w-px bg-pink-200" />}
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-pink-500">{step.date}</p>
              <h3 className="mt-1 text-xl font-bold">{step.title}</h3>
              <p className="mt-2 leading-7 text-muted-foreground">{step.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
