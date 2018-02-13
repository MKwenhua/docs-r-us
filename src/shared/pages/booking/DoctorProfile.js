import React, {PureComponent} from 'react';
import 'stylesheet/ProfilePageStyles.css';
import {
  DOCTOR_PROFILE_ERROR,
  POPULATE_DOCTOR_PROFILE,
  RESET_DOCTOR_PROFILE,
  CDN_URI
} from 'constants';

import {
  CssLoader
} from 'elements';

const doctorProfile = ({fullName, specialty, photo}) => (
  <div className='col-md-8 offset-md-2'>
    <div className='media'>
      <img height='100' className='mr-3' src={CDN_URI + photo} />
      <div className='media-body'>
        <h5 className='mt-0'>{fullName}</h5>
        {specialty}
      </div>
    </div>
  </div>
)

class DoctorProfile extends PureComponent {
  fetchProfileData = id => {
    fetch(`/api/doctors/${id}`)
      .then(results => results.json())
      .then(this.populateProfileData)
      .catch(this.profileFetchError)
  }
  populateProfileData = doctor => this.props.dispatch({
    type: POPULATE_DOCTOR_PROFILE,
    payload: doctor
  })
  profileFetchError = err => this.props.dispatch({
    type: DOCTOR_PROFILE_ERROR
  })
  componentDidMount() {
    const { searchNearby, match } = this.props;
    if (searchNearby.doctors[match.params.id]) {
      this.populateProfileData(searchNearby.doctors[match.params.id]);
    } else {
      this.fetchProfileData(match.params.id);
    }
  }
  componentWillUnmount() {
    this.props.dispatch({ type: RESET_DOCTOR_PROFILE })
  }
  render() {
    const { error, doctor, searchNearby } = this.props;
    return (
      <div className='container'>
        { error &&
          <h1 className='fetch-error'>Seems there was an issue fetching the data</h1>
        }
        {
          !doctor &&
          <CssLoader />
        }
        {
          doctor &&
          doctorProfile(doctor)
        }
      </div>
    )
  }
}

export default DoctorProfile;
