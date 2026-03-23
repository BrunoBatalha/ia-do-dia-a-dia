# Layout - Home

Pagina principal do blog. Objetivo: mostrar os artigos mais recentes de forma convidativa e guiar o leitor para explorar o conteudo.

---

## Estrutura da Pagina

```
+===========================================================+
|                       NAVBAR (sticky)                      |
+===========================================================+
|                                                             |
|  HERO SECTION                                               |
|  "IA explicada de um jeito que voce entende."               |
|  [Subtitulo descritivo]                                     |
|  [Botao: Explorar artigos]  [Botao: Sobre o blog]          |
|                                                             |
+-------------------------------------------------------------+
|                                                             |
|  POST DESTAQUE (o mais recente)                             |
|  +-------------------------------------------------------+  |
|  | [Imagem grande - aspect-video]                        |  |
|  | [Badge categoria] [Data]                              |  |
|  | [Titulo grande]                                       |  |
|  | [Descricao - 2-3 linhas]                              |  |
|  | [Tempo de leitura]                                    |  |
|  +-------------------------------------------------------+  |
|                                                             |
+-------------------------------------------------------------+
|                                                             |
|  POSTS RECENTES                                             |
|  "Ultimos artigos"                     [Ver todos ->]       |
|                                                             |
|  +----------+  +----------+  +----------+                   |
|  | Card 1   |  | Card 2   |  | Card 3   |                  |
|  | padrao   |  | padrao   |  | padrao   |                  |
|  +----------+  +----------+  +----------+                   |
|                                                             |
|  +----------+  +----------+  +----------+                   |
|  | Card 4   |  | Card 5   |  | Card 6   |                  |
|  +----------+  +----------+  +----------+                   |
|                                                             |
+-------------------------------------------------------------+
|                                                             |
|  CATEGORIAS                                                 |
|  "Explore por tema"                                         |
|                                                             |
|  [IA no Cotidiano] [Ferramentas] [Conceitos]               |
|  [Tutoriais]       [Noticias]                               |
|                                                             |
+-------------------------------------------------------------+
|                                                             |
|  NEWSLETTER CTA                                             |
|  "Receba IA no seu email"                                   |
|  [Input email] [Botao inscrever-se]                         |
|                                                             |
+-------------------------------------------------------------+
|                       FOOTER                                |
+===========================================================+
```

---

## Secoes Detalhadas

### 1. Hero Section

- **Background**: gradiente sutil de `indigo-50` para `stone-50` (light) ou `stone-900` para `stone-900` (dark)
- **Padding**: `py-16 md:py-24`
- **Titulo principal**: `text-4xl md:text-5xl lg:text-6xl font-bold text-stone-900 dark:text-stone-50`
- **Texto**: "IA explicada de um jeito que voce entende."
- **Subtitulo**: `text-lg md:text-xl text-stone-600 dark:text-stone-400 max-w-2xl`
- **Texto**: "Artigos semanais sobre inteligencia artificial para quem quer aprender sem complicacao."
- **Botoes**: flex com gap-4
  - Primario: "Explorar artigos" -> link para secao de posts
  - Secundario (outline): "Sobre o blog" -> link /sobre
- **Alinhamento**: centralizado

### 2. Post Destaque

- Usa o componente **Card Destaque (Hero)** do design system
- Mostra o post mais recente do blog
- Layout: imagem em cima, conteudo embaixo
- Desktop alternativo: layout lado a lado (`grid grid-cols-2 gap-8`) com imagem a esquerda e texto a direita
- Padding da secao: `py-12`
- Titulo da secao: nenhum (o card destaque fala por si)

### 3. Posts Recentes

- **Titulo da secao**: "Ultimos artigos" em `text-2xl font-bold text-stone-900 dark:text-stone-50`
- **Link "Ver todos"**: alinhado a direita, `text-sm text-indigo-600 dark:text-indigo-400 hover:underline`
- **Grid**: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`
- **Quantidade**: 6 posts (excluindo o destaque)
- **Componente**: Card Padrao do design system
- **Padding da secao**: `py-12`

### 4. Categorias

- **Titulo da secao**: "Explore por tema" em `text-2xl font-bold`
- **Layout**: `flex flex-wrap gap-3 justify-center`
- **Cada categoria**: card clicavel com:
  - `px-6 py-4 rounded-xl`
  - `bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700`
  - `hover:border-indigo-300 dark:hover:border-indigo-600 hover:shadow-sm`
  - Icone tematico (Lucide) + nome da categoria
  - Contagem de posts: `text-xs text-stone-500`
- **Padding da secao**: `py-12`

### 5. Newsletter CTA

- Componente Newsletter CTA do design system
- Centralizado, largura maxima `max-w-2xl mx-auto`
- Padding da secao: `py-12`

---

## Componentes Usados

- Navbar
- Card de Post (Destaque + Padrao)
- Badge de Categoria
- Botao Primario
- Botao Secundario
- Newsletter CTA
- Footer
- Skeleton (loading state)

---

## Comportamento Responsivo

### Mobile (< 768px)

- Hero: `py-12`, titulo `text-3xl`, botoes empilhados (`flex-col`)
- Post destaque: imagem em cima, texto embaixo (coluna unica)
- Posts recentes: 1 coluna, 4 posts visiveis + botao "Ver mais"
- Categorias: scroll horizontal ou 2 colunas
- Newsletter: input e botao empilhados

### Tablet (768px - 1024px)

- Hero: `py-16`, titulo `text-4xl`
- Post destaque: layout lado a lado
- Posts recentes: 2 colunas
- Categorias: flex wrap, 3 por linha
- Newsletter: input e botao lado a lado

### Desktop (> 1024px)

- Hero: `py-24`, titulo `text-5xl`
- Post destaque: layout lado a lado com mais espacamento
- Posts recentes: 3 colunas
- Categorias: flex wrap, todas em uma linha
- Newsletter: layout completo

---

## Estados

### Loading

- Hero: texto estatico (nao depende de dados)
- Post destaque: Card Skeleton grande
- Posts recentes: 6 Card Skeletons no grid
- Categorias: 5 barras skeleton arredondadas

### Vazio (sem posts)

- Substituir area de posts por estado vazio do design system
- Manter hero e newsletter

### Erro

- Mensagem de erro amigavel no lugar dos posts
- "Ops, algo deu errado ao carregar os artigos. Tente novamente em instantes."
- Botao "Tentar novamente"
