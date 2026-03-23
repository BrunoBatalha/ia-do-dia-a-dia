# Layout - Pagina de Post

Pagina individual de um artigo do blog. Objetivo: proporcionar uma experiencia de leitura confortavel e sem distracoes.

---

## Estrutura da Pagina

```
+===========================================================+
|                       NAVBAR (sticky)                      |
+===========================================================+
|                                                             |
|  BREADCRUMB                                                 |
|  Home / Categoria / Titulo do post                          |
|                                                             |
+-------------------------------------------------------------+
|                                                             |
|  HEADER DO POST                                             |
|  [Badge categoria]                                          |
|  [Titulo - h1 grande]                                       |
|  [Descricao/subtitulo]                                      |
|  [Data] · [Tempo de leitura]                                |
|                                                             |
+-------------------------------------------------------------+
|                                                             |
|  [Imagem de capa - full width no container]                 |
|                                                             |
+-------------------------------------------------------------+
|                                                             |
|  +---------------------------+  +---------------------+     |
|  |                           |  |                     |     |
|  |  CONTEUDO MDX             |  |  TABLE OF CONTENTS  |     |
|  |  (prose)                  |  |  (sticky sidebar)   |     |
|  |                           |  |                     |     |
|  |  ## Subtitulo             |  |  - Subtitulo        |     |
|  |  Paragrafo...             |  |  - Outro topico     |     |
|  |  ### Sub-sub              |  |    - Sub-sub        |     |
|  |  Paragrafo...             |  |  - Conclusao        |     |
|  |                           |  |                     |     |
|  |  > Blockquote             |  +---------------------+     |
|  |                           |                               |
|  |  ```codigo```             |                               |
|  |                           |                               |
|  +---------------------------+                               |
|                                                             |
+-------------------------------------------------------------+
|                                                             |
|  COMPARTILHAR                                               |
|  "Gostou? Compartilhe!"                                     |
|  [Twitter/X] [LinkedIn] [Copiar link]                       |
|                                                             |
+-------------------------------------------------------------+
|                                                             |
|  POSTS RELACIONADOS                                         |
|  "Continue lendo"                                           |
|  +----------+  +----------+  +----------+                   |
|  | Card     |  | Card     |  | Card     |                  |
|  | padrao   |  | padrao   |  | padrao   |                  |
|  +----------+  +----------+  +----------+                   |
|                                                             |
+-------------------------------------------------------------+
|                                                             |
|  NEWSLETTER CTA                                             |
|                                                             |
+-------------------------------------------------------------+
|                       FOOTER                                |
+===========================================================+
```

---

## Secoes Detalhadas

### 1. Breadcrumb

- Componente Breadcrumb do design system
- Exemplo: `Home / IA no Cotidiano / Como a IA muda seu dia`
- Padding: `pt-6 pb-2`

### 2. Header do Post

- **Badge de categoria**: componente Badge do design system, clicavel (leva para pagina da categoria)
- **Titulo (h1)**: `text-3xl md:text-4xl lg:text-5xl font-bold text-stone-900 dark:text-stone-50 leading-tight`
- **Descricao**: `text-lg md:text-xl text-stone-600 dark:text-stone-400 mt-4`
- **Metadados**: `flex items-center gap-2 text-sm text-stone-500 dark:text-stone-400 mt-6`
  - Data formatada: "22 de marco de 2026"
  - Separador: `·`
  - Tempo de leitura: "5 min de leitura"
- **Padding**: `py-8`
- **Largura maxima**: `max-w-3xl` (centralizado, mesmo que o container seja maior)

### 3. Imagem de Capa

- `w-full aspect-video rounded-xl object-cover`
- Largura maxima: `max-w-4xl mx-auto`
- Se o post nao tiver imagem, esta secao nao aparece
- Alt text obrigatorio para acessibilidade

### 4. Conteudo + Sidebar (TOC)

