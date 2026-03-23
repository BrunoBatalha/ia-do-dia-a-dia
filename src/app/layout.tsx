import type { Metadata } from 'next'
import Script from 'next/script'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { ThemeProvider } from '@/components/layout/theme-provider'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'IA do Dia a Dia',
    template: '%s | IA do Dia a Dia',
  },
  description:
    'Artigos semanais sobre inteligencia artificial para quem quer aprender sem complicacao.',
  metadataBase: new URL('https://iadodiaadia.com.br'),
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://iadodiaadia.com.br',
    siteName: 'IA do Dia a Dia',
    title: 'IA do Dia a Dia',
    description:
      'Artigos semanais sobre inteligencia artificial para quem quer aprender sem complicacao.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IA do Dia a Dia',
    description:
      'Artigos semanais sobre inteligencia artificial para quem quer aprender sem complicacao.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased min-h-screen flex flex-col`}>
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
        <ThemeProvider>
          <a href="#main-content" className="skip-link">
            Pular para o conteudo
          </a>
          <Navbar />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
