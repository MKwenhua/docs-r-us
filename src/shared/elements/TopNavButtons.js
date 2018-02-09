import React from 'react';
import { Link } from 'react-router-dom'

const currentNotications = ({list}) => list.map((notification, i) => (
  <li key={i}>{notification}</li>
));

const TopNavButtons = ({dropdown, avatar, name, notifications, iconClick}) => (
  <div className='topbar-right'>
    <div onClick={ iconClick(null) } className={ dropdown === 'notifications' ? 'dropdown-backface' : 'hidden'}></div>
    <div onClick={ iconClick('notifications') }  className={dropdown === 'notifications' ? 'topbar-icon active' : 'topbar-icon'}>
      <i aria-hidden='true' className="alarm outline big icon"></i>
      <span className={notifications.notSeen > 0 ? 'notification-count' : 'hidden'}>
        {notifications.notSeen}
      </span>
      <ul className={ dropdown === 'notifications' ? 'topnav-dropdown left' : 'hidden'}>
        { currentNotications(notifications)}
      </ul>
    </div>
    <img className={dropdown === 'account' ? 'topbar-avatar active' : 'topbar-avatar'} src={ `https://dq8llwxgkllay.cloudfront.net/${avatar}` } onClick={ iconClick('account') } />
    <div onClick={ iconClick(null) } className={ dropdown === 'account' ? 'dropdown-backface' : 'hidden'}></div>
    <ul className={ dropdown === 'account' ? 'topnav-dropdown' : 'hidden'}>
      <li><a>Example Item</a></li>
      <li><a href='/logout'>Sign Out</a></li>
    </ul>
  </div>
)

export default TopNavButtons;
