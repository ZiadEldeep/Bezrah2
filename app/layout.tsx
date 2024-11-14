import './globals.css'
import Head from 'next/head'

export const metadata = {
  title: 'Bezra',
  description: 'Sustainable and eco-friendly roofing solutions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Add the favicon */}
        <link rel="icon" href="/images/logo.jpeg" type="image/x-icon" />
        {/* Optional: Add Apple touch icon for iOS */}
        <link rel="apple-touch-icon" href="/images/logo.jpeg" />
        {/* Optional: Add a manifest file for Progressive Web App */}
        {/* <link rel="manifest" href="/manifest.json" /> */}
      </head>
      <body>{children}</body>
    </html>
  )
}
