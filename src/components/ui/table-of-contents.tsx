'use client'

import { useState, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

interface TocItem {
  id: string
  text: string
  level: number
}

interface TableOfContentsProps {
  items: TocItem[]
}

export function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('')
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    if (items.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-80px 0px -70% 0px' }
    )

    items.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [items])

  if (items.length === 0) return null

  return (
    <>
      {/* Desktop TOC sidebar */}
      <aside className="hidden lg:block">
        <div className="sticky top-24 bg-stone-50 dark:bg-stone-800/50 border border-stone-200 dark:border-stone-700 rounded-xl p-5">
          <p className="text-sm font-semibold text-stone-900 dark:text-stone-50 mb-3">
            Neste artigo
          </p>
          <nav aria-label="Tabela de conteudo">
            <ul className="space-y-1">
              {items.map((item) => (
                <li key={item.id} style={{ paddingLeft: item.level === 3 ? '1rem' : '0' }}>
                  <a
                    href={`#${item.id}`}
                    aria-current={activeId === item.id ? 'true' : undefined}
                    className={cn(
                      'block text-sm py-0.5 transition-colors duration-200',
                      activeId === item.id
                        ? 'text-indigo-600 dark:text-indigo-400 font-medium border-l-2 border-indigo-600 dark:border-indigo-400 pl-2'
                        : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-50'
                    )}
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>

      {/* Mobile TOC collapsible */}
      <div className="lg:hidden bg-stone-50 dark:bg-stone-800/50 rounded-xl p-4 mb-8">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          className="flex items-center justify-between w-full text-sm font-semibold text-stone-900 dark:text-stone-50"
        >
          <span>Neste artigo</span>
          <ChevronDown
            className={cn(
              'w-4 h-4 transition-transform duration-200',
              mobileOpen && 'rotate-180'
            )}
            aria-hidden="true"
          />
        </button>
        {mobileOpen && (
          <nav aria-label="Tabela de conteudo mobile" className="mt-3">
            <ul className="space-y-2">
              {items.map((item) => (
                <li key={item.id} style={{ paddingLeft: item.level === 3 ? '1rem' : '0' }}>
                  <a
                    href={`#${item.id}`}
                    onClick={() => setMobileOpen(false)}
                    className="block text-sm text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-50 transition-colors duration-200"
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </>
  )
}

export function extractTocItems(content: string): TocItem[] {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm
  const items: TocItem[] = []
  let match

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length
    const text = match[2].trim()
    const id = text
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim()
    items.push({ id, level, text })
  }

  return items
}
