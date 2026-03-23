import type { Metadata } from 'next'
import Link from 'next/link'
import { Heart, Target, Users, Sparkles, Wrench, BookOpen, GraduationCap } from 'lucide-react'
import { NewsletterCTA } from '@/components/ui/newsletter-cta'

export const metadata: Metadata = {
  title: 'Sobre',
  description:
    'Acreditamos que todo mundo merece entender inteligencia artificial - sem jargao, sem complicacao, com exemplos do dia a dia.',
}

const pillars = [
  {
    icon: <Heart className="w-12 h-12" aria-hidden="true" />,
    title: 'Simplicidade',
    description: 'Explicamos IA de forma que qualquer pessoa entende, independentemente do nivel tecnico.',
  },
  {
    icon: <Target className="w-12 h-12" aria-hidden="true" />,
    title: 'Relevancia',
    description: 'Focamos no que realmente importa no seu cotidiano, sem perder tempo com teoria desnecessaria.',
  },
  {
    icon: <Users className="w-12 h-12" aria-hidden="true" />,
    title: 'Acessibilidade',
    description: 'Conteudo para todos, sem pre-requisitos. Se voce tem curiosidade, e o suficiente.',
  },
]

const contentCategories = [
  {
    icon: <Sparkles className="w-8 h-8" aria-hidden="true" />,
    slug: 'ia-no-cotidiano',
    name: 'IA no Cotidiano',
    description: 'Como a IA ja esta presente nas pequenas decisoes do seu dia.',
  },
  {
    icon: <Wrench className="w-8 h-8" aria-hidden="true" />,
    slug: 'ferramentas',
    name: 'Ferramentas',
    description: 'As melhores ferramentas de IA para voce usar agora mesmo.',
  },
  {
    icon: <BookOpen className="w-8 h-8" aria-hidden="true" />,
    slug: 'conceitos',
    name: 'Conceitos',
    description: 'Os fundamentos da inteligencia artificial explicados de forma simples.',
  },
  {
    icon: <GraduationCap className="w-8 h-8" aria-hidden="true" />,
    slug: 'tutoriais',
    name: 'Tutoriais',
    description: 'Guias praticos passo a passo para voce colocar a IA para trabalhar.',
  },
]

export default function SobrePage() {
  return (
    <>
      {/* Hero / Mission */}
      <section
        className="py-12 md:py-16 lg:py-24 bg-gradient-to-b from-indigo-50 to-stone-50 dark:from-stone-900 dark:to-stone-900 text-center"
        aria-labelledby="sobre-heading"
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <h1
            id="sobre-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-stone-900 dark:text-stone-50"
          >
            Sobre o IA do Dia a Dia
          </h1>
          <p className="text-lg md:text-xl text-stone-600 dark:text-stone-400 max-w-3xl mx-auto mt-6 leading-relaxed">
            Acreditamos que todo mundo merece entender inteligencia artificial — sem jargao, sem complicacao,
            com exemplos do dia a dia. Porque a IA ja faz parte da sua vida, quer voce perceba ou nao.
          </p>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-12" aria-labelledby="pillars-heading">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <h2
            id="pillars-heading"
            className="text-2xl font-bold text-stone-900 dark:text-stone-50 text-center mb-12"
          >
            Por que este blog?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="flex flex-col items-center">
                <div className="text-indigo-600 dark:text-indigo-400 mx-auto mb-4">
                  {pillar.icon}
                </div>
                <h3 className="text-lg font-semibold text-stone-900 dark:text-stone-50 mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm text-stone-600 dark:text-stone-400 max-w-xs mx-auto">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For whom */}
      <section className="py-12" aria-labelledby="audience-heading">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="bg-stone-50 dark:bg-stone-800/50 rounded-2xl p-8 md:p-12">
            <h2
              id="audience-heading"
              className="text-2xl font-bold text-center text-stone-900 dark:text-stone-50 mb-8"
            >
              Para quem e este blog?
            </h2>
            <div className="max-w-2xl mx-auto space-y-4 text-lg text-stone-600 dark:text-stone-400 leading-relaxed">
              <p>
                Para o <strong className="font-medium text-stone-900 dark:text-stone-50">curioso</strong> que
                ouve falar em IA todo dia mas nao entende direito do que se trata. Para o{' '}
                <strong className="font-medium text-stone-900 dark:text-stone-50">profissional</strong> que
                quer usar ferramentas de IA no trabalho mas nao sabe por onde comecar.
              </p>
              <p>
                Para o <strong className="font-medium text-stone-900 dark:text-stone-50">estudante</strong> que
                quer entender os conceitos por tras da tecnologia. E para qualquer pessoa que acredita que
                entender o mundo ao seu redor e sempre uma boa ideia.
              </p>
              <p>
                Nao e preciso ter nenhum conhecimento tecnico previo. So trazer a curiosidade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content categories */}
      <section className="py-12" aria-labelledby="content-heading">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <h2
            id="content-heading"
            className="text-2xl font-bold text-center text-stone-900 dark:text-stone-50 mb-8"
          >
            O que voce vai encontrar aqui
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {contentCategories.map((cat) => (
              <div
                key={cat.slug}
                className="bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl p-6"
              >
                <div className="text-indigo-600 dark:text-indigo-400 mb-3">{cat.icon}</div>
                <h3 className="font-semibold text-stone-900 dark:text-stone-50 mb-2">{cat.name}</h3>
                <p className="text-sm text-stone-600 dark:text-stone-400 mb-4">{cat.description}</p>
                <Link
                  href={`/categorias/${cat.slug}`}
                  className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline underline-offset-2"
                >
                  Ver artigos &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <NewsletterCTA />
        </div>
      </section>
    </>
  )
}
