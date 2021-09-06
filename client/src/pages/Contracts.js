import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'
import ActiveContracts from '../components/ActiveContracts'

function Contracts() {
  const [contracts, setContracts] = useState([])
  const [profit, setProfit] = useState(0)

  const getContracts = async function () {
    try {
      const res = await axios.get(`${BASE_URL}/contract/getcontract`)
      setContracts(res.data.contract[0].activeContracts)
      setProfit(res.data[0].profit)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(async () => {
    getContracts()
  }, [])

  return (
    <div>
      <div>{profit}</div>
      <div>
        <div>
          {contracts.map((ship, index) => (
            <ActiveContracts
              key={ship.objectId}
              name={ship.name}
              itemId={ship.itemId}
              odds={ship.odds}
              profit={ship.profit}
              loss={ship.loss}
              coreCost={ship.coreCost}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Contracts
