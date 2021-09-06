import { useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'

export default function ShipCard(props) {
  const URL = `https://images.evetech.net/types/${props.itemId}/render?size=128`
  const capitol = props.capitol.toLocaleString('en-US')
  const profit = props.profit.toLocaleString('en-US')
  const loss = props.loss.toLocaleString('en-US')
  const [contractTrack, setContractTrack] = useState(0)

  const handleChange = (e) => {
    if (e.target.value >= 10) {
      setContractTrack(10)
    } else if (e.target.value <= 0) {
      setContractTrack('')
    } else {
      setContractTrack(Math.floor(e.target.value))
    }
  }

  const handleClick = async () => {
    for (let i = 0; i < contractTrack; i++) {
      await axios.put(`${BASE_URL}/contract/updatecontract`, {
        name: props.name,
        objectId: props.objectId,
        itemId: props.itemId,
        odds: props.odds,
        profit: props.profit,
        loss: props.loss,
        coreCost: props.coreCost
      })
    }
    setContractTrack(0)
  }

  return (
    <div className="shipCard">
      <div>
        <img className="shipIcon" src={URL} />
        <div className="shipDivs nums">{props.name}</div>
      </div>
      <div>
        <div
          className="shipDivs nums"
          style={
            props.odds >= 1.2
              ? { color: 'hsla(117, 77%, 45%, 0.865)' }
              : { color: 'hsla(0, 80%, 48%, 0.865)' }
          }
        >
          Return: {props.odds}
        </div>
        <div className="shipDivs nums">HyperCores: {props.core}</div>
        <div className="shipDivs nums">Capitol: {capitol}</div>
      </div>
      <div>
        <div
          className="shipDivs nums"
          style={{ color: 'hsla(117, 77%, 45%, 0.865)' }}
        >
          Profit: {profit}
        </div>
        <div
          className="shipDivs nums"
          style={{ color: 'hsla(0, 80%, 48%, 0.865)' }}
        >
          Loss: {loss}
        </div>
        <div className="buttonDiv">
          <input
            type="number"
            className="contractNum"
            value={contractTrack}
            onChange={handleChange}
          ></input>
          <button onClick={handleClick}>Add</button>
        </div>
      </div>
    </div>
  )
}
