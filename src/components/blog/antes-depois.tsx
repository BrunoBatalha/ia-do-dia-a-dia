import { ReactNode } from 'react'

interface AntesDepoisProps {
  antes: ReactNode
  depois: ReactNode
  tituloAntes?: string
  tituloDepois?: string
}

export function AntesDepois({
  antes,
  depois,
  tituloAntes = 'Antes',
  tituloDepois = 'Depois',
}: AntesDepoisProps) {
  return (
    <figure role="group" className="my-6 grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="rounded-lg border-2 border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-950/20 p-4">
        <p className="text-sm font-semibold text-red-600 dark:text-red-400 mb-2">{tituloAntes}</p>
        <div className="text-stone-700 dark:text-stone-300 text-sm [&>p]:m-0">{antes}</div>
      </div>
      <div className="rounded-lg border-2 border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/20 p-4">
        <p className="text-sm font-semibold text-green-600 dark:text-green-400 mb-2">{tituloDepois}</p>
        <div className="text-stone-700 dark:text-stone-300 text-sm [&>p]:m-0">{depois}</div>
      </div>
    </figure>
  )
}
