import React, { PureComponent } from 'react';
import 'stylesheet/BookingNav.css';
import { Link } from 'react-router-dom'

const checkActive = (match, location) => {
  if (!match) {
    return false
  }
  return true;
}

class BookingNav extends PureComponent {
  render() {
    const { online } = this.props;
    return (
      <div className='booking-nav'>
        <Link className='profile-icon' to='/'>
          <i className='material-icons'>home</i>
        </Link>
        <div className='online-indicator'>
          <div className={`indicator ${online ? 'on' : ''}`}></div>
          <span>{online ? 'Connected' : 'Disconnected'}</span>
        </div>
        <Link className='profile-icon right'  to='/profile'>
          <i className='material-icons'>account_box</i>
        </Link>
      </div>
    )
  }
}

export default BookingNav;
