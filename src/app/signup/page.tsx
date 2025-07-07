'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import styles from '@/styles/Auth.module.scss'
import Link from 'next/link'

export default function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!formData.name.trim()) {
      return setError('Name is required')
    }
    if (!validateEmail(formData.email)) {
      return setError('Please enter a valid email')
    }
    if (formData.password.length < 8) {
      return setError('Password must be at least 8 characters')
    }
    if (formData.password !== formData.confirmPassword) {
      return setError('Passwords do not match')
    }

    setIsLoading(true)
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      router.push('/dashboard')
    } catch {
      setError('Signup failed. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className={styles.loginWrapper}>
      <div className={styles.loginBox}>
        <h2 className={styles.heading}>Create Your Account</h2>
        
        {error && <div className={styles.error}>{error}</div>}
        
        <form onSubmit={handleSubmit} className={styles.formGroup}>
          <input
            name="name"
            type="text"
            placeholder="Full Name"
            className={styles.input}
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            className={styles.input}
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            className={styles.input}
            value={formData.password}
            onChange={handleChange}
            minLength={8}
            required
          />
          <input
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            className={styles.input}
            value={formData.confirmPassword}
            onChange={handleChange}
            minLength={8}
            required
          />
          <button
            type="submit"
            className={styles.button}
            disabled={isLoading}
          >
            {isLoading ? <span className={styles.spinner}></span> : 'Sign Up'}
          </button>
        </form>

        <div className={styles.links}>
          <Link href="/login">Already have an account? Login</Link>
        </div>
      </div>
    </main>
  )
}