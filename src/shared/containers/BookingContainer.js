import React, { PureComponent } from 'react';
import 'stylesheet/BookingGlobal.css';
import {connect} from 'react-redux';
import BookingNav from 'component/BookingNav'
import {withRouter} from 'react-router'
import {Route, Link, Switch, Redirect} from 'react-router-dom'
import {
  CONNECTED,
  DISCONNECTED,
  ONLINE_CONNECTION_CHANGE
} from 'constants';
import {
  Debounce
} from 'helpers';

import {
  Landing,
  DoctorProfile,
  HospitalProfile,
  PatientProfile,
  DoctorSearchPage,
  HospitalSearchPage
} from 'pages/booking';

const WrapperClass = {
  '/': 'booking-page'
}

const selectState = (state) => state;

class BookingContainer extends PureComponent {
  deiviceConnectionUpdate = e => this.props.dispatch({
    type: ONLINE_CONNECTION_CHANGE,
    payload: navigator.onLine
  })
  componentDidMount() {
    this.deiviceConnectionUpdate();
    window.addEventListener('online', this.deiviceConnectionUpdate);
    window.addEventListener('offline', this.deiviceConnectionUpdate);
  }
  render() {
    const {
      dispatch,
      location,
      match,
      online,
      appointments,
      searchNearby,
      doctorProfile,
      hospitalProfile,
      currentUser
    } = this.props;
    console.log('BookingContainer this.props', this.props);
    return (
      <section className={WrapperClass[location.pathname] || 'booking-page'}>
        <BookingNav online={online} dispatch={dispatch}/>
        <Switch>
          <Route exact path='/'>
            <Landing location={ location } />
          </Route>
          <Route exact path='/search/hospitals' render={ props => (
            <HospitalSearchPage searchNearby={searchNearby} online={online} dispatch={dispatch} location={ location } {...props} />
          )}/>
          <Route exact path='/search/doctors' render={ props => (
            <DoctorSearchPage searchNearby={searchNearby} online={online} dispatch={dispatch} location={ location } {...props} />
          )}/>
          <Route path='/hospital/:id' render={(props) => (
            <HospitalProfile searchNearby={searchNearby} currentUser={currentUser} dispatch={dispatch} {...hospitalProfile} {...props} />
          )}/>
          <Route path='/doctor/:id' render={(props) => (
            <DoctorProfile searchNearby={searchNearby} currentUser={currentUser} dispatch={dispatch} {...doctorProfile} {...props} />
          )}/>
          <Route exact path='/profile'>
            <PatientProfile {...currentUser} location={ location } />
          </Route>
        </Switch>
      </section>
    )
  }
}

export default withRouter(connect(selectState)(BookingContainer));
