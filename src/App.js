import React from 'react'
import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './components/login'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route
            path="/dashboard"
            component={() => {
              return <div>Halo User</div>
            }}
          />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
