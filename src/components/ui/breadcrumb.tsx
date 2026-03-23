import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center gap-1 text-sm text-stone-500 dark:text-stone-400 flex-wrap">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-1">
            {index > 0 && (
              <ChevronRight className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
            )}
            {item.href ? (
              <Link
                href={item.href}
                className="hover:text-stone-900 dark:hover:text-stone-50 transition-colors duration-200"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-stone-900 dark:text-stone-50 font-medium" aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
