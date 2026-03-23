import Link from 'next/link'
import { cn } from '@/lib/utils'
import { slugify } from '@/lib/utils'

interface CategoryBadgeProps {
  category: string
  className?: string
  asLink?: boolean
}

const categoryColorMap: Record<string, string> = {
  'ia-no-cotidiano': 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100 dark:bg-indigo-900/30 dark:text-indigo-300 dark:hover:bg-indigo-900/50',
  ferramentas: 'bg-amber-50 text-amber-700 hover:bg-amber-100 dark:bg-amber-900/30 dark:text-amber-300 dark:hover:bg-amber-900/50',
  conceitos: 'bg-teal-50 text-teal-700 hover:bg-teal-100 dark:bg-teal-900/30 dark:text-teal-300 dark:hover:bg-teal-900/50',
  tutoriais: 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100 dark:bg-emerald-900/30 dark:text-emerald-300 dark:hover:bg-emerald-900/50',
  noticias: 'bg-rose-50 text-rose-700 hover:bg-rose-100 dark:bg-rose-900/30 dark:text-rose-300 dark:hover:bg-rose-900/50',
}

const defaultColor =
  'bg-indigo-50 text-indigo-700 hover:bg-indigo-100 dark:bg-indigo-900/30 dark:text-indigo-300 dark:hover:bg-indigo-900/50'

export function CategoryBadge({ category, className, asLink = true }: CategoryBadgeProps) {
  const slug = slugify(category)
  const colorClass = categoryColorMap[slug] ?? defaultColor

  const badgeClass = cn(
    'inline-flex items-center px-3 py-1 text-xs font-medium rounded-full transition-colors duration-200',
    colorClass,
    className
  )

  if (asLink) {
    return (
      <Link href={`/categorias/${slug}`} className={badgeClass}>
        {category}
      </Link>
    )
  }

  return <span className={badgeClass}>{category}</span>
}
