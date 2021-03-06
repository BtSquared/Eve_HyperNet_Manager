import { NavLink } from 'react-router-dom'
import axios from 'axios'
import Logo from '../Logo.png'
import { BASE_URL } from '../globals'

export default function NavBar() {
  async function updateShips() {
    console.log(BASE_URL)
    const putEstVal = await axios.put(`${BASE_URL}/estvals/updateestval`)
    console.log(putEstVal)
    const putMakeShips = await axios.put(`${BASE_URL}/ships/updateships`)
    console.log(putMakeShips)
    window.location.reload()
  }
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
        <NavLink to="/contracts" className="navLink">
          Active Contracts
        </NavLink>
        <button className="navLink button" onClick={updateShips}>
          Update Ships
        </button>
      </div>
    </div>
  )
}
