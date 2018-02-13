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
        <h1>HospitalProfile</h1>
        { error &&
          <h1 className='fetch-error'>Seems there was an issue fetching the data</h1>
        }
      </div>
    )
  }
}

export default HospitalProfile;
