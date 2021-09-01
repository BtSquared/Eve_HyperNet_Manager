import { NavLink } from 'react-router-dom'
import Logo from '../Logo.png'

export default function NavBar() {
  return (
    <div className="navBar">
      <img className="logo" src={Logo} />
      <div>
        <NavLink to="/" className="navLink">
          Home
        </NavLink>
        <NavLink to="/ships" className="navLink">
          Ships
        </NavLink>
        <NavLink to="/history" className="navLink">
          History
        </NavLink>
      </div>
    </div>
  )
}
