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
  DoctorHome
} from 'page/DoctorHome';
import {
  DoctorPatientsView
} from 'page/DoctorPatientsView';
import {
  DoctorPatientProfile
} from 'page/DoctorPatientProfile';
import {
  AppointmentsCalendar
} from 'page/AppointmentsCalendar';
import {
  AppointmentTerminal
} from 'page/AppointmentTerminal';
import {
  DoctorProfile
} 'page/DoctorProfile';

const WrapperClass = {
  '/': 'main'
}

const selectState = (state) => state;

class MainContainer extends PureComponent {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
  }
  render() {
    const { dispatch, location } = this.props;
    console.log('MainContainer this.props', this.props);
    return (
      <section className={WrapperClass[location.pathname] || 'main'}>
        <TopNav navStuck={false} />
        <SideNav location={location}/>
        <div className={ true ? 'page-content' : 'page-content'}>
        <Switch>
          <Route exact path='/'>
            <DoctorHome location={ location } />
          </Route>
          <Route exact path='/patients'>
            <DoctorPatientsView location={ location } />
          </Route>
          <Route exact path='/patient/:id'>
            <DoctorPatientProfile location={ location } />
          </Route>
          <Route exact path='/appointments'>
            <AppointmentsCalendar location={ location } />
          </Route>
          <Route exact path='/appointment/:id'>
            <AppointmentTerminal location={ location } />
          </Route>
          <Route exact path='/profile'>
            <DoctorProfile location={ location } />
          </Route>
        </Switch>
        </div>
      </section>
    )
  }
}

export default withRouter(connect(selectState)(MainContainer));
