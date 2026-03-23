import type { Metadata } from 'next'
import { FileSearch } from 'lucide-react'
import Link from 'next/link'
import { PostCard } from '@/components/ui/post-card'
import { NewsletterCTA } from '@/components/ui/newsletter-cta'
import { getAllPosts } from '@/lib/mdx'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Todos os artigos sobre inteligencia artificial do IA do Dia a Dia.',
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <>
      <section className="py-12 md:py-16 bg-gradient-to-b from-indigo-50 to-stone-50 dark:from-stone-900 dark:to-stone-900">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-stone-900 dark:text-stone-50 mb-3">
            Todos os artigos
          </h1>
          <p className="text-lg text-stone-600 dark:text-stone-400">
            Explore nossa colecao de artigos sobre inteligencia artificial.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          {posts.length === 0 ? (
            <div className="text-center py-16">
              <FileSearch
                className="w-16 h-16 text-stone-300 dark:text-stone-600 mx-auto mb-4"
                aria-hidden="true"
              />
              <h2 className="text-xl font-semibold text-stone-900 dark:text-stone-50 mb-2">
                Nenhum artigo encontrado
              </h2>
              <p className="text-stone-600 dark:text-stone-400 mb-6">
                Tente buscar por outro termo ou explore nossas categorias.
              </p>
              <Link
                href="/categorias"
                className="border border-stone-300 dark:border-stone-600 text-stone-700 dark:text-stone-300 hover:bg-stone-50 dark:hover:bg-stone-800 px-6 py-2.5 rounded-lg font-medium text-sm transition-colors duration-200"
              >
                Ver categorias
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
