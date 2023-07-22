import { Sidebar } from '@/components/Sidebar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Header } from '@/components/Header'
import { HeroPattern } from '@/components/HeroPattern'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'UI Tailwindcss',
  description: 'UI Tailwind created by Daniel Koti',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-zinc-900`}>
        <Sidebar />

        <div className='ml-0 lg:ml-80 relative h-screen'>
          <Header />
          <HeroPattern />
          <div className='py-24 max-w-4xl px-8 mx-auto'>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