- **Layout desktop**: `grid grid-cols-1 lg:grid-cols-[1fr_250px] gap-12`
- **Conteudo MDX**:
  - Usar `@tailwindcss/typography`: `prose prose-lg prose-stone dark:prose-invert`
  - Largura maxima: `max-w-3xl`
  - Estilos customizados conforme design system (blockquotes, code, links)
- **Table of Contents (sidebar)**:
  - Componente TOC do design system
  - `sticky top-24` (abaixo da navbar)
  - Visivel apenas em desktop (`hidden lg:block`)
  - Scroll spy: destaca o topico atual conforme scroll

### 5. Mobile TOC

- Em mobile/tablet: TOC colapsavel no topo do conteudo
- Botao: "Neste artigo" com icone `ChevronDown`
- Ao clicar: expande lista de topicos
- Background: `bg-stone-50 dark:bg-stone-800/50 rounded-xl p-4 mb-8`

### 6. Compartilhar

- Alinhamento: centralizado
- Padding: `py-8`
- Borda superior: `border-t border-stone-200 dark:border-stone-700`
- Titulo: "Gostou? Compartilhe!" em `text-lg font-semibold`
- Botoes: `flex gap-3 justify-center`
  - Cada botao: icone da rede + label
  - Estilo: botao ghost do design system
  - Redes: Twitter/X, LinkedIn, Copiar link (com feedback "Copiado!")

### 7. Posts Relacionados

- **Titulo**: "Continue lendo" em `text-2xl font-bold`
- **Grid**: `grid grid-cols-1 md:grid-cols-3 gap-6`
- **Quantidade**: 3 posts da mesma categoria
- **Componente**: Card Padrao do design system
- **Padding da secao**: `py-12`

### 8. Newsletter CTA

- Componente Newsletter CTA do design system
- Padding da secao: `py-12`

---

## Componentes Usados

- Navbar
- Breadcrumb
- Badge de Categoria
- Tipografia MDX (prose)
- Table of Contents (TOC)
- Botoes de Compartilhar
- Card de Post (Padrao)
- Newsletter CTA
- Footer
- Scroll to Top
- Skeleton (loading state)

---

## Comportamento Responsivo

### Mobile (< 768px)

- Titulo: `text-3xl`
- TOC: colapsavel no topo do conteudo
- Sem sidebar - conteudo em coluna unica
- Imagem de capa: full width com `rounded-lg`
- Posts relacionados: 1 coluna, scroll horizontal ou empilhados
- Compartilhar: icones menores, sem labels

### Tablet (768px - 1024px)

- Titulo: `text-4xl`
- TOC: ainda colapsavel no topo
- Conteudo em coluna unica
- Posts relacionados: 2-3 colunas
- Compartilhar: com labels

### Desktop (> 1024px)

- Titulo: `text-5xl`
- TOC: sidebar sticky a direita
- Layout de 2 colunas (conteudo + sidebar)
- Posts relacionados: 3 colunas

---

## Estados

### Loading

- Skeleton para header (barras de titulo, badge, metadados)
- Skeleton retangular para imagem
- Skeleton de paragrafos para conteudo
- Skeleton de cards para posts relacionados

### Erro (post nao encontrado - 404)

- Icone: `FileX` de Lucide
- Titulo: "Artigo nao encontrado"
- Descricao: "O artigo que voce procura nao existe ou foi removido."
- Botao: "Voltar para a home" (primario)
- Centralizado na pagina

---

## Acessibilidade

- Imagem de capa com `alt` descritivo (vem do frontmatter do MDX)
- Headings em ordem hierarquica (h1 unico no titulo, h2/h3 no conteudo)
- Links do TOC com `aria-current` para o item ativo
- Botoes de compartilhar com `aria-label` descritivo
- Skip link para o conteudo principal: "Pular para o conteudo"
- Conteudo MDX com semantica correta (blockquote, code, lists)
