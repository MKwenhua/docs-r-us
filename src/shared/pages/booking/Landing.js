import React, {PureComponent} from 'react';
import 'stylesheet/BookingLandingPage.css';
import { Link } from 'react-router-dom'
import {
  CDN_URI
} from 'constants';

class Landing extends PureComponent {
  render() {
    return (
      <div className='container landing-container'>
        <div className='row justify-content-center'>
           <div className='col-4'>
             <Link className='landing-big-link' to='/search/hospitals'>
              Search For Hospitals
             </Link>
           </div>
           <div className='col-4'>
             <Link className='landing-big-link' to='/search/doctors'>
              Search For Doctors
             </Link>
           </div>
        </div>
      </div>
    )
  }
}

export default Landing;
