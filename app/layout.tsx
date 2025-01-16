import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'


const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'Magicui - Beautiful UI Components',
  description:
    '50+ free and open-source animated components built with React, Typescript, Tailwind CSS, and Framer Motion.'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang='en'
      className={`${inter.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body className='min-h-screen overflow-y-scroll bg-background tracking-tight text-foreground antialiased'>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <div className='relative flex min-h-screen flex-col'>
            <div className='flex-1'>{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
