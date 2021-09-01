import './App.css'
import { Route, Switch } from 'react-router-dom'
//Pages
import Home from './pages/Home'

//components
import NavBar from './components/NavBar'

function App() {
  return (
    <div className="App">
      <NavBar />
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/ships" />
          <Route exact path="/history" />
        </Switch>
      </div>
    </div>
  )
}

export default App
