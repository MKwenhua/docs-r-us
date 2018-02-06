import React, {PureComponent} from 'react';
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
import moment from 'moment';
import {CDN_URI} from 'constants';

class AppointmentsList extends PureComponent {
  appointmentListItem = ({id, purpose, description, date, time}) => (
    <List.Item key={id}>
      <List.Content floated='right'>
        <Button>View</Button>
      </List.Content>
      <Image avatar src={`${CDN_URI}calendar-icon.png`}/>
      <List.Content>
        <List.Header as='a'>{purpose}</List.Header>
        <List.Description>
          {description }
          <strong style={{marginLeft: '20px'}}>{moment(new Date(time)).calendar()}</strong>
        </List.Description>
      </List.Content>
    </List.Item>
  )
  render() {
    const { patient, appointments } = this.props;
    return (
      <List>
        {appointments
          .filter(app => app.patientId === patient.id)
          .map(this.appointmentListItem)
        }
      </List>
    )
  }
}

export default AppointmentsList;
