import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

// Pages
import NotFound from '../../components/NotFound';
import AddEditPage from './pages/AddEditPage';
import MainPage from './pages/MainPage';

// eslint-disable-next-line no-unused-vars
const Photo = (props) => {
  const match = useRouteMatch();
  // eslint-disable-next-line no-console
  console.log(match);

  return (
    <Switch>
      <Route exact path={match.url} component={MainPage} />

      <Route path={`${match.url}/add`} component={AddEditPage} />
      <Route path={`${match.url}/:photoId`} component={AddEditPage} />

      <Route component={NotFound} />
    </Switch>
  );
};

export default Photo;
