import { useEffect, useState } from 'react'
import axios from 'axios'
import BASE_URL from '../globals'

export default function Ships() {
  const [ships, setShips] = useState([])

  useEffect(async () => {
    const res = await axios.get(`${BASE_URL}/api/ships`)
    console.log(res.data)
    setShips(res.data)
  }, [])

  return (
    <div>
      <div></div>
    </div>
  )
}
