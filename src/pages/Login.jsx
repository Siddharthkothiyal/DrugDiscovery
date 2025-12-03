import { useState } from 'react'
import { register, login } from '../utils/api'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [mode, setMode] = useState('login')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')
    try {
      const fn = mode === 'login' ? login : register
      const r = await fn(email, password)
      setMessage(r?.user ? 'Success' : 'Success')
    } catch (err) {
      setMessage('Error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="mx-auto max-w-md px-4 sm:px-6 lg:px-8 py-12">
      <div className="rounded-2xl bg-white border-2 border-secondary p-6 shadow-soft">
        <div className="flex justify-between items-center mb-4">
          <div className="text-xl font-semibold text-accent">{mode === 'login' ? 'Login' : 'Register'}</div>
          <button onClick={() => setMode(mode === 'login' ? 'register' : 'login')} className="rounded-xl border border-accent px-3 py-1 text-accent">{mode === 'login' ? 'Register' : 'Login'}</button>
        </div>
        <form onSubmit={submit} className="space-y-3">
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="w-full rounded-xl border border-secondary/60 bg-light/50 px-3 py-2 text-accent" />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="w-full rounded-xl border border-secondary/60 bg-light/50 px-3 py-2 text-accent" />
          <button type="submit" className="w-full rounded-2xl bg-primary/80 backdrop-blur text-accent px-6 py-3 font-semibold shadow-soft">{loading ? '...' : 'Submit'}</button>
        </form>
        {message && <div className="mt-3 text-center text-accent">{message}</div>}
      </div>
    </div>
  )
}
