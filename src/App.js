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
        {/* <ul>
          <li>
            <Link to="/photos">Go to photo page</Link>
          </li>
          <li>
            <Link to="/photos/add">Go to Add new photo page</Link>
          </li>
          <li>
            <Link to="/photos/123">Go to Edit photo page</Link>
          </li>
        </ul> */}
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
