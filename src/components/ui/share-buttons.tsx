'use client'

import { useState } from 'react'
import { Twitter, Linkedin, Link2, Check } from 'lucide-react'

interface ShareButtonsProps {
  title: string
  url: string
}

export function ShareButtons({ title, url }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false)

  const encodedTitle = encodeURIComponent(title)
  const encodedUrl = encodeURIComponent(url)

  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`
  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // fallback
    }
  }

  return (
    <div className="border-t border-stone-200 dark:border-stone-700 py-8">
      <p className="text-lg font-semibold text-stone-900 dark:text-stone-50 text-center mb-4">
        Gostou? Compartilhe!
      </p>
      <div className="flex gap-3 justify-center flex-wrap">
        <a
          href={twitterUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Compartilhar no Twitter/X"
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors duration-200"
        >
          <Twitter className="w-4 h-4" aria-hidden="true" />
          <span>Twitter/X</span>
        </a>
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Compartilhar no LinkedIn"
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors duration-200"
        >
          <Linkedin className="w-4 h-4" aria-hidden="true" />
          <span>LinkedIn</span>
        </a>
        <button
          onClick={copyLink}
          aria-label={copied ? 'Link copiado!' : 'Copiar link do artigo'}
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors duration-200"
        >
          {copied ? (
            <Check className="w-4 h-4 text-teal-600 dark:text-teal-400" aria-hidden="true" />
          ) : (
            <Link2 className="w-4 h-4" aria-hidden="true" />
          )}
          <span>{copied ? 'Copiado!' : 'Copiar link'}</span>
        </button>
      </div>
    </div>
  )
}
