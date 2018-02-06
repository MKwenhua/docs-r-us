import React, {PureComponent} from 'react';
import {Card, Icon, List, Image} from 'semantic-ui-react'
import {CDN_URI} from 'constants';
const extraStat = num => (
  <a>
  <Icon name='doctor'/>
    {num} Patients
  </a>
)

class Profile extends PureComponent {
  render() {
    const { patients, appointments, fullName, photo, specialty } = this.props;
    return (
      <div className='ui grid'>
        <div className='ten wide left floated column'>
          <List relaxed='very'>
            <List.Item>
              <Image avatar src={`${CDN_URI}calendar-icon.png`}/>
              <List.Content>
                <List.Header as='a'>Feed Item</List.Header>
                <List.Description>Here I will list events that occurred on this table item
                  <a>
                    <b>A Link to the feed item</b>
                  </a>
                  just now.</List.Description>
              </List.Content>
            </List.Item>
          </List>
        </div>
        <div className='six wide right floated column'>
          <Card
            image={`https://dq8llwxgkllay.cloudfront.net/${photo}`}
            header={fullName}
            meta={specialty}
            extra={extraStat(patients.resource.length)}
            description='John Hopkins MD' />
        </div>
      </div>
    )
  }
}

export default Profile;
