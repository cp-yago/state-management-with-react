import { Link } from "react-router-dom"

export const Home = () => {
  const user = null

  return (
    <div>
      <h1>{`Olá ${user?.name}`}</h1>
      <Link to="/settings">Settings</Link>
    </div>
  )
}
