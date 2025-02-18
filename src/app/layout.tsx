import type { Metadata } from 'next'
import { Playfair_Display } from 'next/font/google'
import './globals.css'
import { Providers } from '@/components/providers'

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair'
})

export const metadata: Metadata = {
  title: 'AD | Creative Developer',
  description: 'Creative developer crafting digital experiences',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={playfair.variable} suppressHydrationWarning>
      <body className="bg-white dark:bg-black">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
} 