import type { Metadata } from 'next'
import { Jost } from 'next/font/google'
import './globals.css'

const jost = Jost({ subsets: ['latin', 'latin-ext'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
  // <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" />
  // <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Domine:wght@400;500;600;700&display=swap" />
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl">
      <body className={jost.className}>
        {children}
      </body>
    </html>
  )
}