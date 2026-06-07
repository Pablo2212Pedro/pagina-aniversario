import * as Dialog from '@radix-ui/react-dialog'
import { Heart, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function LoveLetter() {
  return (
    <section id="carta" className="container px-4 py-16">
      <div className="glass-card mx-auto max-w-4xl rounded-[2.5rem] p-8 text-center shadow-glow sm:p-12">
        <p className="font-display text-5xl text-pink-500">Una carta para ti</p>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Mi amor, gracias por existir</h2>
        <p className="mx-auto mt-5 max-w-2xl leading-8 text-muted-foreground">
          Quise hacerte algo diferente, algo que puedas abrir y recordar que eres una parte muy especial en mi vida.
        </p>

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <Button size="lg" className="mt-8">
              <Heart className="mr-2 h-5 w-5 fill-white" />
              Abrir carta completa
            </Button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 z-50 bg-pink-950/40 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out" />
            <Dialog.Content className="fixed left-1/2 top-1/2 z-50 max-h-[88vh] w-[92vw] max-w-2xl -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-[2rem] bg-white p-7 shadow-2xl outline-none sm:p-10">
              <Dialog.Close className="absolute right-5 top-5 rounded-full p-2 text-pink-700 hover:bg-pink-50">
                <X className="h-5 w-5" />
              </Dialog.Close>
              <Dialog.Title className="font-display text-5xl text-pink-500">Para mi amor</Dialog.Title>
              <Dialog.Description className="sr-only">Carta romántica de aniversario.</Dialog.Description>
              <div className="mt-6 space-y-5 text-left leading-8 text-muted-foreground">
                <p>Para ti mi amor, hoy es un dia muy especial para los dos y quiero recordarte lo mucho que significas para mí.</p>
                <p>
                  Gracias por cada momento, por cada risa, por cada abrazo y por hacerme sentir que el amor puede ser bonito,
                  tranquilo y real. Desde que llegaste a mi vida, muchas cosas tienen más sentido.
                </p>
                <p>
                  No prometo ser perfecto, pero sí prometo seguir eligiéndote, cuidándote y construyendo contigo una historia
                  que nos haga felices. Feliz aniversario, mi vida. Te amo más de lo que estas palabras pueden decir.
                </p>
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </section>
  )
}
