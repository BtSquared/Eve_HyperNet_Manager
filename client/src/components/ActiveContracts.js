import axios from 'axios'

function ActiveContracts(props) {
  const URL = `https://images.evetech.net/types/${props.itemId}/render?size=128`
  const coreCost = props.coreCost.toLocaleString('en-US')
  const profit = props.profit.toLocaleString('en-US')
  const loss = props.loss.toLocaleString('en-US')

  return (
    <div className="shipCard">
      <div className="cardCon">
        <div>
          <img className="shipIcon active" src={URL} />
          <div className="shipDivs nums">{props.name}</div>
        </div>
        <div>
          <div className="shipDivs nums">Hypercore Cost</div>
          <div className="shipDivs nums">{coreCost}</div>
          <button>Expired</button>
        </div>
        <div>
          <div className="shipDivs nums">Loss</div>
          <div
            className="shipDivs nums"
            style={{ color: 'hsla(0, 80%, 48%, 0.865)' }}
          >
            {loss}
          </div>
          <button>Loss</button>
        </div>
        <div>
          <div className="shipDivs nums">Profit</div>
          <div
            className="shipDivs nums"
            style={{ color: 'hsla(117, 77%, 45%, 0.865)' }}
          >
            {profit}
          </div>
          <button>Win</button>
        </div>
      </div>
    </div>
  )
}

export default ActiveContracts
