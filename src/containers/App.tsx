import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Helmet, HelmetProvider } from 'react-helmet-async'

import { useAuth0 } from 'auth'
import PrivateRoute from 'routes/PrivateRoute'
import Prompt from 'containers/Prompt'
import TakeNote from 'containers/TakeNote'

const App: React.FC = () => {
  const { loading, isAuthenticated } = useAuth0()

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>TakeNote</title>
        <link rel="canonical" href="https://takenote.dev" />
      </Helmet>

      <Switch>
        {!isAuthenticated ? (
          <Route exact path="/" component={Prompt} />
        ) : (
          <PrivateRoute path="/" component={TakeNote} />
        )}
      </Switch>
    </HelmetProvider>
  )
}

export default App
