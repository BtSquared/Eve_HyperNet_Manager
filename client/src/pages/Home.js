export default function Home() {
  return (
    <div>
      <div className="homeCon">
        <div className="banner">Eve HyperNet Manager</div>
        <div className="infoCon">
          <div className="info infoOne">
            <h1>Info</h1>
            <h3>Updating Ships</h3>
            <div className="infoText">
              when updating ships please allow 1 - 2 minutes, the page will
              refresh. this site is run off of free services and if its free its
              definitly not fast
            </div>
            <h3>HyperCore</h3>
            <div className="infoText">
              is the amount of HyperCores needed per hyperNet contract
            </div>
            <h3>Profit</h3>
            <div className="infoText">is the isk profit per contract win</div>
            <h3>Loss</h3>
            <div className="infoText">is isk lost the per contract loss</div>
          </div>
          <div className="info infoTwo">
            <h1>Info</h1>
            <h3>Return</h3>
            <div className="infoText">
              is the "Odds" of said ship and is the ratio of profit to loss per
              contract a ship with a return of 1 means the profit and loss per
              contract are even and given a 1 for 1 (one win one loss) you would
              break even. the higher the return the better given a return of 2
              it would have 2 losses to even out 1 win
            </div>
            <h3>Capitol</h3>
            <div className="infoText">
              is the required amount of Isk needed per hyperNet contract this
              includes the ship the HyperCores and the cost of half of the
              tickets for a 50% buy in
            </div>
          </div>
          <div className="info infoThree">
            <h1>Future Updates</h1>
            <br />
            <div className="infoText">ship return performance history</div>
            <br />
            <div className="infoText">Login system</div>
            <br />
            <div className="infoText">
              a way to log contracts and maintain a profit tracker
            </div>
            <br />
            <div className="infoText">EVE Esi login intigration</div>
            <br />
            <div className="infoText">possibly char management features</div>
            <br />
          </div>
        </div>
      </div>
    </div>
  )
}
