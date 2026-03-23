'use client'

import { useState } from 'react'
import { CheckCircle2, XCircle } from 'lucide-react'

interface QuizRapidoProps {
  pergunta: string
  opcoes: string[]
  correta: number
  explicacao?: string
}

export function QuizRapido({ pergunta, opcoes, correta, explicacao }: QuizRapidoProps) {
  const [selected, setSelected] = useState<number | null>(null)
  const answered = selected !== null
  const isCorrect = selected === correta

  return (
    <div className="my-6 rounded-lg border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800/50 p-5">
      <fieldset>
        <legend className="text-base font-semibold text-stone-900 dark:text-stone-100 mb-3">
          {pergunta}
        </legend>
        <div className="space-y-2">
          {opcoes.map((opcao, i) => {
            let style = 'border-stone-200 dark:border-stone-600 hover:border-sky-400'
            if (answered) {
              if (i === correta) style = 'border-green-500 bg-green-50 dark:bg-green-950/30'
              else if (i === selected) style = 'border-red-500 bg-red-50 dark:bg-red-950/30'
              else style = 'border-stone-200 dark:border-stone-600 opacity-60'
            }

            return (
              <button
                key={i}
                type="button"
                onClick={() => !answered && setSelected(i)}
                disabled={answered}
                aria-pressed={selected === i}
                className={`w-full text-left rounded-lg border-2 px-4 py-2.5 text-sm transition-colors ${style} ${
                  answered ? 'cursor-default' : 'cursor-pointer'
                }`}
              >
                <span className="flex items-center gap-2">
                  {answered && i === correta && (
                    <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0" aria-hidden="true" />
                  )}
                  {answered && i === selected && i !== correta && (
                    <XCircle className="h-4 w-4 text-red-500 shrink-0" aria-hidden="true" />
                  )}
                  <span className="text-stone-700 dark:text-stone-300">{opcao}</span>
                </span>
              </button>
            )
          })}
        </div>
      </fieldset>
      {answered && (
        <div aria-live="polite" className="mt-3 text-sm">
          <p className={`font-medium ${isCorrect ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
            {isCorrect ? 'Acertou!' : 'Nao foi dessa vez!'}
          </p>
          {explicacao && <p className="mt-1 text-stone-600 dark:text-stone-400">{explicacao}</p>}
        </div>
      )}
    </div>
  )
}
