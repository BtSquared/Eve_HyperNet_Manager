export default function ShipCard(props) {
  const URL = `https://images.evetech.net/types/${props.itemId}/render?size=128`
  const capitol = props.capitol.toLocaleString('en-US')
  const profit = props.profit.toLocaleString('en-US')
  const loss = props.loss.toLocaleString('en-US')
  return (
    <div className="shipCard">
      <img className="shipIcon" src={URL} />
      <div>
        <div className="shipDivs nums">{props.name}</div>
        <div className="shipDivs nums">HyperCores: {props.core}</div>
        <div className="shipDivs nums">Capitol: {capitol}</div>
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
          Odds: {props.odds}
        </div>
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
      </div>
    </div>
  )
}
