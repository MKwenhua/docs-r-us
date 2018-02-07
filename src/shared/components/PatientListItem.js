import React from 'react';
import {Link} from 'react-router-dom'
import {
  Button,
  List,
  Image
} from 'semantic-ui-react';
import MatchTextHighlights from 'component/MatchTextHighlights';
import {
  CDN_URI
} from 'constants';

const PatientListItem = ({id, typed, fullName, email}) => (
  <List.Item>
    <List.Content floated='right'>
      <Link to={`/patient/${id}`}>
        <Button color='blue'>View</Button>
      </Link>
    </List.Content>
    <Image avatar src={`${CDN_URI}patient_records_icon.png`}/>
    <List.Content>
      <Link to={`/patient/${id}`}>
      {
        typed &&
        <MatchTextHighlights suggestion={fullName} typed={typed} />
      }
      {
        !typed &&
        <List.Header>{fullName}</List.Header>
      }
      </Link>
      <List.Description>Last seen watching
        <a>
          <b>Doing something</b>
        </a>
        yesterday.</List.Description>
    </List.Content>
  </List.Item>
)

export default PatientListItem;
