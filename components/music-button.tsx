'use client'

import { useRef, useState } from 'react'
import { Music, Pause } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function MusicButton() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [playing, setPlaying] = useState(false)

  const toggleMusic = async () => {
    if (!audioRef.current) return

    if (playing) {
      audioRef.current.pause()
      setPlaying(false)
      return
    }

    try {
      await audioRef.current.play()
      setPlaying(true)
    } catch {
      alert('Agrega una canción en public/musica/cancion.mp3 para activar la música.')
    }
  }

  return (
    <>
      <Button type="button" variant="secondary" size="lg" onClick={toggleMusic}>
        {playing ? <Pause className="mr-2 h-5 w-5" /> : <Music className="mr-2 h-5 w-5" />}
        {playing ? 'Pausar canción' : 'Reproducir canción'}
      </Button>
      <audio ref={audioRef} src="/musica/cancion1.mp3" loop preload="none" />
    </>
  )
}
