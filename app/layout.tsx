import '@radix-ui/themes/styles.css';
import './theme-config.css'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Theme } from '@radix-ui/themes'
import NavBar from './NavBar'



export const metadata: Metadata = {
  title: 'Issue Tracker',
  description: 'Issue Tracker created by LazyDev',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Theme appearance='light'>
        <NavBar/>
          <main>
            {children}
          </main>
        </Theme>
      </body>
    </html>
  )
}
