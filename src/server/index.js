import React from 'react';
import MainContainer from 'container/MainContainer';
import BookingContainer from 'container/BookingContainer';
import RenderPage from './render_page';
import RenderBookingPage from './render_booking_page';
import {StaticRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {
  normalizeDoctorState,
  setPatientState
} from 'state';
import {
  buildServerStore,
  buildBookingServerStore
} from '../shared/store';

const context = {
  serverSide: true
};

const IndexRoute = (req, res) => {
  const store = buildServerStore(normalizeDoctorState(req.user.dataValues))
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

const BookingRoute = (req, res) => {
  const store = buildBookingServerStore(setPatientState(req.user.dataValues))
  res.send(RenderBookingPage(
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <BookingContainer />
      </StaticRouter>
    </Provider>,
  store.getState()
  ));

  res.end();
};

const RoutingPortal  = (req, res) => {
  console.log('\n req.user.userType', req.user.userType);
  if (req.user.userType === 'doctor') {
    IndexRoute(req, res);
  } else {
    BookingRoute(req, res);
  }
};

export {
  BookingRoute,
  RoutingPortal
}
