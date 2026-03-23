import Link from 'next/link'
import Image from 'next/image'
import { Clock } from 'lucide-react'
import { CategoryBadge } from './category-badge'
import { formatDate } from '@/lib/utils'
import type { PostMeta } from '@/lib/mdx'
import { cn } from '@/lib/utils'

interface PostCardProps {
  post: PostMeta
  variant?: 'default' | 'hero' | 'horizontal'
  className?: string
}

export function PostCard({ post, variant = 'default', className }: PostCardProps) {
  const { slug, frontmatter, readingTime } = post

  if (variant === 'hero') {
    return (
      <Link href={`/blog/${slug}`} className={cn('group block', className)}>
        <article className="bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
          {frontmatter.coverImage && (
            <div className="aspect-video relative w-full">
              <Image
                src={frontmatter.coverImage}
                alt={frontmatter.coverImageAlt ?? frontmatter.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}
          <div className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <CategoryBadge category={frontmatter.category} asLink={false} />
              <span className="text-xs text-stone-500 dark:text-stone-400">
                {formatDate(frontmatter.date)}
              </span>
            </div>
            <h2 className="text-2xl font-bold text-stone-900 dark:text-stone-50 mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200">
              {frontmatter.title}
            </h2>
            <p className="text-base text-stone-600 dark:text-stone-400 mb-4 line-clamp-3">
              {frontmatter.description}
            </p>
            <div className="flex items-center gap-1.5 text-xs text-stone-500 dark:text-stone-400">
              <Clock className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{readingTime} min de leitura</span>
            </div>
          </div>
        </article>
      </Link>
    )
  }

  if (variant === 'horizontal') {
    return (
      <Link href={`/blog/${slug}`} className={cn('group flex gap-4 items-start', className)}>
        {frontmatter.coverImage && (
          <div className="relative w-24 h-16 flex-shrink-0">
            <Image
              src={frontmatter.coverImage}
              alt={frontmatter.coverImageAlt ?? frontmatter.title}
              fill
              className="object-cover rounded-lg"
            />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <CategoryBadge category={frontmatter.category} asLink={false} className="mb-1" />
          <h3 className="text-sm font-bold text-stone-900 dark:text-stone-50 line-clamp-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200">
            {frontmatter.title}
          </h3>
          <span className="text-xs text-stone-500 dark:text-stone-400 mt-1 block">
            {formatDate(frontmatter.date)}
          </span>
        </div>
      </Link>
    )
  }

  // Default card
  return (
    <Link href={`/blog/${slug}`} className={cn('group block', className)}>
      <article className="bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 h-full flex flex-col">
        {frontmatter.coverImage && (
          <div className="aspect-[3/2] relative w-full">
            <Image
              src={frontmatter.coverImage}
              alt={frontmatter.coverImageAlt ?? frontmatter.title}
              fill
              className="object-cover"
            />
          </div>
        )}
        <div className="p-5 flex flex-col flex-1">
          <div className="mb-3">
            <CategoryBadge category={frontmatter.category} asLink={false} />
          </div>
          <h2 className="text-xl font-semibold text-stone-900 dark:text-stone-50 mb-2 line-clamp-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200 flex-1">
            {frontmatter.title}
          </h2>
          <p className="text-sm text-stone-600 dark:text-stone-400 mb-4 line-clamp-2">
            {frontmatter.description}
          </p>
          <div className="flex items-center gap-1.5 text-xs text-stone-500 dark:text-stone-400 mt-auto">
            <span>{formatDate(frontmatter.date)}</span>
            <span aria-hidden="true">·</span>
            <Clock className="w-3.5 h-3.5" aria-hidden="true" />
            <span>{readingTime} min de leitura</span>
          </div>
        </div>
      </article>
    </Link>
  )
}
