import React, {PureComponent} from 'react';
import PatientListItem from 'component/PatientListItem';
import {Link} from 'react-router-dom'
import {
  Icon,
  Header,
  Dropdown,
  Button,
  List,
  Image,
  Statistic
} from 'semantic-ui-react'
import {CDN_URI} from 'constants';

const renderStat = () => (
  <Statistic>
    <Statistic.Value>5,550</Statistic.Value>
    <Statistic.Label>Blood Pressure</Statistic.Label>
  </Statistic>
)
const paientListItem = ({id, fullName, email}) => (
  <List.Item key={id}>
    <List.Content floated='right'>
      <Link to={`/patient/${id}`}>
        <Button>Add</Button>
      </Link>
    </List.Content>
    <Image avatar src={`${CDN_URI}patient_records_icon.png`}/>
    <List.Content>
      <List.Header as='a'>{fullName}</List.Header>
      <List.Description>Last seen watching
        <a>
          <b>The Godfather Part 2</b>
        </a>
        yesterday.</List.Description>
    </List.Content>
  </List.Item>
);

class PatientsView extends PureComponent {
  listPatientItems = ({allIds, byId}) => allIds.map((patientId, i) => (
      <PatientListItem key={i} {...byId[patientId]}/>
  ))
  render() {
    const {
      patients = []
    } = this.props;
    return (
      <div>
        <Dropdown text='Filter Tags' floating labeled button icon='filter' className='icon'>
          <Dropdown.Menu>
            <Dropdown.Header icon='tags' content='Filter by tag'/>
            <Dropdown.Divider/>
            <Dropdown.Item description='2 new' text='Important'/>
            <Dropdown.Item description='10 new' text='Hopper'/>
            <Dropdown.Item description='5 new' text='Discussion'/>
          </Dropdown.Menu>
        </Dropdown>
        <Header as='h3' dividing>
          Most Recent Patients
        </Header>

        <List divided verticalAlign='middle'>
          {this.listPatientItems(patients)}
        </List>
      </div>
    )
  }
}
export default PatientsView;
