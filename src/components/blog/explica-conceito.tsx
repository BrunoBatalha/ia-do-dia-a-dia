'use client'

import { ReactNode, useState, useRef, useEffect } from 'react'

interface ExplicaConceitoProps {
  termo: string
  children: ReactNode
}

export function ExplicaConceito({ termo, children }: ExplicaConceitoProps) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (!open) return

    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }

    function handleEscape(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false)
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [open])

  return (
    <span ref={ref} className="relative inline">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="underline decoration-dashed decoration-sky-400 underline-offset-2 text-sky-700 dark:text-sky-400 hover:text-sky-900 dark:hover:text-sky-300 cursor-help font-medium"
      >
        {termo}
      </button>
      {open && (
        <span
          role="tooltip"
          className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-64 rounded-lg bg-stone-800 dark:bg-stone-700 text-stone-100 text-sm p-3 shadow-lg z-50 [&>p]:m-0"
        >
          {children}
          <span className="absolute left-1/2 -translate-x-1/2 top-full border-4 border-transparent border-t-stone-800 dark:border-t-stone-700" />
        </span>
      )}
    </span>
  )
}
