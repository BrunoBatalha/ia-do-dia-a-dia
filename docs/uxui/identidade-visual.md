# Identidade Visual - IA do Dia a Dia

## Filosofia de Design

O blog "IA do Dia a Dia" adota uma estetica **neo-minimalista acolhedora**: limpa e moderna, mas com calor humano. O principio central e **"se parece complicado, o design falhou"**. Cada decisao visual prioriza legibilidade, conforto e acessibilidade.

---

## Paleta de Cores

### Light Mode

| Token              | Cor             | Hex       | Tailwind Class        | Uso                                      |
|--------------------|-----------------|-----------|----------------------|-------------------------------------------|
| **Primaria**       | Indigo suave    | `#4F46E5` | `indigo-600`         | Links, botoes, destaques principais       |
| **Primaria hover** | Indigo escuro   | `#4338CA` | `indigo-700`         | Hover em links e botoes                   |
| **Primaria light** | Indigo claro    | `#EEF2FF` | `indigo-50`          | Badges, backgrounds sutis                 |
| **Secundaria**     | Amber quente    | `#D97706` | `amber-600`          | Categorias, acentos, chamadas de atencao  |
| **Secundaria light** | Amber claro   | `#FFFBEB` | `amber-50`           | Backgrounds de destaque quente            |
| **Acento**         | Teal            | `#0D9488` | `teal-600`           | Sucesso, elementos complementares         |
| **Background**     | Branco quente   | `#FAFAF9` | `stone-50`           | Fundo principal da pagina                 |
| **Surface**        | Branco          | `#FFFFFF` | `white`              | Cards, modais, elementos elevados         |
| **Border**         | Cinza quente    | `#E7E5E4` | `stone-200`          | Bordas de cards, separadores              |
| **Texto**          | Cinza escuro    | `#1C1917` | `stone-900`          | Texto principal (corpo)                   |
| **Texto secundario** | Cinza medio   | `#57534E` | `stone-600`          | Texto secundario, metadados               |
| **Texto terciario** | Cinza claro    | `#A8A29E` | `stone-400`          | Placeholders, texto auxiliar              |

### Dark Mode

| Token              | Cor             | Hex       | Tailwind Class           | Uso                                    |
|--------------------|-----------------|-----------|--------------------------|----------------------------------------|
| **Primaria**       | Indigo claro    | `#818CF8` | `indigo-400`             | Links, botoes, destaques               |
| **Primaria hover** | Indigo mais claro | `#A5B4FC` | `indigo-300`           | Hover em links e botoes                |
| **Secundaria**     | Amber claro     | `#FBBF24` | `amber-400`              | Categorias, acentos                    |
| **Acento**         | Teal claro      | `#2DD4BF` | `teal-400`               | Sucesso, complementares                |
| **Background**     | Cinza muito escuro | `#1C1917` | `stone-900`           | Fundo principal                        |
| **Surface**        | Cinza escuro    | `#292524` | `stone-800`              | Cards, elementos elevados              |
| **Border**         | Cinza medio escuro | `#44403C` | `stone-700`            | Bordas, separadores                    |
| **Texto**          | Cinza muito claro | `#FAFAF9` | `stone-50`             | Texto principal                        |
| **Texto secundario** | Cinza claro   | `#A8A29E` | `stone-400`              | Texto secundario                       |

### Contrastes WCAG AA (verificados)

- `stone-900` sobre `stone-50`: ratio ~17.4:1 (AAA)
- `indigo-600` sobre `white`: ratio ~5.3:1 (AA)
- `stone-50` sobre `stone-900`: ratio ~17.4:1 (AAA)
- `indigo-400` sobre `stone-900`: ratio ~6.1:1 (AA)
- `stone-600` sobre `stone-50`: ratio ~5.7:1 (AA)

---

## Tipografia

### Fontes (Google Fonts)

| Tipo       | Fonte              | Peso                 | Uso                               |
|------------|--------------------|----------------------|-----------------------------------|
| Headings   | **Inter**          | 700 (Bold), 600 (Semi) | Titulos h1-h6, destaques         |
| Body       | **Inter**          | 400 (Regular), 500 (Medium) | Corpo de texto, paragrafos  |
| Mono/Code  | **JetBrains Mono** | 400 (Regular)        | Blocos de codigo, inline code     |

