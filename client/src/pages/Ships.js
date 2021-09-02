import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'
import ShipCard from '../components/ShipCard'

export default function Ships() {
  const [ships, setShips] = useState([])

  useEffect(async () => {
    try {
      const res = await axios.get(`${BASE_URL}/api/ships`)
      const sortedArr = res.data.sort((a, b) => b.odds - a.odds)
      setShips(sortedArr)
    } catch (err) {
      console.log(err)
    }
  }, [])

  return (
    <div>
      <div className="shipCardCon">
        {ships.map((ship) => (
          <ShipCard
            key={ship._id}
            itemId={ship.itemId}
            name={ship.shipName}
            odds={ship.odds}
            core={ship.coreCount}
            capitol={ship.capitolReq}
            profit={ship.potentialProfit}
            loss={ship.potentialLoss}
          />
        ))}
      </div>
    </div>
  )
}
