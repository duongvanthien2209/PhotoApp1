import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import './App.scss';
import Header from './components/Header';

// Components
import NotFound from './components/NotFound';
import Photo from './features/Photo';

// Lazy load - Code splitting
// const PhotoWrapper = () => React.lazy(() => <Photo />);

function App() {
  return (
    <div className="photo-app">
      <Router>
        <Header />

        <Switch>
          <Redirect exact from="/" to="/photos" />

          <Route path="/photos" component={Photo} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
