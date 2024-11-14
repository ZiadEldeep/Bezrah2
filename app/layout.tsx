// app/layout.tsx
import './globals.css'

export const metadata = {
  title: 'Green Roof Solutions',
  description: 'Sustainable and eco-friendly roofing solutions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
