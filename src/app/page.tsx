import Link from 'next/link'
import { Sparkles, BookOpen, Wrench, GraduationCap, Newspaper } from 'lucide-react'
import { PostCard } from '@/components/ui/post-card'
import { NewsletterCTA } from '@/components/ui/newsletter-cta'
import { getAllPosts, CATEGORIES, getCategoryPostCount } from '@/lib/mdx'

const categoryIcons: Record<string, React.ReactNode> = {
  'ia-no-cotidiano': <Sparkles className="w-6 h-6" aria-hidden="true" />,
  ferramentas: <Wrench className="w-6 h-6" aria-hidden="true" />,
  conceitos: <BookOpen className="w-6 h-6" aria-hidden="true" />,
  tutoriais: <GraduationCap className="w-6 h-6" aria-hidden="true" />,
  noticias: <Newspaper className="w-6 h-6" aria-hidden="true" />,
}

export default function HomePage() {
  const allPosts = getAllPosts()
  const featuredPost = allPosts[0]
  const recentPosts = allPosts.slice(1, 7)
  const postCounts = getCategoryPostCount()

  return (
    <>
      {/* Hero Section */}
      <section
        className="bg-gradient-to-b from-indigo-50 to-stone-50 dark:from-stone-900 dark:to-stone-900 py-12 md:py-16 lg:py-24"
        aria-labelledby="hero-heading"
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h1
            id="hero-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-stone-900 dark:text-stone-50 mb-4"
          >
            IA explicada de um jeito que voce entende.
          </h1>
          <p className="text-lg md:text-xl text-stone-600 dark:text-stone-400 max-w-2xl mx-auto mb-8">
            Artigos semanais sobre inteligencia artificial para quem quer aprender sem complicacao.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog"
              className="bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white px-6 py-2.5 rounded-lg font-medium text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Explorar artigos
            </Link>
            <Link
              href="/sobre"
              className="border border-stone-300 dark:border-stone-600 text-stone-700 dark:text-stone-300 hover:bg-stone-50 dark:hover:bg-stone-800 px-6 py-2.5 rounded-lg font-medium text-sm transition-colors duration-200"
            >
              Sobre o blog
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-12" aria-labelledby="featured-post-section">
          <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
            <PostCard post={featuredPost} variant="hero" />
          </div>
        </section>
      )}

      {/* Recent Posts */}
      {recentPosts.length > 0 && (
        <section className="py-12" aria-labelledby="recent-posts-heading">
          <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h2
                id="recent-posts-heading"
                className="text-2xl font-bold text-stone-900 dark:text-stone-50"
              >
                Ultimos artigos
              </h2>
              <Link
                href="/blog"
                className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline underline-offset-2"
              >
                Ver todos &rarr;
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentPosts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* No posts state */}
      {allPosts.length === 0 && (
        <section className="py-12">
          <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 text-center">
            <p className="text-stone-600 dark:text-stone-400">
              Nenhum artigo publicado ainda. Volte em breve!
            </p>
          </div>
        </section>
      )}

      {/* Categories */}
      <section className="py-12 bg-stone-50/50 dark:bg-stone-900/50" aria-labelledby="categories-heading">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <h2
            id="categories-heading"
            className="text-2xl font-bold text-stone-900 dark:text-stone-50 text-center mb-8"
          >
            Explore por tema
          </h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                href={`/categorias/${cat.slug}`}
                className="flex items-center gap-3 px-6 py-4 rounded-xl bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 hover:border-indigo-300 dark:hover:border-indigo-600 hover:shadow-sm transition-all duration-200"
              >
                <span className="text-indigo-600 dark:text-indigo-400">
                  {categoryIcons[cat.slug]}
                </span>
                <div>
                  <span className="block font-medium text-stone-900 dark:text-stone-50 text-sm">
                    {cat.name}
                  </span>
                  <span className="block text-xs text-stone-500 dark:text-stone-400">
                    {postCounts[cat.slug] ?? 0} artigos
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <NewsletterCTA />
        </div>
      </section>
    </>
  )
}
