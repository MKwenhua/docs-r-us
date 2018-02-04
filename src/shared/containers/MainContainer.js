import React, { PureComponent } from 'react';
import 'stylesheet/Main.css';
import {connect} from 'react-redux';
import TopNav from 'component/TopNav'
import SideNav from 'component/SideNav';
import {withRouter} from 'react-router'
import {Route, Link, Switch, Redirect} from 'react-router-dom'
import {
  SCROLL_FIX
} from 'constants';
import {
  Debounce
} from 'helpers';

import {
  Home,
  PatientsView,
  PatientProfile,
  AppointmentsCalendar,
  AppointmentTerminal,
  Profile
} from 'pages/doctor';

const WrapperClass = {
  '/': 'main'
}

const selectState = (state) => state;

class MainContainer extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const { dispatch, location, currentUser } = this.props;
    console.log('MainContainer this.props', this.props);
    return (
      <section className={WrapperClass[location.pathname] || 'main'}>
        <TopNav navStuck={false} />
        <SideNav location={location}/>
        <div className={ true ? 'page-content' : 'page-content'}>
        <Switch>
          <Route exact path='/'>
            <Home location={ location } />
          </Route>
          <Route exact path='/patients'>
            <PatientsView patients={currentUser.patients} dispatch={dispatch} location={ location } />
          </Route>
          <Route exact path='/patient/:id'>
            <PatientProfile location={ location } />
          </Route>
          <Route exact path='/calendar'>
            <AppointmentsCalendar location={ location } />
          </Route>
          <Route path='/appointment/:id'>
            <AppointmentTerminal location={ location } />
          </Route>
          <Route exact path='/profile'>
            <Profile location={ location } />
          </Route>
        </Switch>
        </div>
      </section>
    )
  }
}

export default withRouter(connect(selectState)(MainContainer));
