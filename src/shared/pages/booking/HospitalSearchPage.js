import React, {PureComponent} from 'react';
import { Link } from 'react-router-dom'
import 'stylesheet/SearchPages.css';
import {
  CssLoader
} from 'elements';
import {
  CDN_URI,
  TOGGLE_PROXIMITY_SEARCH,
  UPDATE_GEO_COORDINATES,
  UPDATE_SEARCH_RESULTS
} from 'constants';

const hospitalResults = ({id,name, address}, i) => (
  <li key={i}>
    <img src='https://dq8llwxgkllay.cloudfront.net/hospital-icon.png' height='45' />
    <div className='description'>
      <b>{name}</b>
      <p>{address}</p>
    </div>
    <Link to={`/hospital/${id}`} className='list-item-link'>view</Link>
  </li>
)
class HospitalSearchPage extends PureComponent {
  onProximityToggle = e => this.props.dispatch({
    type: TOGGLE_PROXIMITY_SEARCH
  })
  fetchQuery = queryString => {
    fetch(`/api/nearby/hospitals?${queryString}`)
      .then(results => results.json())
      .then(jsonResults => this.props.dispatch({
        type: UPDATE_SEARCH_RESULTS,
        payload: jsonResults
      }))
      .catch(err => console.log('err', err))
  }
  updateCoordinates = ({withinKM}) => pos => {
    const { latitude, longitude } = pos.coords;
    this.props.dispatch({
      type: UPDATE_GEO_COORDINATES,
      payload: { latitude, longitude }
    })
    this.fetchQuery(`distance=${withinKM}&lat=${latitude}&long=${longitude}`);
  }
  componentDidMount() {
    if (navigator.geolocation && !this.props.searchNearby.onLoadDataFetched) {
      navigator.geolocation.getCurrentPosition(this.updateCoordinates(this.props.searchNearby));
    }
  }
  render() {
    const { searchNearby, online } = this.props;
    return (
      <div className='container search-container'>
        <div className='row search-page-block search-options '>
          <div className="btn-group btn-group-sm">
            <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Filters
            </button>
            <div className="dropdown-menu">
            </div>
          </div>
          <div className='proximity-search'>
            <b>Search Nearby:</b>
            <div onClick={this.onProximityToggle} className={`toggle-switch ${ searchNearby.on ? 'on' : 'off'}`}>
              {searchNearby.on ? 'ON' : 'OFF'}
              <div className='switch'></div>
            </div>
          </div>
        </div>
        <div className='row search-page-block'>
          <div className='input-group mb-3 search-bar'>
            <div className='input-group-prepend'>
              <button className='btn btn-outline-secondary dropdown-toggle' type='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>Dropdown</button>
              <div className='dropdown-menu'>
              </div>
            </div>
            <input type='text' className='form-control' aria-label='Text input with dropdown button'/>
            <div className='input-group-append'>
              <button className='btn btn-outline-secondary' disabled={online === false} type='button'>Search</button>
            </div>
          </div>
        </div>
        <div className='row'>
          <ul className={searchNearby.fetching ? 'hidden' : 'search-list'}>
            { Object.values(searchNearby.hospitals).map(hospitalResults) }
          </ul>
        </div>
        {
          (searchNearby.fetching || !searchNearby.onLoadDataFetched) && <CssLoader />
        }

      </div>
    )
  }
}

export default HospitalSearchPage;
