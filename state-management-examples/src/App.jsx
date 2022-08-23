import { useState } from 'react'

// Exemplo prático de prop drilling e como resolver com composition
// Mostrar o problema
// Mostrar como resolver com Context API
// Mostrar como resolver com Composition


function App() {
  const [currentUser, setCurrentUser] = useState(null)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{ backgroundColor: 'lightgray' }}>
        <Header />
      </div>
      <div>
        {currentUser ? (
          <Dashboard user={currentUser} />
        ) : (
          <LoginScreen onLogin={() => setCurrentUser({ name: 'Yago Cunha' })} />
        )}
      </div>
    </div>
  )
}

function Header() {
  return (
    <div>
      <h1>Header</h1>
    </div>
  )
}

function LoginScreen({ onLogin }) {
  return (
    <div>
      <h2>Faça Login</h2>
      <button onClick={onLogin}>Login</button>
    </div>
  )
}

function Dashboard({ user }) {
  return (
    <div>
      <h2>The Dashboard</h2>
      <DashboardNav />
      <DashboardContent user={user} />
    </div>
  )
}

function DashboardNav() {
  return (
    <div>
      <h3>Dashboard Nav</h3>
    </div>
  )
}

function DashboardContent({ user }) {
  return (
    <div>
      <h3>Dashboard Content</h3>
      <WelcomeMessage user={user} />
    </div>
  )
}

function WelcomeMessage({ user }) {
  return (
    <div>
      <h5>Welcome {user.name}</h5>
    </div>
  )
}

export default App
