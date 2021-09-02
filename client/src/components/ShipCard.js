export default function ShipCard(props) {
  const URL = `https://images.evetech.net/types/${props.itemId}/render?size=64`
  const capitol = props.capitol.toLocaleString('en-US')
  const profit = props.profit.toLocaleString('en-US')
  const loss = props.loss.toLocaleString('en-US')
  return (
    <div className="shipCard">
      <img src={URL} />
      <div>
        <div>Name: {props.name}</div>
        <div>Odds: {props.odds}</div>
        <div>HyperCore Count: {props.core}</div>
      </div>
      <div>
        <div>Capitol Required: {capitol}</div>
        <div>Potential Profit: {profit}</div>
        <div>Potential Loss: {loss}</div>
      </div>
    </div>
  )
}
