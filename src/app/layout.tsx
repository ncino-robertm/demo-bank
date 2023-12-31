import './globals.css'
import './custom.scss'
import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
import Footer from './footer'
import Header from './header'


// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Your Financial',
  description: 'Website for demo FI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{minHeight: '100vh'}}>
      {/* <body style={{minHeight: '100vh'}} className={inter.className}> */}
        {<Header />}
        {children}
        {<Footer />}
      </body>
    </html>
  )
}
