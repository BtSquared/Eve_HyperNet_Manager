import { NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/ships">Ships</NavLink>
      <NavLink to="/history">Ship Performance History</NavLink>
    </div>
  )
}
