import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { estimateReadingTime } from './utils'

const POSTS_DIRECTORY = path.join(process.cwd(), 'content/posts')

export interface PostFrontmatter {
  title: string
  description: string
  date: string
  category: string
  tags?: string[]
  coverImage?: string
  coverImageAlt?: string
  author?: string
  draft?: boolean
}

export interface Post {
  slug: string
  frontmatter: PostFrontmatter
  content: string
  readingTime: number
}

export interface PostMeta {
  slug: string
  frontmatter: PostFrontmatter
  readingTime: number
}

export const CATEGORIES = [
  {
    slug: 'ia-no-cotidiano',
    name: 'IA no Cotidiano',
    description: 'Como a inteligencia artificial esta presente nas pequenas coisas do seu dia a dia.',
    icon: 'Sparkles',
  },
  {
    slug: 'ferramentas',
    name: 'Ferramentas',
    description: 'As melhores ferramentas de IA para aumentar sua produtividade.',
    icon: 'Wrench',
  },
  {
    slug: 'conceitos',
    name: 'Conceitos',
    description: 'Entenda os fundamentos da inteligencia artificial de forma simples.',
    icon: 'BookOpen',
  },
  {
    slug: 'tutoriais',
    name: 'Tutoriais',
    description: 'Guias passo a passo para usar ferramentas de IA no dia a dia.',
    icon: 'GraduationCap',
  },
  {
    slug: 'noticias',
    name: 'Noticias',
    description: 'As ultimas novidades do mundo da inteligencia artificial.',
    icon: 'Newspaper',
  },
] as const

export type CategorySlug = (typeof CATEGORIES)[number]['slug']

function getPostSlugs(): string[] {
  if (!fs.existsSync(POSTS_DIRECTORY)) {
    return []
  }
  return fs
    .readdirSync(POSTS_DIRECTORY)
    .filter((file) => file.endsWith('.mdx') || file.endsWith('.md'))
    .map((file) => file.replace(/\.(mdx|md)$/, ''))
}

export function getPostBySlug(slug: string): Post | null {
  const mdxPath = path.join(POSTS_DIRECTORY, `${slug}.mdx`)
  const mdPath = path.join(POSTS_DIRECTORY, `${slug}.md`)

  let filePath: string
  if (fs.existsSync(mdxPath)) {
    filePath = mdxPath
  } else if (fs.existsSync(mdPath)) {
    filePath = mdPath
  } else {
    return null
  }

  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContents)
  const readingTime = estimateReadingTime(content)

  return {
    slug,
    frontmatter: data as PostFrontmatter,
    content,
    readingTime,
  }
}

export function getAllPosts(): PostMeta[] {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => {
      const post = getPostBySlug(slug)
      if (!post) return null
      if (post.frontmatter.draft) return null
      return {
        slug: post.slug,
        frontmatter: post.frontmatter,
        readingTime: post.readingTime,
      }
    })
    .filter((post): post is PostMeta => post !== null)

  return posts.sort((a, b) => {
    const dateA = new Date(a.frontmatter.date).getTime()
    const dateB = new Date(b.frontmatter.date).getTime()
    return dateB - dateA
  })
}

export function getPostsByCategory(categorySlug: string): PostMeta[] {
  const allPosts = getAllPosts()
  const category = CATEGORIES.find((c) => c.slug === categorySlug)
  if (!category) return []
  return allPosts.filter(
    (post) =>
      post.frontmatter.category.toLowerCase() === category.name.toLowerCase() ||
      slugifyCategory(post.frontmatter.category) === categorySlug
  )
}

function slugifyCategory(categoryName: string): string {
  return categoryName
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

export function getCategoryPostCount(): Record<string, number> {
  const allPosts = getAllPosts()
  const counts: Record<string, number> = {}

  CATEGORIES.forEach((cat) => {
    counts[cat.slug] = 0
  })

  allPosts.forEach((post) => {
    const slug = slugifyCategory(post.frontmatter.category)
    if (slug in counts) {
      counts[slug]++
    }
  })

  return counts
}

export function getRelatedPosts(currentSlug: string, category: string, limit = 3): PostMeta[] {
  const categorySlug = slugifyCategory(category)
  const posts = getPostsByCategory(categorySlug)
  return posts.filter((post) => post.slug !== currentSlug).slice(0, limit)
}
