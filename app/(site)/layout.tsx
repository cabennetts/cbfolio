import '../globals.css'
import type { Metadata } from 'next'
import { Oswald } from 'next/font/google'
import { Navbar } from '@/components/global/Navbar'
import { Footer } from '@/components/global/Footer'

const oswald = Oswald({ subsets:['cyrillic'], weight: ['200', '300']})

export const metadata: Metadata = {
  title: 'Caleb Bennetts Portfolio | Cabennetts',
  description: 'Caleb Bennetts Portfolio and blog site',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={oswald.className}>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  )
}
