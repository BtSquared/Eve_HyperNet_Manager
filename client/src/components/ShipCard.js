export default function ShipCard(props) {
  const URL = `https://images.evetech.net/types/${props.itemId}/render?size=128`
  const capitol = props.capitol.toLocaleString('en-US')
  const profit = props.profit.toLocaleString('en-US')
  const loss = props.loss.toLocaleString('en-US')

  const handleChange = (e) => {
    if (e.target.value >= 10) {
      props.setInput(10)
    } else if (e.target.value <= 0) {
      props.setInput('')
    } else {
      props.setInput(Math.floor(e.target.value))
    }
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
            value={props.inputVal}
            onChange={handleChange}
          ></input>
          <button>Add</button>
        </div>
      </div>
    </div>
  )
}
