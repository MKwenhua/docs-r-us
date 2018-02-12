import React, {PureComponent} from 'react';
import 'stylesheet/SearchPages.css';
import {
  CDN_URI,
  TOGGLE_PROXIMITY_SEARCH
} from 'constants';

class DoctorSearchPage extends PureComponent {
  onProximityToggle = e => this.props.dispatch({
    type: TOGGLE_PROXIMITY_SEARCH
  })
  render() {
    const { searchNearby } = this.props;
    return (
      <div className='container search-container'>
        <div className='row search-page-block search-options '>
          <div className="btn-group btn-group-sm">
            <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Small button
            </button>
            <div className="dropdown-menu">
              <a className='dropdown-item' href='#'>Action</a>
              <a className='dropdown-item' href='#'>Another action</a>
              <a className='dropdown-item' href='#'>Something else here</a>
              <div role='separator' className='dropdown-divider'></div>
              <a className='dropdown-item' href='#'>Separated link</a>
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
                <a className='dropdown-item' href='#'>Action</a>
                <a className='dropdown-item' href='#'>Another action</a>
                <a className='dropdown-item' href='#'>Something else here</a>
                <div role='separator' className='dropdown-divider'></div>
                <a className='dropdown-item' href='#'>Separated link</a>
              </div>
            </div>
            <input type='text' className='form-control' aria-label='Text input with dropdown button'/>
            <div className='input-group-append'>
              <button className='btn btn-outline-secondary' type='button'>Search</button>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default DoctorSearchPage;
