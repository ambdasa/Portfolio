'use client'

import { ThemeProvider } from '@/components/theme-provider'
import Navbar from '@/components/Navbar'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className="min-h-screen">
        <Navbar />
        <main className="pt-16">
          {children}
        </main>
      </div>
    </ThemeProvider>
  )
} 