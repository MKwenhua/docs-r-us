import React, { PureComponent } from 'react';
import 'stylesheet/Main.css';
import {connect} from 'react-redux';
import TopNav from 'component/TopNav'
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
  PatientProfile
} from 'pages/booking';

const WrapperClass = {
  '/': 'main'
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
      currentUser
    } = this.props;
    console.log('BookingContainer this.props', this.props);
    return (
      <section className={WrapperClass[location.pathname] || 'main'}>
        {/* <TopNav {...topNav} dispatch={dispatch}/> */}
        <div className={ true ? 'page-content' : 'page-content'}>
        <Switch>
          <Route exact path='/'>
            <Landing location={ location } />
          </Route>
          <Route path='/hospital/:id' render={(props) => (
            <HospitalProfile currentUser={currentUser} {...patientProfile } appointments={appointments.resource} patients={patients} dispatch={dispatch} location={ location } {...props} />
          )}/>
          <Route exact path='/calendar'>
            <AppointmentsCalendar appointments={appointments} {...calendarView} currentUser={currentUser} patients={patients} dispatch={dispatch} location={ location } />
          </Route>
          <Route path='/doctor/:id'>
            <DoctorProfile location={ location } />
          </Route>
          <Route exact path='/profile'>
            <PatientProfile appointments={appointments} patients={patients} {...currentUser} location={ location } />
          </Route>
        </Switch>
        </div>
      </section>
    )
  }
}

export default withRouter(connect(selectState)(BookingContainer));
