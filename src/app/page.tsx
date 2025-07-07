'use client'
import styles from '@/styles/Home.module.scss'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Welcome to HealthCare+</h1>
      <p className={styles.subtitle}>Manage your health in one place, anytime, anywhere.</p>
      <div className={styles.buttonGroup}>
        <Link href="/signup">
          <button className={`${styles.button} ${styles.primary}`}>Sign Up</button>
        </Link>
        <Link href="/login">
          <button className={`${styles.button} ${styles.outline}`}>Login</button>
        </Link>
      </div>
    </main>
  )
}
