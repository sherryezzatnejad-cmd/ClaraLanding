import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Clara AI - Handle 70% of Support Tickets with Safe AI Automation',
  description:
    'Clara answers repetitive WhatsApp and web chat questions instantly. When it is unsure, it escalates to your team—so customers always get the right answer.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

