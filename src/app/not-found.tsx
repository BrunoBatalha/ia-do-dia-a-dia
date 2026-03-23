import Link from 'next/link'
import { FileX } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <FileX
        className="w-16 h-16 text-stone-300 dark:text-stone-600 mb-4"
        aria-hidden="true"
      />
      <h1 className="text-3xl font-bold text-stone-900 dark:text-stone-50 mb-2">
        Pagina nao encontrada
      </h1>
      <p className="text-stone-600 dark:text-stone-400 mb-8 max-w-md">
        A pagina que voce procura nao existe ou foi removida.
      </p>
      <Link
        href="/"
        className="bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white px-6 py-2.5 rounded-lg font-medium text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Voltar para a home
      </Link>
    </div>
  )
}
