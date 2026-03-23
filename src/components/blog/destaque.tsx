import { ReactNode } from 'react'

interface DestaqueProps {
  children: ReactNode
}

export function Destaque({ children }: DestaqueProps) {
  return (
    <div
      role="note"
      className="my-6 rounded-lg border-l-4 border-sky-500 bg-gradient-to-r from-sky-50 to-transparent dark:from-sky-950/30 dark:to-transparent p-4 text-stone-700 dark:text-stone-300 text-sm [&>p]:m-0"
    >
      {children}
    </div>
  )
}
