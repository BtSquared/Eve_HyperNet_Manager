export default function ShipCard(props) {
  const URL = `https://images.evetech.net/types/${props.itemId}/render?size=64`
  const capitol = props.capitol.toLocaleString('en-US')
  const profit = props.profit.toLocaleString('en-US')
  const loss = props.loss.toLocaleString('en-US')
  return (
    <div className="shipCard">
      <img className="shipIcon" src={URL} />
      <div>
        <div className="shipDivs">Name: {props.name}</div>
        <div className="shipDivs">Odds: {props.odds}</div>
        <div className="shipDivs">HyperCore Count: {props.core}</div>
      </div>
      <div>
        <div className="shipDivs">Capitol Required: {capitol}</div>
        <div className="shipDivs">Potential Profit: {profit}</div>
        <div className="shipDivs">Potential Loss: {loss}</div>
      </div>
    </div>
  )
}
