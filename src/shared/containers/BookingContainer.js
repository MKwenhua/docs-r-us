import React, { PureComponent } from 'react';
import 'stylesheet/BookingGlobal.css';
import {connect} from 'react-redux';
import BookingNav from 'component/BookingNav'
import {withRouter} from 'react-router'
import {Route, Link, Switch, Redirect} from 'react-router-dom'
import {
  SCROLL_FIX
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
  constructor(props) {
    super(props);
  }
  render() {
    const {
      dispatch,
      location,
      match,
      appointments,
      searchNearby,
      currentUser
    } = this.props;
    console.log('BookingContainer this.props', this.props);
    return (
      <section className={WrapperClass[location.pathname] || 'booking-page'}>
        <BookingNav dispatch={dispatch}/>
        <Switch>
          <Route exact path='/'>
            <Landing location={ location } />
          </Route>
          <Route exact path='/search/hospitals' render={ props => (
            <HospitalSearchPage searchNearby={searchNearby} dispatch={dispatch} location={ location } {...props} />
          )}/>
          <Route exact path='/search/doctors' render={ props => (
            <DoctorSearchPage searchNearby={searchNearby} dispatch={dispatch} location={ location } {...props} />
          )}/>
          <Route path='/hospital/:id' render={(props) => (
            <HospitalProfile currentUser={currentUser} dispatch={dispatch} location={ location } {...props} />
          )}/>
          <Route path='/doctor/:id'>
            <DoctorProfile location={ location } />
          </Route>
          <Route exact path='/profile'>
            <PatientProfile {...currentUser} location={ location } />
          </Route>
        </Switch>
      </section>
    )
  }
}

export default withRouter(connect(selectState)(BookingContainer));
