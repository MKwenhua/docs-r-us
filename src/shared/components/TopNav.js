import React, { PureComponent } from 'react';
import 'stylesheet/TopNav.css';
import {
  Link
} from 'react-router-dom'

class TopNav extends PureComponent {
  render() {
    const { navStuck } = this.props;
    return (
      <nav className={navStuck === false ? 'top-nav' : 'top-nav fixed'}>
        <div className='topbar-left'>
          <Link to='/' className='brand'>
            MED-MD
          </Link>
        </div>

      </nav>
    )
  }
}

export default TopNav;
