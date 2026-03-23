# Design System - IA do Dia a Dia

Referencia de componentes reutilizaveis para o blog. Cada componente segue a identidade visual definida em `identidade-visual.md`.

---

## 1. Navbar

### Estrutura

```
[Logo + "IA do Dia a Dia"]  [Home] [Categorias] [Sobre]  [Busca] [DarkMode]
```

### Especificacoes

- **Posicao**: Fixa no topo (`sticky top-0 z-50`)
- **Altura**: 64px (`h-16`)
- **Background**: `bg-white/80 dark:bg-stone-900/80 backdrop-blur-md`
- **Borda inferior**: `border-b border-stone-200 dark:border-stone-700`
- **Container**: `max-w-6xl mx-auto px-4 md:px-6 lg:px-8`
- **Layout interno**: `flex items-center justify-between`

### Logo

- Texto "IA do Dia a Dia" em `text-lg font-bold text-stone-900 dark:text-stone-50`
- Opcional: icone pequeno (sparkles/brain) de Lucide ao lado em `text-indigo-600 dark:text-indigo-400`

### Links de navegacao

- Desktop: links horizontais com `text-sm font-medium text-stone-600 dark:text-stone-400`
- Hover: `text-stone-900 dark:text-stone-50`
- Ativo: `text-indigo-600 dark:text-indigo-400 font-semibold`
- Spacing: `gap-6` entre links

### Toggle Dark Mode

- Botao com icone Sun/Moon de Lucide
- `p-2 rounded-lg hover:bg-stone-100 dark:hover:bg-stone-800`
- Transicao suave do icone

### Mobile (< 768px)

- Logo a esquerda, hamburger menu a direita
- Menu: slide-in pela direita ou dropdown abaixo da navbar
- Menu aberto: overlay com `bg-white dark:bg-stone-900` full-width
- Links empilhados verticalmente com `py-3 border-b border-stone-100 dark:border-stone-800`
- Toggle dark mode dentro do menu mobile

---

## 2. Card de Post

### Variantes

#### Card Destaque (Hero) - usado para o post mais recente na home

```
+-----------------------------------------------+
|  [Imagem de capa - aspect-video]               |
|                                                 |
|  [Badge: Categoria]                             |
|  [Titulo - text-2xl font-bold]                  |
|  [Descricao - text-base text-stone-600]         |
|  [Avatar + Autor] [Data] [Tempo de leitura]     |
+-----------------------------------------------+
```

- Largura: full-width no container
- Imagem: `aspect-video rounded-xl object-cover`
- Padding interno: `p-6`

#### Card Padrao - usado na listagem geral

```
+---------------------------------------+
|  [Imagem de capa - aspect-[3/2]]      |
|  [Badge: Categoria]                   |
|  [Titulo - text-xl font-semibold]     |
|  [Descricao - text-sm, 2 linhas max]  |
|  [Data] [Tempo de leitura]            |
+---------------------------------------+
```

- Grid: 1 coluna (mobile), 2 colunas (tablet), 3 colunas (desktop)
- Background: `bg-white dark:bg-stone-800`
- Borda: `border border-stone-200 dark:border-stone-700`
- Border radius: `rounded-xl`
- Sombra: `shadow-sm hover:shadow-md`
- Transicao: `transition-shadow duration-200`
- Padding: `p-0` (imagem sangra ate a borda, texto com `p-5`)
- Imagem: `rounded-t-xl aspect-[3/2] object-cover w-full`
- Titulo: `text-xl font-semibold text-stone-900 dark:text-stone-50 line-clamp-2`
- Descricao: `text-sm text-stone-600 dark:text-stone-400 line-clamp-2`
- Link: card inteiro e clicavel (wrap com `<Link>`)

#### Card Horizontal - usado em "posts relacionados" e sidebar

```
+------------------+---------------------------+
| [Imagem thumb]   | [Badge]                   |
| 120x80           | [Titulo - text-sm bold]   |
|                  | [Data]                    |
+------------------+---------------------------+
```

- Layout: `flex gap-4 items-start`
- Imagem: `w-24 h-16 rounded-lg object-cover flex-shrink-0`

### Metadados do Card

