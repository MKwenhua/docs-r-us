import React, {PureComponent} from 'react';
import 'stylesheet/ProfilePageStyles.css';
import {
  CDN_URI,
  HOSPITAL_PROFILE_ERROR,
  RESET_HOSPITAL_PROFILE,
  POPULATE_HOSPITAL_PROFILE
} from 'constants';

import {
  CssLoader
} from 'elements';

const hospitalProfile = ({name, address}) => (
  <div className='col-md-8 offset-md-2'>
    <div className='media'>
      <img height='160' className='mr-3' src={CDN_URI + 'temp_hospital_photo.jpg'} />
      <div className='media-body'>
        <h5 className='mt-0'>{name}</h5>
        {address}
      </div>
    </div>
  </div>
)

class HospitalProfile extends PureComponent {
  fetchProfileData = id => {
    fetch(`/api/hospitals/${id}`)
      .then(results => results.json())
      .then(this.populateProfileData)
      .catch(this.profileFetchError)
  }
  populateProfileData = hospital => this.props.dispatch({
    type: POPULATE_HOSPITAL_PROFILE,
    payload: hospital
  })
  profileFetchError = err => this.props.dispatch({
    type: HOSPITAL_PROFILE_ERROR
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
    this.props.dispatch({ type: RESET_HOSPITAL_PROFILE })
  }
  render() {
    const { error, hospital, searchNearby } = this.props;
    return (
      <div className='container'>
        { error &&
          <h1 className='fetch-error'>Seems there was an issue fetching the data</h1>
        }
        {
          !hospital &&
          <CssLoader />
        }
        {
          hospital &&
          hospitalProfile(hospital)
        }
      </div>
    )
  }
}

export default HospitalProfile;
