import React, {PureComponent} from 'react';
import { Icon, Header,Dropdown, Button, List, Image, Statistic } from 'semantic-ui-react'
import {
  CDN_URI
} from 'constants';

const renderStat = () => (
  <Statistic>
    <Statistic.Value>5,550</Statistic.Value>
    <Statistic.Label>Blood Pressure</Statistic.Label>
  </Statistic>
)

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const firstQuery = gql`
{
  allPatients {
    id
    fullName
    email
  }
}
`

class PatientsView extends PureComponent {
  paientListItem = ({ id, fullName, email }) => (
    <List.Item key={id}>
      <List.Content floated='right'>
       <Button>Add</Button>
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
  )
  render() {
    const { allPatients = [] } = this.props.data;
    return (
      <div>
        <Dropdown text='Filter Tags' floating labeled button icon='filter' className='icon'>
    <Dropdown.Menu>
      <Dropdown.Header icon='tags' content='Filter by tag' />
      <Dropdown.Divider />
      <Dropdown.Item description='2 new' text='Important' />
      <Dropdown.Item description='10 new' text='Hopper' />
      <Dropdown.Item description='5 new' text='Discussion' />
    </Dropdown.Menu>
  </Dropdown>
         <Header as='h3' dividing>
           Most Recent Patients
         </Header>

        <List divided verticalAlign='middle'>
         {allPatients.map(this.paientListItem)}
        </List>
      </div>
    )
  }
}
export default graphql(firstQuery)(PatientsView);
