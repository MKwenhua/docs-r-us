import React, { PureComponent } from 'react';
import 'stylesheet/TopNav.css';
import {
  Link
} from 'react-router-dom'
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class TopNav extends PureComponent {
  render() {
    const { navStuck } = this.props;
    console.log('TopNav this.props', this.props);
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
const firstQuery = gql`
{
  allDoctors {
    id
    fullName
    appointments {
      id
      date
    }
  }
}
`

export default graphql(firstQuery)(TopNav);
