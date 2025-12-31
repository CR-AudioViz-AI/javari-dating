import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Javari Connect | Find Meaningful Connections',
  description: 'A dating platform focused on authentic connections. AI-powered matching based on compatibility, values, and interests.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
