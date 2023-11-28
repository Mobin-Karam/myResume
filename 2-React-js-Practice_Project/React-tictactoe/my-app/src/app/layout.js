import { Inter } from 'next/font/google'
import './globals.css'
// Fonts 
const inter = Inter({ subsets: ['latin'] })
// Meta Data 
export const metadata = {
  title: 'TicTacToe App',
  description: 'The tutorial app for learning React.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
