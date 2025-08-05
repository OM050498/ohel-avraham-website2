import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'אבי דהאן - הנדימן ואחזקה',
  description: 'כל שירותי התיקונים/שיפוצים לבית שלך',
  generator: 'OM1',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
