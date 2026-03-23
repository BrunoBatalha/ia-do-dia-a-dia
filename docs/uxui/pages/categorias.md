# Layout - Pagina de Categorias

Duas variantes: listagem de todas as categorias e pagina de uma categoria especifica com seus posts.

---

## Variante 1: Todas as Categorias (/categorias)

### Estrutura

```
+===========================================================+
|                       NAVBAR (sticky)                      |
+===========================================================+
|                                                             |
|  HEADER                                                     |
|  "Categorias"                                               |
|  "Explore nossos artigos organizados por tema."             |
|                                                             |
+-------------------------------------------------------------+
|                                                             |
|  GRID DE CATEGORIAS                                         |
|                                                             |
|  +---------------------+  +---------------------+          |
|  | [Icone]             |  | [Icone]             |          |
|  | IA no Cotidiano     |  | Ferramentas         |          |
|  | Descricao breve     |  | Descricao breve     |          |
|  | 12 artigos          |  | 8 artigos           |          |
|  +---------------------+  +---------------------+          |
|                                                             |
|  +---------------------+  +---------------------+          |
|  | [Icone]             |  | [Icone]             |          |
|  | Conceitos           |  | Tutoriais           |          |
|  | Descricao breve     |  | Descricao breve     |          |
|  | 15 artigos          |  | 6 artigos           |          |
|  +---------------------+  +---------------------+          |
|                                                             |
|  +---------------------+                                    |
|  | [Icone]             |                                    |
|  | Noticias            |                                    |
|  | Descricao breve     |                                    |
|  | 10 artigos          |                                    |
|  +---------------------+                                    |
|                                                             |
+-------------------------------------------------------------+
|                                                             |
|  NEWSLETTER CTA                                             |
|                                                             |
+-------------------------------------------------------------+
|                       FOOTER                                |
+===========================================================+
```

### Detalhes dos Cards de Categoria

- Grid: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6`
- Cada card:
  - `bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700`
  - `rounded-xl p-6 hover:shadow-md hover:border-indigo-300 dark:hover:border-indigo-600`
  - `transition-all duration-200`
  - Icone tematico: Lucide, `w-10 h-10 text-indigo-600 dark:text-indigo-400 mb-4`
  - Nome: `text-xl font-semibold text-stone-900 dark:text-stone-50`
  - Descricao: `text-sm text-stone-600 dark:text-stone-400 mt-2`
  - Contagem: `text-xs text-stone-500 dark:text-stone-400 mt-3`
  - Card inteiro clicavel -> `/categorias/{slug}`

### Icones Sugeridos por Categoria

| Categoria       | Icone Lucide     |
|-----------------|------------------|
| IA no Cotidiano | `Sparkles`       |
| Ferramentas     | `Wrench`         |
| Conceitos       | `BookOpen`       |
| Tutoriais       | `GraduationCap`  |
| Noticias        | `Newspaper`      |

---

## Variante 2: Categoria Especifica (/categorias/[categoria])

### Estrutura

```
+===========================================================+
|                       NAVBAR (sticky)                      |
+===========================================================+
|                                                             |
|  BREADCRUMB                                                 |
|  Home / Categorias / IA no Cotidiano                        |
|                                                             |
+-------------------------------------------------------------+
|                                                             |
|  HEADER DA CATEGORIA                                        |
|  [Icone grande]                                             |
|  "IA no Cotidiano"                                          |
|  "Como a inteligencia artificial esta presente nas          |
|   pequenas coisas do seu dia a dia."                        |
|  [Badge: 12 artigos]                                        |
|                                                             |
+-------------------------------------------------------------+
|                                                             |
|  FILTROS (opcional)                                         |
|  Ordenar: [Mais recentes v]                                 |
|                                                             |
+-------------------------------------------------------------+
|                                                             |
|  LISTA DE POSTS                                             |
|                                                             |
|  +----------+  +----------+  +----------+                   |
|  | Card 1   |  | Card 2   |  | Card 3   |                  |
|  +----------+  +----------+  +----------+                   |
|                                                             |
|  +----------+  +----------+  +----------+                   |
|  | Card 4   |  | Card 5   |  | Card 6   |                  |
|  +----------+  +----------+  +----------+                   |
|                                                             |
|  [Carregar mais artigos] ou paginacao                       |
|                                                             |
+-------------------------------------------------------------+
|                                                             |
|  NEWSLETTER CTA                                             |
|                                                             |
+-------------------------------------------------------------+
|                       FOOTER                                |
+===========================================================+
```

### Detalhes

#### Header da Categoria

- **Alinhamento**: centralizado
- **Icone**: Lucide, `w-16 h-16 text-indigo-600 dark:text-indigo-400`
- **Titulo (h1)**: `text-3xl md:text-4xl font-bold text-stone-900 dark:text-stone-50`
- **Descricao**: `text-lg text-stone-600 dark:text-stone-400 max-w-2xl mx-auto mt-4`
- **Badge de contagem**: `bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 px-3 py-1 rounded-full text-sm mt-4`
- **Padding**: `py-12`

#### Filtros

- Select simples: "Mais recentes" / "Mais antigos"
- Estilo: `select` com estilo do input do design system
- Alinhamento: a direita, acima do grid
- `mb-6`

#### Lista de Posts

- Grid: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`
- Componente: Card Padrao do design system
- Paginacao: botao "Carregar mais artigos" centralizado (botao secundario)
  - Alternativa: paginacao numerada simples (`< 1 2 3 >`)

---

## Componentes Usados

- Navbar
- Breadcrumb (variante 2)
- Card de Categoria (variante 1 - componente especifico)
- Card de Post (Padrao)
- Badge de Categoria
- Botao Secundario (carregar mais)
- Newsletter CTA
- Footer
- Skeleton (loading state)
- Estado Vazio

---

## Comportamento Responsivo

### Mobile (< 768px)

- Variante 1: cards de categoria em 1 coluna
- Variante 2: posts em 1 coluna
- Header: titulo `text-2xl`, descricao `text-base`
- Filtro: full width

### Tablet (768px - 1024px)

- Variante 1: cards de categoria em 2 colunas
- Variante 2: posts em 2 colunas

### Desktop (> 1024px)

- Variante 1: cards de categoria em 3 colunas
- Variante 2: posts em 3 colunas

---

## Estados

### Loading

- Variante 1: 5 card skeletons no grid
- Variante 2: skeleton de header + 6 card skeletons

### Vazio (categoria sem posts)

- Icone: `Inbox` de Lucide
- Titulo: "Ainda nao temos artigos nesta categoria"
- Descricao: "Estamos preparando conteudo incrivel. Volte em breve!"
- Botao: "Ver todas as categorias"

### Erro (categoria nao encontrada - 404)

- Icone: `FolderX` de Lucide
- Titulo: "Categoria nao encontrada"
- Descricao: "A categoria que voce procura nao existe."
- Botao: "Ver todas as categorias"
