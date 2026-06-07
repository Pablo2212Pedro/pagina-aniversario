import { Heart } from 'lucide-react'

const hearts = [
  'left-[8%] top-[12%] delay-0',
  'left-[82%] top-[10%] delay-700',
  'left-[18%] top-[64%] delay-1000',
  'left-[75%] top-[72%] delay-500',
  'left-[48%] top-[20%] delay-300'
]

export function FloatingHearts() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {hearts.map((position, index) => (
        <Heart
          key={position}
          className={`absolute ${position} h-8 w-8 animate-float fill-pink-200/40 text-pink-300/50 blur-[0.2px]`}
          style={{ animationDuration: `${5 + index}s` }}
        />
      ))}
    </div>
  )
}
