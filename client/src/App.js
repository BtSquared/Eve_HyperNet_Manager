import './App.css'
import { Route, Switch } from 'react-router-dom'

//Pages
import Home from './pages/Home'
import Ships from './pages/Ships'
import Constracts from './pages/Contracts'

//components
import NavBar from './components/NavBar'

function App() {
  return (
    <div className="App">
      <NavBar />
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/ships" component={Ships} />
          <Route exact path="/contracts" component={Constracts} />
        </Switch>
      </div>
    </div>
  )
}

export default App
