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
          <Route exact path='/bbbb'>
            <p>ok</p>
          </Route>
        </Switch>
        </div>
      </section>
    )
  }
}

export default withRouter(connect(selectState)(MainContainer));