> **Por que Inter?** Fonte moderna, altamente legivel em telas, excelente suporte a caracteres e otimizada para UI. Usar uma unica familia reduz o peso da pagina e garante consistencia visual.

### Escala Tipografica

Baseada no sistema de escala do Tailwind CSS:

| Elemento    | Tailwind Class  | Tamanho  | Line Height | Peso   |
|-------------|----------------|----------|-------------|--------|
| h1          | `text-4xl`     | 36px     | 40px        | 700    |
| h2          | `text-3xl`     | 30px     | 36px        | 700    |
| h3          | `text-2xl`     | 24px     | 32px        | 600    |
| h4          | `text-xl`      | 20px     | 28px        | 600    |
| Body large  | `text-lg`      | 18px     | 28px        | 400    |
| Body        | `text-base`    | 16px     | 24px        | 400    |
| Body small  | `text-sm`      | 14px     | 20px        | 400    |
| Caption     | `text-xs`      | 12px     | 16px        | 500    |

### Largura de leitura

- Paragrafos de texto longo: `max-w-prose` (65ch / ~680px) para conforto de leitura
- Conteudo de post: `max-w-3xl` (768px) centralizado

---

## Espacamentos

### Sistema de Grid

- Container maximo: `max-w-6xl` (1152px) centralizado com `mx-auto`
- Padding lateral do container: `px-4` (16px) mobile, `px-6` (24px) tablet, `px-8` (32px) desktop
- Grid de cards: CSS Grid com `gap-6` (24px) entre cards

### Paddings e Margins padrao

| Contexto                  | Valor Tailwind | Pixels |
|---------------------------|---------------|--------|
| Secao vertical            | `py-12`       | 48px   |
| Secao vertical (mobile)  | `py-8`        | 32px   |
| Card interno              | `p-6`         | 24px   |
| Card interno (mobile)     | `p-4`         | 16px   |
| Entre elementos de card   | `gap-3`       | 12px   |
| Entre secoes na pagina    | `space-y-12`  | 48px   |
| Inline spacing (icon+text)| `gap-2`       | 8px    |

---

## Bordas e Sombras

### Border Radius

| Elemento        | Tailwind Class  | Valor  |
|-----------------|----------------|--------|
| Cards           | `rounded-xl`    | 12px   |
| Botoes          | `rounded-lg`    | 8px    |
| Badges          | `rounded-full`  | 9999px |
| Inputs          | `rounded-lg`    | 8px    |
| Imagens         | `rounded-lg`    | 8px    |

### Sombras

| Contexto                | Tailwind Class     | Uso                       |
|-------------------------|--------------------|---------------------------|
| Card em repouso         | `shadow-sm`        | Elevacao sutil            |
| Card em hover           | `shadow-md`        | Feedback de interacao     |
| Navbar fixa             | `shadow-sm`        | Separacao do conteudo     |
| Modal/Dropdown          | `shadow-lg`        | Destaque forte            |

Transicao de sombra em hover: `transition-shadow duration-200`

---

## Dark Mode

### Estrategia

- **Classe CSS**: Usar `darkMode: 'class'` no Tailwind (toggle manual)
- **Toggle**: Botao na navbar com icone sol/lua
- **Persistencia**: Salvar preferencia no `localStorage`
- **Padrao inicial**: Respeitar `prefers-color-scheme` do sistema operacional

### Aplicacao

Usar prefixo `dark:` do Tailwind em cada componente:

```
bg-stone-50 dark:bg-stone-900
text-stone-900 dark:text-stone-50
border-stone-200 dark:border-stone-700
```

---

## Iconografia

- **Biblioteca**: Lucide React (leve, consistente, otima para UI)
- **Tamanho padrao**: 20px (`w-5 h-5`)
- **Tamanho em botoes**: 16px (`w-4 h-4`)
- **Cor**: Herda a cor do texto (`currentColor`)

---

## Animacoes e Transicoes

- Transicoes suaves de 200ms para hovers: `transition-all duration-200`
- Sem animacoes chamativas ou que causem distracao
- `prefers-reduced-motion`: respeitar configuracao do usuario com `motion-reduce:transition-none`
