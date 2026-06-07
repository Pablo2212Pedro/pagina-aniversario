'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const FECHA_INICIO = '2025-11-07T00:00:00'

type TimeTogether = {
  days: number
  hours: number
  minutes: number
  seconds: number
}

const initialTime: TimeTogether = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0
}

function getTimeTogether(): TimeTogether {
  const start = new Date(FECHA_INICIO).getTime()
  const now = Date.now()
  const diff = Math.max(0, now - start)

  const days = Math.floor(diff / (1000 * 60 * 60 * 24)) + 1
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((diff / (1000 * 60)) % 60)
  const seconds = Math.floor((diff / 1000) % 60)

  return { days, hours, minutes, seconds }
}

export function LoveCounter() {
  const [time, setTime] = useState<TimeTogether>(initialTime)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    setTime(getTimeTogether())

    const interval = window.setInterval(() => {
      setTime(getTimeTogether())
    }, 1000)

    return () => window.clearInterval(interval)
  }, [])

  const items = [
    { label: 'Días', value: time.days },
    { label: 'Horas', value: time.hours },
    { label: 'Minutos', value: time.minutes },
    { label: 'Segundos', value: time.seconds }
  ]

  return (
    <section className="container px-4 py-10">
      <Card className="glass-card overflow-hidden border-white/70 shadow-glow">
        <CardHeader className="text-center">
          <p className="font-display text-5xl text-pink-500">Nuestro tiempo juntos</p>
          <CardTitle className="text-2xl sm:text-3xl">Cada segundo contigo vale oro</CardTitle>
        </CardHeader>

        <CardContent>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {items.map((item) => (
              <div key={item.label} className="rounded-[1.5rem] bg-white/80 p-6 text-center shadow-sm">
                <p className="gradient-text text-4xl font-bold sm:text-5xl">
                  {isClient ? String(item.value).padStart(2, '0') : '--'}
                </p>

                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  )
}