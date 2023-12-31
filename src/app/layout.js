import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import HouseContextProvider from '@/Context/HouseContext'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <HouseContextProvider>
      <body className={inter.className}>
      <Header/>
          {children}
          <Footer/>
        </body>
        </HouseContextProvider>
    </html>
  )
}
