import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'
import {
  CDN_URI
} from 'constants';
import moment from 'moment';

const PatientInfo = ({ fullName, birthday, lastSeen }) => (
  <Card>
    <Image src={`${CDN_URI}patient_info_photo.jpg`} />
    <Card.Content>
      <Card.Header>{fullName}</Card.Header>
      <Card.Meta><b>Birth Date:</b>{moment(new Date(birthday)).format('LL')}</Card.Meta>
      <Card.Description>Daniel is a comedian living in Nashville.</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        {lastSeen}
      </a>
    </Card.Content>
  </Card>
)

export default PatientInfo;
