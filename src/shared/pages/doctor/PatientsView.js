import React, {PureComponent} from 'react';
import PatientListItem from 'component/PatientListItem';
import {Link} from 'react-router-dom'
import BuildTrie from 'action-autocomplete';
import {
  Icon,
  Header,
  Dropdown,
  Button,
  List,
  Image,
  Statistic
} from 'semantic-ui-react'
import {
  SEARCH_INPUT_UPDATE,
  PATIENTS_VIEW_RESET,
  CDN_URI
} from 'constants';

class PatientsView extends PureComponent {
  constructor(props) {
    super(props);
    const { names_email, nameMap } = props.patients.resource.reduce((obj, patient) => {
       obj.names_email = [patient.fullName, patient.email].concat(obj.names_email);
       obj.nameMap = {
         ...obj.nameMap,
         [patient.email]: patient,
         [patient.fullName]: patient
       };
       return obj;
    }, {names_email: [], nameMap: {}});

    this.AutoComplete = BuildTrie(names_email, nameMap);
  }
  listPatientItems = ({allIds, byId}) => allIds.map((patientId, i) => (
    <PatientListItem key={i} {...byId[patientId]}/>
  ))
  listSuggestions = suggestions => suggestions.map((patient, i) => (
    <PatientListItem key={i} {...patient} />
  ))
  searchType = e => {
   const typed = e.target.value.toLowerCase().trim();
   const suggestions = this.AutoComplete.lookup(typed);
   console.log('suggestions', suggestions);
   this.props.dispatch({
     type: SEARCH_INPUT_UPDATE,
     payload: { typed, suggestions }
   })
  }
  render() {
    const {
      patients = [],
      suggestions
    } = this.props;
    return (
      <section>
        <div className='ui grid'>
          <div className='fourteen wide column'>
            <div>
              <div className='ui fluid action input'>
                <input onKeyUp={this.searchType} type='text' placeholder='Search...'/>
                <div className='ui button'>Search</div>
              </div>
            </div>
          </div>
          <div className='two wide column'>
            <div className='ui fitted toggle checkbox'>
              <input type='checkbox'/>
              <label></label>
            </div>
          </div>
        </div>
        <Header as='h3' dividing>
          Most Recent Patients
        </Header>

        <List divided verticalAlign='middle'>
          { suggestions.length > 0 ? this.listSuggestions(suggestions) : this.listPatientItems(patients)}
        </List>
      </section>
    )
  }
}

export default PatientsView;
