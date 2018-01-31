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
  DoctorDashboard
} from 'page/DoctorDashboard';

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
    return (
      <section className={WrapperClass[location.pathname] || 'main'}>
        <TopNav navStuck={false} />
        <Switch>
          <Route exact path='/'>
            <DoctorDashboard location={ location } />
          </Route>
          <Route exact path='/bbbb'>
            <p>ok</p>
          </Route>
        </Switch>
      </section>
    )
  }
}

export default withRouter(connect(selectState)(MainContainer));
