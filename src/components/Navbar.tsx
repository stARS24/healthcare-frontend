'use client'
import Link from 'next/link'
import styles from '@/styles/Layout.module.scss'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark'
    }
    return false
  })
  const pathname = usePathname()

  useEffect(() => {
    const theme = darkMode ? 'dark' : 'light'
    document.body.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [darkMode])

  const toggleMenu = () => setMenuOpen(!menuOpen)
  const closeMenu = () => setMenuOpen(false)

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/dashboard', label: 'Dashboard' },
    { href: '/login', label: 'Login' },
    { href: '/signup', label: 'Sign Up' }
  ]

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContent}>
        <div className={styles.brand}>
          <Link href="/" onClick={closeMenu}>
            <span>HealthCare+</span>
          </Link>
        </div>

        <ul className={`${styles.navLinks} ${menuOpen ? styles.show : ''}`}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link 
                href={link.href}
                className={pathname === link.href ? styles.active : ''}
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className={styles.rightControls}>
          <button
            className={styles.themeToggle}
            onClick={() => setDarkMode(!darkMode)}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {darkMode ? '🌙' : '☀️'}
          </button>

          <button
            className={styles.menuToggle}
            onClick={toggleMenu}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>
    </nav>
  )
}