import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'
import ShipCard from '../components/ShipCard'

export default function Contracts() {
  const [contracts, setContracts] = useState([])
  const [profit, setProfit] = useState(0)

  useEffect(async () => {
    const res = await axios.get(`${BASE_URL}/contract/getcontract`)
    setContracts(res.data[0].activeContracts)
    setProfit(res.data.profit)
  }, [])

  return (
    <div>
      <div>
        <div>{profit}</div>
      </div>
    </div>
  )
}
