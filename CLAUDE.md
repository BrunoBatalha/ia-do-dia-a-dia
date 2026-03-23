# Blog "IA do Dia a Dia"

Blog sobre Inteligência Artificial para leigos, construído com Next.js, TypeScript, Tailwind e MDX.

## Comando: /post

Digite `/post` para gerar um novo post completo, executando o pipeline editorial:
- Curador pesquisa novidades em IA
- Estrategista define pauta e cria briefing
- Redator escreve o post em MDX
- Editor revisa qualidade
- SEO otimiza para buscadores

## Estrutura do Projeto

```
blog/
  src/app/          # Next.js App Router
  src/components/   # Componentes React
    blog/           # Componentes MDX (Callout, QuizRapido, etc.)
  content/
    posts/          # Posts em MDX
    briefings/      # Briefings editoriais
    calendario.md   # Calendário editorial
  docs/uxui/        # Specs de design
  public/           # Assets estáticos
```

## Regras Gerais

- Posts ficam em `content/posts/{slug}.mdx`
- Briefings ficam em `content/briefings/{slug}.md`
- Componentes reutilizáveis ficam em `src/components/blog/`
- Rodar `npm run dev` para visualizar o blog localmente
