import React, {PureComponent} from 'react';
import 'stylesheet/TopNav.css';
import { Link } from 'react-router-dom'
import {
  TOP_NAV_ICON_CLICKED
} from 'constants';
import {
  TopNavButtons
} from 'elements';

class TopNav extends PureComponent {
  iconClick = iconType => e => this.props.dispatch({
    type: TOP_NAV_ICON_CLICKED,
    payload: iconType
  })
  render() {
    const {navStuck, dropdown, account, settings, avatar, name, notifications } = this.props;
    return (
      <nav className={navStuck === false ? 'top-nav' : 'top-nav fixed'}>
        <div className='topbar-left'>
          <Link to='/' className='brand'>
            MED-MD
          </Link>
        </div>
        <TopNavButtons
          name={name}
          settings={settings}
          avatar={avatar}
          account={account}
          dropdown={dropdown}
          notifications={notifications}
          iconClick={this.iconClick} />
      </nav>
    )
  }
}

export default TopNav;
