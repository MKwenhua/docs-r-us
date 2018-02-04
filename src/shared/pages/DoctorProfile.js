import React, {PureComponent} from 'react';
import {Card, Icon, List, Image} from 'semantic-ui-react'

const extra = (
  <a>
    <Icon name='user'/>
    16 Friends
  </a>
)

class DoctorProfile extends PureComponent {
  render() {
    return (
      <div>
        <Card
          image='https://dq8llwxgkllay.cloudfront.net/hilarious_orangutan.jpg'
          header='Elliot Baker'
          meta='Friend'
          description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
          extra={extra}/>

        <List relaxed='very'>
          <List.Item>
            <Image avatar src='/assets/images/avatar/small/daniel.jpg'/>
            <List.Content>
              <List.Header as='a'>Daniel Louise</List.Header>
              <List.Description>Last seen watching
                <a>
                  <b>Arrested Development</b>
                </a>
                just now.</List.Description>
            </List.Content>
          </List.Item>
          <List.Item>
            <Image avatar src='/assets/images/avatar/small/stevie.jpg'/>
            <List.Content>
              <List.Header as='a'>Stevie Feliciano</List.Header>
              <List.Description>Last seen watching
                <a>
                  <b>Bob's Burgers</b>
                </a>
                10 hours ago.</List.Description>
            </List.Content>
          </List.Item>
          <List.Item>
            <Image avatar src='/assets/images/avatar/small/elliot.jpg'/>
            <List.Content>
              <List.Header as='a'>Elliot Fu</List.Header>
              <List.Description>Last seen watching
                <a>
                  <b>The Godfather Part 2</b>
                </a>
                yesterday.</List.Description>
            </List.Content>
          </List.Item>
        </List>
      </div>
    )
  }
}

export default DoctorProfile;
