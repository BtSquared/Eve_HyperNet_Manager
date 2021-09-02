export default function ShipCard(props) {
  const URL = `https://images.evetech.net/types/${props.itemId}/render?size=64`
  return (
    <div className="shipCard">
      <img src={URL} />
      <div>Name: {props.name}</div>
      <div>Odds: {props.odds}</div>
      <div>HyperCore Count: {props.core}</div>
      <div>Capitol Required: {props.capitol}</div>
      <div>Potential Profit: {props.profit}</div>
      <div>Potential Loss: {props.loss}</div>
    </div>
  )
}
