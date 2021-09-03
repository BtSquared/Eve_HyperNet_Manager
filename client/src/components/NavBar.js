import { NavLink } from 'react-router-dom'
import axios from 'axios'
import Logo from '../Logo.png'
import { BASE_URL } from '../globals'

export default function NavBar() {
  async function updateShips() {
    const deleteShips = await axios.delete(`${BASE_URL}/api/ships/nukeships`)
    console.log(deleteShips)
    const deleteEstVal = await axios.delete(
      `${BASE_URL}/api/ships/nukeestimatedvalue`
    )
    console.log(deleteEstVal)
    const postEstVal = await axios.post(`${BASE_URL}/api/ships/estimatedvalue`)
    console.log(postEstVal)
    const postMakeShips = await axios.post(`${BASE_URL}/api/ships/makeships`)
    console.log(postMakeShips)
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
        <button className="navLink button" onClick={updateShips}>
          Update Ships
        </button>
      </div>
    </div>
  )
}
