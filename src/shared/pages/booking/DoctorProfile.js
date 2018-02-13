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

class DoctorProfile extends PureComponent {
  fetchProfileData = id => {
    fetch(`/api/doctors/${id}`)
      .then(results => results.json())
      .then(this.populateProfileData)
      .catch(this.profileFetchError)
  }
  populateProfileData = doctor => this.props.dispatch({
    type: POPULATE_DOCTOR_PROFILE,
    payload: hospital
  })
  profileFetchError = err => this.props.dispatch({
    type: DOCTOR_PROFILE_ERROR
  })
  componentDidMount() {
    const { searchNearby, match } = this.props;
    if (searchNearby.hospitals[match.params.id]) {
      this.populateProfileData(searchNearby.hospitals[match.params.id]);
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
        <h1>Doctor Profile</h1>
        { error &&
          <h1 className='fetch-error'>Seems there was an issue fetching the data</h1>
        }
        {

        }
      </div>
    )
  }
}

export default DoctorProfile;
