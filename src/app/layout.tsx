import '@/app/globals.scss' // or .css, depending on what you use
import styles from '@/styles/Layout.module.scss'
import Navbar from '@/components/Navbar'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Healthcare App',
  description: 'Manage your health in one place.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className={inter.className}>
        <div className={styles.layoutContainer}>
          <Navbar />
          <main className={styles.main}>
            {children}
          </main>
          <footer className={styles.footer}>
            &copy; {new Date().getFullYear()} Healthcare App. All rights reserved.
          </footer>
        </div>
      </body>
    </html>
  )
}
