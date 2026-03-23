'use client'

import { useState } from 'react'
import { Mail } from 'lucide-react'

export function NewsletterCTA() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
    }
  }

  return (
    <section
      aria-labelledby="newsletter-heading"
      className="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800 rounded-2xl p-8 md:p-12 text-center max-w-2xl mx-auto"
    >
      <Mail
        className="w-10 h-10 text-indigo-600 dark:text-indigo-400 mx-auto mb-4"
        aria-hidden="true"
      />
      <h2
        id="newsletter-heading"
        className="text-2xl font-bold text-stone-900 dark:text-stone-50 mb-2"
      >
        Receba IA no seu email
      </h2>
      <p className="text-stone-600 dark:text-stone-400 mb-6">
        Artigos semanais sobre IA, sem complicacao.
      </p>

      {submitted ? (
        <p className="text-indigo-600 dark:text-indigo-400 font-medium">
          Obrigado! Voce sera notificado dos novos artigos.
        </p>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <label htmlFor="newsletter-email" className="sr-only">
            Seu melhor email
          </label>
          <input
            id="newsletter-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Seu melhor email"
            required
            className="flex-1 px-4 py-2.5 rounded-lg bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 focus:outline-none text-sm text-stone-900 dark:text-stone-50 placeholder:text-stone-400 dark:placeholder:text-stone-500 transition-colors duration-200"
          />
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white px-6 py-2.5 rounded-lg font-medium text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 whitespace-nowrap"
          >
            Inscrever-se
          </button>
        </form>
      )}

      <p className="text-xs text-stone-500 dark:text-stone-400 mt-3">
        Sem spam. Cancele quando quiser.
      </p>
    </section>
  )
}
