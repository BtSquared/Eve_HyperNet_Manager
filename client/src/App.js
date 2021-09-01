import './App.css'
import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route />
      </Switch>
    </div>
  )
}

export default App
