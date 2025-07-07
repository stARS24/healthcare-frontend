'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import styles from '@/styles/Auth.module.scss'
import Link from 'next/link'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  // Built-in email validation
  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    
    if (!validateEmail(email)) {
      return setError('Please enter a valid email address')
    }
    if (password.length < 8) {
      return setError('Password must be at least 8 characters')
    }

    setIsLoading(true)
    
    try {
      // Mock API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Successful login redirect
      router.push('/dashboard')
    } catch {
      setError('Login failed. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className={styles.loginWrapper}>
      <div className={styles.loginBox}>
        <h2 className={styles.heading}>Login to Your Account</h2>
        
        {/* Demo credentials */}
        <div className={styles.demoNote}>
          <p>Try with:</p>
          <p>Email: user@example.com</p>
          <p>Password: any 8+ characters</p>
        </div>
        
        {error && <div className={styles.error}>{error}</div>}
        
        <form onSubmit={handleSubmit} className={styles.formGroup}>
          <input
            type="email"
            placeholder="Email"
            className={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            minLength={8}
            required
          />
          <button
            type="submit"
            className={styles.button}
            disabled={isLoading}
          >
            {isLoading ? (
              <span className={styles.spinner}></span>
            ) : 'Login'}
          </button>
        </form>
        
        <div className={styles.links}>
          <Link href="/signup">Create an account</Link>
          <Link href="/forgot-password">Forgot password?</Link>
        </div>
      </div>
    </main>
  )
}