import { ReactNode } from 'react'
import { Info, AlertTriangle, Lightbulb, AlertCircle, Sparkles, Eye, HelpCircle } from 'lucide-react'

const variants = {
  info: {
    icon: Info,
    bg: 'bg-blue-50 dark:bg-blue-950/30',
    border: 'border-blue-400 dark:border-blue-500',
    iconColor: 'text-blue-500',
    label: 'Informacao',
  },
  warning: {
    icon: AlertTriangle,
    bg: 'bg-amber-50 dark:bg-amber-950/30',
    border: 'border-amber-400 dark:border-amber-500',
    iconColor: 'text-amber-500',
    label: 'Atencao',
  },
  tip: {
    icon: Lightbulb,
    bg: 'bg-green-50 dark:bg-green-950/30',
    border: 'border-green-400 dark:border-green-500',
    iconColor: 'text-green-500',
    label: 'Dica',
  },
  important: {
    icon: AlertCircle,
    bg: 'bg-purple-50 dark:bg-purple-950/30',
    border: 'border-purple-400 dark:border-purple-500',
    iconColor: 'text-purple-500',
    label: 'Importante',
  },
  analogia: {
    icon: Sparkles,
    bg: 'bg-indigo-50 dark:bg-indigo-950/30',
    border: 'border-indigo-400 dark:border-indigo-500',
    iconColor: 'text-indigo-500',
    label: 'Analogia',
  },
  curiosidade: {
    icon: Eye,
    bg: 'bg-teal-50 dark:bg-teal-950/30',
    border: 'border-teal-400 dark:border-teal-500',
    iconColor: 'text-teal-500',
    label: 'Curiosidade',
  },
  dica: {
    icon: Lightbulb,
    bg: 'bg-green-50 dark:bg-green-950/30',
    border: 'border-green-400 dark:border-green-500',
    iconColor: 'text-green-500',
    label: 'Dica',
  },
  atencao: {
    icon: AlertTriangle,
    bg: 'bg-amber-50 dark:bg-amber-950/30',
    border: 'border-amber-400 dark:border-amber-500',
    iconColor: 'text-amber-500',
    label: 'Atencao',
  },
} as const

type CalloutType = keyof typeof variants

interface CalloutProps {
  type?: CalloutType
  title?: string
  children: ReactNode
}

export function Callout({ type = 'info', title, children }: CalloutProps) {
  const variant = variants[type] ?? variants.info
  const Icon = variant.icon

  return (
    <div
      role="note"
      aria-label={title ?? variant.label}
      className={`my-6 rounded-lg border-l-4 ${variant.border} ${variant.bg} p-4`}
    >
      <div className="flex items-start gap-3">
        <Icon className={`mt-0.5 h-5 w-5 shrink-0 ${variant.iconColor}`} aria-hidden="true" />
        <div className="min-w-0">
          {title && (
            <p className="mb-1 font-semibold text-stone-900 dark:text-stone-100">{title}</p>
          )}
          <div className="text-stone-700 dark:text-stone-300 text-sm [&>p]:m-0">{children}</div>
        </div>
      </div>
    </div>
  )
}
