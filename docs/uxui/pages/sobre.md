# Layout - Pagina Sobre

Pagina institucional do blog. Objetivo: criar conexao com o leitor, explicar a missao do blog e convidar para participar.

---

## Estrutura da Pagina

```
+===========================================================+
|                       NAVBAR (sticky)                      |
+===========================================================+
|                                                             |
|  HERO / MISSAO                                              |
|  "Sobre o IA do Dia a Dia"                                  |
|  "Acreditamos que todo mundo merece entender                |
|   inteligencia artificial - sem jargao, sem                 |
|   complicacao, com exemplos do dia a dia."                  |
|                                                             |
+-------------------------------------------------------------+
|                                                             |
|  POR QUE ESTE BLOG?                                         |
|                                                             |
|  [Icone]              [Icone]              [Icone]          |
|  Simplicidade          Relevancia           Acessibilidade  |
|  Explicamos IA de      Focamos no que       Conteudo para   |
|  forma que qualquer    realmente importa    todos, sem      |
|  pessoa entende.       no seu cotidiano.    pre-requisitos. |
|                                                             |
+-------------------------------------------------------------+
|                                                             |
|  PARA QUEM E ESTE BLOG?                                    |
|                                                             |
|  Texto explicativo sobre o publico-alvo:                    |
|  curiosos, profissionais nao-tech, estudantes,              |
|  qualquer pessoa interessada em entender IA.                |
|                                                             |
+-------------------------------------------------------------+
|                                                             |
|  O QUE VOCE VAI ENCONTRAR AQUI                             |
|                                                             |
|  [Card: IA no Cotidiano] [Card: Ferramentas]               |
|  [Card: Conceitos]       [Card: Tutoriais]                 |
|                                                             |
+-------------------------------------------------------------+
|                                                             |
|  NEWSLETTER CTA                                             |
|  "Fique por dentro"                                         |
|  [Input email] [Botao]                                      |
|                                                             |
+-------------------------------------------------------------+
|                       FOOTER                                |
+===========================================================+
```

---

## Secoes Detalhadas

### 1. Hero / Missao

- **Background**: gradiente sutil, similar ao hero da home
- **Padding**: `py-16 md:py-24`
- **Titulo (h1)**: `text-3xl md:text-4xl lg:text-5xl font-bold text-stone-900 dark:text-stone-50`
- **Texto da missao**: `text-lg md:text-xl text-stone-600 dark:text-stone-400 max-w-3xl mx-auto mt-6 leading-relaxed`
- **Alinhamento**: centralizado

### 2. Pilares / Por que este blog?

- **Titulo da secao**: `text-2xl font-bold text-stone-900 dark:text-stone-50 text-center mb-12`
- **Grid**: `grid grid-cols-1 md:grid-cols-3 gap-8`
- **Cada pilar**:
  - Icone: Lucide, `w-12 h-12 text-indigo-600 dark:text-indigo-400 mx-auto mb-4`
  - Titulo: `text-lg font-semibold text-stone-900 dark:text-stone-50`
  - Descricao: `text-sm text-stone-600 dark:text-stone-400 text-center max-w-xs mx-auto`
- **Icones sugeridos**:
  - Simplicidade: `Heart` ou `Smile`
  - Relevancia: `Target`
  - Acessibilidade: `Users`
- **Padding da secao**: `py-12`

### 3. Para quem e este blog?

- **Titulo**: `text-2xl font-bold text-center`
- **Texto**: prosa natural, 2-3 paragrafos
  - `text-lg text-stone-600 dark:text-stone-400 max-w-2xl mx-auto leading-relaxed`
- **Destaque**: palavras-chave em `font-medium text-stone-900 dark:text-stone-50`
- **Background**: `bg-stone-50 dark:bg-stone-800/50`
- **Padding**: `py-12 px-4`
- **Border radius do container**: `rounded-2xl` (quando dentro do max-w)

### 4. O que voce vai encontrar

- **Titulo**: `text-2xl font-bold text-center mb-8`
- **Grid**: `grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto`
- **Cada card de conteudo**:
  - `bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl p-6`
  - Icone da categoria (mesmo da pagina de categorias)
  - Nome da categoria em `font-semibold`
  - Descricao do tipo de conteudo: 1-2 linhas
  - Link: "Ver artigos ->" em `text-sm text-indigo-600 dark:text-indigo-400`
- **Padding da secao**: `py-12`

### 5. Newsletter CTA

- Componente Newsletter CTA do design system
- Padding da secao: `py-12`

---

## Componentes Usados

- Navbar
- Botao Primario (links de acao)
- Card de Conteudo (componente especifico desta pagina)
- Newsletter CTA
- Footer

---

## Comportamento Responsivo

### Mobile (< 768px)

- Hero: `py-12`, titulo `text-3xl`
- Pilares: 1 coluna empilhada
- Cards de conteudo: 1 coluna
- Textos com margens menores

### Tablet (768px - 1024px)

- Hero: `py-16`, titulo `text-4xl`
- Pilares: 3 colunas
- Cards de conteudo: 2 colunas

### Desktop (> 1024px)

- Hero: `py-24`, titulo `text-5xl`
- Pilares: 3 colunas com mais espacamento
- Cards de conteudo: 2 colunas

---

## Estados

Esta pagina e majoritariamente estatica, sem estados dinamicos complexos.

### Loading

- Nao necessario (conteudo estatico, renderizado no servidor)

### Acessibilidade

- Hierarquia de headings correta (h1 > h2 > h3)
- Icones decorativos com `aria-hidden="true"`
- Links com texto descritivo (nao usar "clique aqui")
- Cores dos pilares com contraste adequado
- Secoes com `role` semantico quando apropriado
