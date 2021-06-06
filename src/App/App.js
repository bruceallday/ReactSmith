import React, { useContext, useReducer } from 'react'
import AppContext, { defaultContext } from '../constants/context'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom"

import Home from '../pages/home/home.component'
import '../index.css'

const App = () => {
  const appContext = useContext(AppContext)
  const initialState = appContext.initialState
  const reducer = appContext.reducer
  const setTheme = appContext.setTheme
  const [state, dispatch] = useReducer(reducer, initialState)
  appContext.dispatch = dispatch

  return (
    <AppContext.Provider style={defaultContext} >
      <Router>
        {/*Header here*/}
        <Switch>

          <Route path="/" exact>
            <Home theme={setTheme(state.theme)} />
          </Route>

          <Route path="/home">
            <Redirect to="/" />
          </Route>

          <Route path='/'>
            <div>Page not found</div>
          </Route>

        </Switch>
        {/*Footer here*/}
      </Router>
    </AppContext.Provider>
  )
}

export default App