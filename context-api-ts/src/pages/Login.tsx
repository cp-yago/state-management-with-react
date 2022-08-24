import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

type User = {
  name: string
  email: string
}

export const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState<User | null>(null)
  const navigate = useNavigate()

  const handleSignIn = () => {
    if (!email || !password) return window.alert('Por favor, insira email e senha!')
    const isCredencialsValid = email === 'teste@teste.com' && password === '123456'
    if (isCredencialsValid) {
      window.alert('Login realizado com sucesso!')
      setUser({
        name: 'Yago Cunha',
        email
      })
      navigate('/home')
    } else {
      return window.alert('Usuário não encontrado, verifique as credenciais e tente novamente')
    }
  }


  return (
    <div>
      <h1>Login</h1>
      <input
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)} />
      <input
        placeholder="senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="button" onClick={handleSignIn}>Login</button>
    </div>
  )
}
