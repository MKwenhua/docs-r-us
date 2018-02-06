import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom'
import {
  Button,
  List,
  Image
} from 'semantic-ui-react';
import {CDN_URI} from 'constants';

class PatientListItem extends PureComponent {
  render() {
    const {id, fullName, email} = this.props;
    return (
      <List.Item>
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
    )
  }
}

export default PatientListItem;
