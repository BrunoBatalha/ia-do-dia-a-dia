import type { Metadata } from 'next'
import Link from 'next/link'
import { Sparkles, Wrench, BookOpen, GraduationCap, Newspaper } from 'lucide-react'
import { NewsletterCTA } from '@/components/ui/newsletter-cta'
import { CATEGORIES, getCategoryPostCount } from '@/lib/mdx'

export const metadata: Metadata = {
  title: 'Categorias',
  description: 'Explore nossos artigos organizados por tema.',
}

const categoryIcons: Record<string, React.ReactNode> = {
  'ia-no-cotidiano': <Sparkles className="w-10 h-10" aria-hidden="true" />,
  ferramentas: <Wrench className="w-10 h-10" aria-hidden="true" />,
  conceitos: <BookOpen className="w-10 h-10" aria-hidden="true" />,
  tutoriais: <GraduationCap className="w-10 h-10" aria-hidden="true" />,
  noticias: <Newspaper className="w-10 h-10" aria-hidden="true" />,
}

export default function CategoriasPage() {
  const postCounts = getCategoryPostCount()

  return (
    <>
      <section className="py-12 md:py-16 bg-gradient-to-b from-indigo-50 to-stone-50 dark:from-stone-900 dark:to-stone-900">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-stone-900 dark:text-stone-50 mb-3">
            Categorias
          </h1>
          <p className="text-lg text-stone-600 dark:text-stone-400">
            Explore nossos artigos organizados por tema.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                href={`/categorias/${cat.slug}`}
                className="group bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl p-6 hover:shadow-md hover:border-indigo-300 dark:hover:border-indigo-600 transition-all duration-200"
              >
                <div className="text-indigo-600 dark:text-indigo-400 mb-4">
                  {categoryIcons[cat.slug]}
                </div>
                <h2 className="text-xl font-semibold text-stone-900 dark:text-stone-50 mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200">
                  {cat.name}
                </h2>
                <p className="text-sm text-stone-600 dark:text-stone-400 mt-2">
                  {cat.description}
                </p>
                <p className="text-xs text-stone-500 dark:text-stone-400 mt-3">
                  {postCounts[cat.slug] ?? 0} artigos
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <NewsletterCTA />
        </div>
      </section>
    </>
  )
}
