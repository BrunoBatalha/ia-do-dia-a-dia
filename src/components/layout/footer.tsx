import Link from 'next/link'
import { Sparkles } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/sobre', label: 'Sobre' },
  { href: '/categorias', label: 'Categorias' },
]

const categoryLinks = [
  { href: '/categorias/ia-no-cotidiano', label: 'IA no Cotidiano' },
  { href: '/categorias/ferramentas', label: 'Ferramentas' },
  { href: '/categorias/conceitos', label: 'Conceitos' },
  { href: '/categorias/tutoriais', label: 'Tutoriais' },
]

export function Footer() {
  return (
    <footer className="bg-stone-100 dark:bg-stone-800">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link
              href="/"
              className="flex items-center gap-2 text-lg font-bold text-stone-900 dark:text-stone-50 hover:opacity-80 transition-opacity mb-3"
            >
              <Sparkles className="w-5 h-5 text-indigo-600 dark:text-indigo-400" aria-hidden="true" />
              <span>IA do Dia a Dia</span>
            </Link>
            <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed max-w-xs">
              Inteligencia artificial explicada de um jeito que voce entende. Artigos semanais, sem complicacao.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-stone-900 dark:text-stone-50 uppercase tracking-wide mb-4">
              Navegacao
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-stone-600 dark:text-stone-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-sm font-semibold text-stone-900 dark:text-stone-50 uppercase tracking-wide mb-4">
              Categorias
            </h3>
            <ul className="space-y-2">
              {categoryLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-stone-600 dark:text-stone-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-200 dark:border-stone-700 mt-8 pt-8">
          <p className="text-xs text-stone-500 dark:text-stone-400 text-center">
            &copy; {new Date().getFullYear()} IA do Dia a Dia. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
