import './App.css'
import { Route, Switch } from 'react-router-dom'
//Pages
import Home from './pages/Home'
import Ships from './pages/Ships'

//components
import NavBar from './components/NavBar'

function App() {
  return (
    <div className="App">
      <div class="blur"></div>
      <NavBar />
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/ships" component={Ships} />
          <Route exact path="/history" />
        </Switch>
      </div>
    </div>
  )
}

export default App
