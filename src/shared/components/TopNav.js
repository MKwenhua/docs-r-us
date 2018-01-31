import React from 'react';
import 'stylesheet/TopNav.css';
import {
  Link
} from 'react-router-dom'

class TopNav extends React.PureComponent {
  render() {
    const { navStuck } = this.props;
    return (
      <nav className={navStuck === false ? 'top-nav' : 'top-nav fixed'}>
        <Link to='/' className='self-brand'>
          MKwenhua
        </Link>
        <div className='right-button'>
          <img
            className='button-icon hidden'
            height="60"
            src='https://dq8llwxgkllay.cloudfront.net/site_icon_cube.png'/>
        </div>
      </nav>
    )
  }
}

export default TopNav;
