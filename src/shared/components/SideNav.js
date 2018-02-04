import React, { PureComponent } from 'react';
import 'stylesheet/SideNav.css';
import {NavLink} from 'react-router-dom'
import {Icon} from 'semantic-ui-react'

class SideNav extends PureComponent {
  render() {
    const {expanded} = this.props;
    return (
      <aside className={expanded === false
        ? 'side-nav'
        : 'side-nav expanded'}>
        <NavLink exact to="/" className="side-link" activeClassName="selected">
          <Icon name='home' size='big'/>
          <p>home</p>
        </NavLink>
        <NavLink to="/calendar" className="side-link" activeClassName="selected">
          <Icon name='calendar outline' size='big'/>
          <p>calendar</p>
        </NavLink>

        <NavLink to="/profile" className="side-link" activeClassName="selected">
          <Icon name='doctor' size='big'/>
          <p>profile</p>
        </NavLink>
        <NavLink to="/patients" className="side-link" activeClassName="selected">
          <Icon name='address book outline' size='big'/>
          <p>patients</p>
        </NavLink>
        <NavLink to="/appointment" className="side-link" activeClassName="selected">
          <Icon name='clipboard' size='big'/>
          <p>checkup</p>
        </NavLink>
      </aside>
    )
  }
}

export default SideNav;
