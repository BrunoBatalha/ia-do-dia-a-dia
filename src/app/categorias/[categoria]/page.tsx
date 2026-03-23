import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Sparkles, Wrench, BookOpen, GraduationCap, Newspaper, Inbox } from 'lucide-react'
import Link from 'next/link'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { PostCard } from '@/components/ui/post-card'
import { NewsletterCTA } from '@/components/ui/newsletter-cta'
import { CATEGORIES, getPostsByCategory } from '@/lib/mdx'

interface CategoriaPageProps {
  params: { categoria: string }
}

export async function generateStaticParams() {
  return CATEGORIES.map((cat) => ({ categoria: cat.slug }))
}

export async function generateMetadata({ params }: CategoriaPageProps): Promise<Metadata> {
  const category = CATEGORIES.find((c) => c.slug === params.categoria)
  if (!category) return {}

  return {
    title: category.name,
    description: category.description,
  }
}

const categoryIcons: Record<string, React.ReactNode> = {
  'ia-no-cotidiano': <Sparkles className="w-16 h-16" aria-hidden="true" />,
  ferramentas: <Wrench className="w-16 h-16" aria-hidden="true" />,
  conceitos: <BookOpen className="w-16 h-16" aria-hidden="true" />,
  tutoriais: <GraduationCap className="w-16 h-16" aria-hidden="true" />,
  noticias: <Newspaper className="w-16 h-16" aria-hidden="true" />,
}

export default function CategoriaPage({ params }: CategoriaPageProps) {
  const category = CATEGORIES.find((c) => c.slug === params.categoria)
  if (!category) notFound()

  const posts = getPostsByCategory(params.categoria)

  return (
    <>
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="pt-6 pb-2">
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Categorias', href: '/categorias' },
              { label: category.name },
            ]}
          />
        </div>
      </div>

      {/* Category Header */}
      <section className="py-12 text-center" aria-labelledby="category-heading">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-indigo-600 dark:text-indigo-400 flex justify-center mb-4">
            {categoryIcons[category.slug]}
          </div>
          <h1
            id="category-heading"
            className="text-3xl md:text-4xl font-bold text-stone-900 dark:text-stone-50"
          >
            {category.name}
          </h1>
          <p className="text-lg text-stone-600 dark:text-stone-400 max-w-2xl mx-auto mt-4">
            {category.description}
          </p>
          <span className="inline-block mt-4 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 px-3 py-1 rounded-full text-sm">
            {posts.length} artigos
          </span>
        </div>
      </section>

      {/* Posts */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          {posts.length === 0 ? (
            <div className="text-center py-16">
              <Inbox
                className="w-16 h-16 text-stone-300 dark:text-stone-600 mx-auto mb-4"
                aria-hidden="true"
              />
              <h2 className="text-xl font-semibold text-stone-900 dark:text-stone-50 mb-2">
                Ainda nao temos artigos nesta categoria
              </h2>
              <p className="text-stone-600 dark:text-stone-400 mb-6">
                Estamos preparando conteudo incrivel. Volte em breve!
              </p>
              <Link
                href="/categorias"
                className="border border-stone-300 dark:border-stone-600 text-stone-700 dark:text-stone-300 hover:bg-stone-50 dark:hover:bg-stone-800 px-6 py-2.5 rounded-lg font-medium text-sm transition-colors duration-200"
              >
                Ver todas as categorias
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          )}
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