- **Data**: formato "22 mar 2026" em `text-xs text-stone-500 dark:text-stone-400`
- **Tempo de leitura**: "5 min de leitura" em `text-xs text-stone-500 dark:text-stone-400`
- **Separador**: ponto medio (`·`) entre data e tempo
- **Icone de relogio**: Lucide `Clock` 14px ao lado do tempo (opcional)

---

## 3. Badge de Categoria

### Especificacoes

- `inline-flex items-center`
- `px-3 py-1`
- `text-xs font-medium`
- `rounded-full`
- Background: `bg-indigo-50 dark:bg-indigo-900/30`
- Texto: `text-indigo-700 dark:text-indigo-300`
- Hover: `hover:bg-indigo-100 dark:hover:bg-indigo-900/50`

### Categorias do blog e cores sugeridas

| Categoria           | Light BG       | Light Text      | Dark BG              | Dark Text        |
|---------------------|----------------|-----------------|----------------------|------------------|
| IA no Cotidiano     | `indigo-50`    | `indigo-700`    | `indigo-900/30`      | `indigo-300`     |
| Ferramentas         | `amber-50`     | `amber-700`     | `amber-900/30`       | `amber-300`      |
| Conceitos           | `teal-50`      | `teal-700`      | `teal-900/30`        | `teal-300`       |
| Tutoriais           | `emerald-50`   | `emerald-700`   | `emerald-900/30`     | `emerald-300`    |
| Noticias            | `rose-50`      | `rose-700`      | `rose-900/30`        | `rose-300`       |

---

## 4. Footer

### Estrutura

```
+----------------------------------------------------------+
|  [Logo + "IA do Dia a Dia"]                               |
|  [Descricao curta do blog - 1-2 linhas]                   |
|                                                            |
|  Navegacao        Categorias        Contato               |
|  - Home           - IA no Cotidiano  - Email              |
|  - Sobre          - Ferramentas      - Twitter/X          |
|  - Categorias     - Conceitos        - GitHub             |
|                   - Tutoriais                              |
|                                                            |
|  -------------------------------------------------        |
|  [Copyright 2026 IA do Dia a Dia. Todos os direitos...]   |
+----------------------------------------------------------+
```

### Especificacoes

- Background: `bg-stone-100 dark:bg-stone-800`
- Padding: `py-12 px-4 md:px-6 lg:px-8`
- Container: `max-w-6xl mx-auto`
- Grid: 1 coluna (mobile) -> 3 colunas (desktop)
- Titulos de secao: `text-sm font-semibold text-stone-900 dark:text-stone-50 uppercase tracking-wide mb-4`
- Links: `text-sm text-stone-600 dark:text-stone-400 hover:text-indigo-600 dark:hover:text-indigo-400`
- Linha separadora: `border-t border-stone-200 dark:border-stone-700 mt-8 pt-8`
- Copyright: `text-xs text-stone-500 dark:text-stone-400 text-center`

---

## 5. Botoes

### Botao Primario

- `bg-indigo-600 hover:bg-indigo-700 text-white`
- `dark:bg-indigo-500 dark:hover:bg-indigo-600`
- `px-6 py-2.5 rounded-lg font-medium text-sm`
- `transition-colors duration-200`
- `focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`

### Botao Secundario (outline)

- `border border-stone-300 dark:border-stone-600`
- `text-stone-700 dark:text-stone-300`
- `hover:bg-stone-50 dark:hover:bg-stone-800`
- `px-6 py-2.5 rounded-lg font-medium text-sm`

### Botao Ghost

- `text-stone-600 dark:text-stone-400`
- `hover:bg-stone-100 dark:hover:bg-stone-800`
- `px-4 py-2 rounded-lg text-sm`

---

## 6. Input de Busca

### Especificacoes

- `w-full` em mobile, `w-80` em desktop
- `px-4 py-2.5 rounded-lg`
- `bg-stone-100 dark:bg-stone-800`
- `border border-stone-200 dark:border-stone-700`
- `focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20`
- `text-sm text-stone-900 dark:text-stone-50`
- `placeholder:text-stone-400 dark:placeholder:text-stone-500`
- Icone de busca (Lucide `Search`) a esquerda dentro do input
- Placeholder: "Buscar artigos..."

---

## 7. Newsletter CTA

### Estrutura

```
+----------------------------------------------------------+
|  [Icone Mail]                                             |
|  Receba IA no seu email                                   |
|  Artigos semanais sobre IA, sem complicacao.              |
|                                                            |
|  [Input: Seu melhor email]  [Botao: Inscrever-se]         |
|                                                            |
|  Sem spam. Cancele quando quiser.                          |
+----------------------------------------------------------+
```

