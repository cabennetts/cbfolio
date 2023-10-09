import '../globals.css'
import type { Metadata } from 'next'
import { supreme, switzer, supremeItalic, ranade } from '@/styles/font'
import { Navbar } from '@/components/global/Navbar'
import { Footer } from '@/components/global/Footer'

export const metadata: Metadata = {
  title: 'Portfolio | Caleb Bennetts',
  description: 'Caleb Bennetts Portfolio and blog site',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${ranade.variable} ${supreme.variable} ${supremeItalic.variable} ${switzer.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
