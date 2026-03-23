import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getAllPosts, getPostBySlug, getRelatedPosts } from '@/lib/mdx'
import { formatDateLong, slugify } from '@/lib/utils'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { CategoryBadge } from '@/components/ui/category-badge'
import { PostCard } from '@/components/ui/post-card'
import { NewsletterCTA } from '@/components/ui/newsletter-cta'
import { ScrollToTop } from '@/components/ui/scroll-to-top'
import { ShareButtons } from '@/components/ui/share-buttons'
import { TableOfContents, extractTocItems } from '@/components/ui/table-of-contents'
import { Callout, ExplicaConceito, QuizRapido, AntesDepois, Destaque } from '@/components/blog'

interface PostPageProps {
  params: { slug: string }
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const post = getPostBySlug(params.slug)
  if (!post) return {}

  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      type: 'article',
      publishedTime: post.frontmatter.date,
      ...(post.frontmatter.coverImage && {
        images: [{ url: post.frontmatter.coverImage }],
      }),
    },
    twitter: {
      card: 'summary_large_image',
      title: post.frontmatter.title,
      description: post.frontmatter.description,
    },
  }
}

export default function PostPage({ params }: PostPageProps) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  const { frontmatter, content, readingTime } = post
  const tocItems = extractTocItems(content)
  const categorySlug = slugify(frontmatter.category)
  const relatedPosts = getRelatedPosts(params.slug, frontmatter.category)
  const postUrl = `https://iadodiaadia.com.br/blog/${params.slug}`

  return (
    <>
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="pt-6 pb-2">
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: frontmatter.category, href: `/categorias/${categorySlug}` },
              { label: frontmatter.title },
            ]}
          />
        </div>

        {/* Post Header */}
        <header className="py-8 max-w-3xl">
          <CategoryBadge category={frontmatter.category} />
          <h1 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-stone-900 dark:text-stone-50 leading-tight">
            {frontmatter.title}
          </h1>
          <p className="mt-4 text-lg md:text-xl text-stone-600 dark:text-stone-400">
            {frontmatter.description}
          </p>
          <div className="flex items-center gap-2 text-sm text-stone-500 dark:text-stone-400 mt-6">
            <time dateTime={frontmatter.date}>{formatDateLong(frontmatter.date)}</time>
            <span aria-hidden="true">·</span>
            <span>{readingTime} min de leitura</span>
          </div>
        </header>

        {/* Cover Image */}
        {frontmatter.coverImage && (
          <div className="max-w-4xl mx-auto mb-8">
            <div className="aspect-video relative w-full">
              <Image
                src={frontmatter.coverImage}
                alt={frontmatter.coverImageAlt ?? frontmatter.title}
                fill
                className="object-cover rounded-xl"
                priority
              />
            </div>
          </div>
        )}

        {/* Content + Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_250px] gap-12 pb-8">
          {/* TOC mobile */}
          {tocItems.length > 0 && (
            <div className="lg:hidden col-span-full">
              <TableOfContents items={tocItems} />
            </div>
          )}

          {/* MDX Content */}
          <article className="max-w-3xl prose-blog">
            <MDXRemote
              source={content}
              components={{ Callout, ExplicaConceito, QuizRapido, AntesDepois, Destaque }}
            />
          </article>

          {/* TOC Desktop */}
          {tocItems.length > 0 && (
            <TableOfContents items={tocItems} />
          )}
        </div>

        {/* Share */}
        <div className="max-w-3xl">
          <ShareButtons title={frontmatter.title} url={postUrl} />
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-12" aria-labelledby="related-posts-heading">
            <h2
              id="related-posts-heading"
              className="text-2xl font-bold text-stone-900 dark:text-stone-50 mb-6"
            >
              Continue lendo
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relPost) => (
                <PostCard key={relPost.slug} post={relPost} />
              ))}
            </div>
          </section>
        )}

        {/* Newsletter */}
        <section className="py-12">
          <NewsletterCTA />
        </section>
      </div>

      <ScrollToTop />
    </>
  )
}
