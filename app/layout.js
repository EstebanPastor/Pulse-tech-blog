import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({ subsets: ['latin'], weight: ["400", "700"] })

export const metadata = {
  title: 'Tech blog',
  description: 'A blog about the latest new in the tech world',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
