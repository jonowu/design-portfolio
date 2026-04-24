import React from 'react'
import './styles.css'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import { Header } from '@/components/header/header'

export const metadata = {
  description: 'chloe leung - Brand & digital designer, humanising brands at scale',
  title: 'chloe leung',
}

const inter = Inter({
  subsets: ['latin'],
})
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
})

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en" className={`${inter.className} ${plusJakartaSans.className}`}>
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}
