import React from 'react';
import MainContainer from 'container/MainContainer';
import RenderPage from './render_page';
import {StaticRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {buildServerStore, createProjectStore} from '../shared/store';
import defaultState from './defaultState';
const context = {
  serverSide: true
};

const IndexRoute = (req, res) => {
  const store = buildServerStore({...defaultState, currentUser: req.user })
  res.send(RenderPage(
    <Provider store={store}>
    <StaticRouter location={req.url} context={context}>
      <MainContainer />
    </StaticRouter>
  </Provider>,
  store.getState()
));

  res.end();
};

export {
  IndexRoute
}
