const hospitalRecords = require('../../data_setup/hospital_addresses.js');

const HospitalObject = ({name, formatted_address, place_id, location}) => ({
  name: name,
  address: formatted_address,
  place_id: place_id,
  lat: location.lat,
  lng: location.lng,
  position: {
    type: 'Point', coordinates: [location.lng,location.lat],
    crs: { type: 'name', properties: { name: 'EPSG:4326'} }
  }
})


module.exports = hospitalRecords.map(HospitalObject);
