
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

module.exports = (Hospital,hospitalRecords) => {
  hospitalRecords.forEach((hospital) => Hospital.create(HospitalObject(hospital))
    .then(hospital => console.log('\n Hospital Has beeen made:'))
    .catch(err => console.log('\n Hospital error:',err)))
}
