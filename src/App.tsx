import React, { Suspense } from 'react';
import { Router, Route } from 'react-router-dom';
import Page from './pages/';
import history from './utils/history';
import Loader from './components/loader';

class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <Suspense fallback={<LoadingBar />}>
        <Route exact path={'/'} component={Page.Event} />
        </Suspense>
      </Router>
    )
  }
}

const LoadingBar = () => {
  return <Loader />
}

export default App;