### Especificacoes

- Background: `bg-indigo-50 dark:bg-indigo-900/20`
- Border: `border border-indigo-100 dark:border-indigo-800`
- Border radius: `rounded-2xl`
- Padding: `p-8 md:p-12`
- Alinhamento: centralizado
- Titulo: `text-2xl font-bold text-stone-900 dark:text-stone-50`
- Descricao: `text-stone-600 dark:text-stone-400`
- Form: `flex flex-col sm:flex-row gap-3 max-w-md mx-auto`
- Aviso de spam: `text-xs text-stone-500 dark:text-stone-400 mt-3`

---

## 8. Breadcrumb

### Especificacoes

- `text-sm text-stone-500 dark:text-stone-400`
- Separador: `/` ou icone `ChevronRight` de Lucide
- Link ativo: `text-stone-900 dark:text-stone-50 font-medium`
- Exemplo: `Home / Categorias / IA no Cotidiano`
- Marginbottom: `mb-6`

---

## 9. Table of Contents (TOC) - para pagina de post

### Especificacoes

- Posicao: sidebar direita em desktop, colapsavel no topo em mobile
- Background: `bg-stone-50 dark:bg-stone-800/50`
- Border: `border border-stone-200 dark:border-stone-700`
- Border radius: `rounded-xl`
- Padding: `p-5`
- Titulo: "Neste artigo" em `text-sm font-semibold text-stone-900 dark:text-stone-50`
- Links: `text-sm text-stone-600 dark:text-stone-400`
- Link ativo (scroll spy): `text-indigo-600 dark:text-indigo-400 font-medium` com borda esquerda `border-l-2 border-indigo-600`
- Niveis: h2 e h3 (h3 com `pl-4` de indentacao)

---

## 10. Tipografia do Conteudo MDX

### Estilos para o corpo do post (prose)

Usar `@tailwindcss/typography` com customizacoes:

- `prose prose-stone dark:prose-invert`
- `prose-lg` para tamanho confortavel
- `max-w-none` (largura controlada pelo container)
- Links: `prose-a:text-indigo-600 dark:prose-a:text-indigo-400 prose-a:underline-offset-2`
- Codigo inline: `bg-stone-100 dark:bg-stone-800 px-1.5 py-0.5 rounded text-sm font-mono`
- Bloco de codigo: `rounded-xl bg-stone-900 dark:bg-stone-950 p-4 overflow-x-auto`
- Imagens: `rounded-xl`
- Blockquotes: `border-l-4 border-indigo-500 bg-indigo-50/50 dark:bg-indigo-900/10 p-4 rounded-r-lg`
- Tabelas: bordas sutis com `border-stone-200 dark:border-stone-700`

---

## 11. Skeleton / Loading States

### Card Skeleton

```
+---------------------------------------+
|  [Retangulo cinza pulsante - imagem]  |
|  [Barra cinza curta - badge]          |
|  [Barra cinza longa - titulo]         |
|  [Barra cinza media - descricao]      |
|  [Barra cinza curta - data]           |
+---------------------------------------+
```

- Usar `animate-pulse` do Tailwind
- Background das barras: `bg-stone-200 dark:bg-stone-700 rounded`

### Pagina de Post Skeleton

- Barra larga para titulo
- Barras para metadados
- Varias barras de largura variada para paragrafos

---

## 12. Estados Vazios

### Nenhum post encontrado

- Icone: `FileSearch` de Lucide, tamanho grande (`w-16 h-16`), cor `text-stone-300 dark:text-stone-600`
- Titulo: "Nenhum artigo encontrado"
- Descricao: "Tente buscar por outro termo ou explore nossas categorias."
- Botao: "Ver todos os artigos" (botao secundario)
- Alinhamento: centralizado com padding generoso

---

## 13. Scroll to Top

- Botao flutuante no canto inferior direito
- Aparece apos scroll de 400px
- `p-3 rounded-full bg-indigo-600 dark:bg-indigo-500 text-white shadow-lg`
- Icone: `ArrowUp` de Lucide
- `hover:bg-indigo-700 dark:hover:bg-indigo-600`
- Transicao de opacidade ao aparecer/desaparecer
