import '../globals.css'
import type { Metadata } from 'next'
import { Oswald, Titillium_Web } from 'next/font/google'
import { Navbar } from '@/components/global/Navbar'
import { Footer } from '@/components/global/Footer'

const oswald = Oswald({ subsets:['cyrillic'], weight: ['200', '300']})
const titillium = Titillium_Web({ subsets:['latin'], weight: ['300', '400', '600', '700']})
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
      <body className={titillium.className}>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  )
}
