import './globals.css'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next App Tutorial',
  description: 'For fun',
  
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="app-header">
          Heres the header 
        </header>
        {children}
        <footer className="app-footer">This is the footer</footer>
      </body>
    </html>
  )
}
