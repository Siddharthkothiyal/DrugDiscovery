const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080'

const headers = (token) => ({
  'Content-Type': 'application/json',
  ...(token ? { Authorization: `Bearer ${token}` } : {})
})

export const register = async (email, password) => {
  const res = await fetch(`${API_URL}/auth/register`, {
    method: 'POST',
    headers: headers(),
    body: JSON.stringify({ email, password })
  })
  const data = await res.json()
  if (data.token) {
    localStorage.setItem('token', data.token)
    localStorage.setItem('user', JSON.stringify(data.user))
  }
  return data
}

export const login = async (email, password) => {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: headers(),
    body: JSON.stringify({ email, password })
  })
  const data = await res.json()
  if (data.token) {
    localStorage.setItem('token', data.token)
    localStorage.setItem('user', JSON.stringify(data.user))
  }
  return data
}

export const invokePredict = async (smiles, task) => {
  const token = localStorage.getItem('token')
  const res = await fetch(`${API_URL}/predict`, {
    method: 'POST',
    headers: headers(token),
    body: JSON.stringify({ smiles, task })
  })
  if (!res.ok) throw new Error('Prediction failed')
  return await res.json()
}

export const saveMolecule = async (smiles, task, result) => {
  const token = localStorage.getItem('token')
  if (!token) return // Cannot save if not logged in
  const res = await fetch(`${API_URL}/molecules`, {
    method: 'POST',
    headers: headers(token),
    body: JSON.stringify({ smiles, task, result })
  })
  return await res.json()
}

export const getMolecules = async () => {
  const token = localStorage.getItem('token')
  if (!token) return []
  const res = await fetch(`${API_URL}/molecules`, {
    method: 'GET',
    headers: headers(token)
  })
  if (!res.ok) return []
  return await res.json()
}
