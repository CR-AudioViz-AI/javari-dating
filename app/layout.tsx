// app/layout.tsx — Javari Dating
// Fortune 50 quality — uses AppShell for full ecosystem integration
// May 17, 2026 — CR AudioViz AI, LLC
import type { Metadata } from 'next'
import './globals.css'
export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Javari Dating | Javari by CR AudioViz AI',
  description: 'AI-powered dating profile and advice',
  keywords: 'Javari Dating, Javari, AI, CR AudioViz AI',
}

import AppShell from '@/components/AppShell'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>
        <AppShell
          appName="Javari Dating"
          appColor="#ec4899"
          appEmoji="💕"
          appDesc="AI-powered dating profile and advice"
        >
          {children}
        </AppShell>
      </body>
    </html>
  )
}
