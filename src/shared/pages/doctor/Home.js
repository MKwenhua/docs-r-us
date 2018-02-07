import React, {PureComponent} from 'react';
import {Feed, Card, Icon, Container} from 'semantic-ui-react'
import {
  CDN_URI
} from 'constants';

const items = [
  {
    header: 'Project Report - April',
    description: 'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
    meta: 'ROI: 30%',
    centered: true
  }, {
    header: 'Project Report - May',
    description: 'Bring to the table win-win survival strategies to ensure proactive domination.',
    meta: 'ROI: 34%',
    centered: true
  }, {
    header: 'Project Report - June',
    description: 'Capitalise on low hanging fruit to identify a ballpark value added activity to beta test.',
    meta: 'ROI: 27%',
    centered: true
  }
]

const events = [
  {
    date: '1 Hour Ago',
    image: `${CDN_URI}patient_info_photo.jpg`,
    summary: 'Have Not Gotten To this Part Yet'
  }, {
    date: '2 days ago',
    image: `${CDN_URI}patient_info_photo.jpg`,
    meta: '1 Document',
    summary: 'Some Documents Have Been Added',
    extraImages: [`${CDN_URI}record-upload-icon.png`]
  }, {
    date: '4 days ago',
    image: `${CDN_URI}patient_info_photo.jpg`,
    meta: '2 X-Rays',
    summary: 'X-Rays got uploaded for a Patient',
    extraImages: [`${CDN_URI}x-ray-chest.jpg`, `${CDN_URI}x-ray-chest-2.jpg`]
  }
]

class Home extends PureComponent {
  render() {
    return (
      <div id='home'>
        <Card.Group itemsPerRow='3' items={items}/>
        <Card fluid color='red'>
          <Card.Content>
            <Card.Header>
              Recent Activity
            </Card.Header>
          </Card.Content>
          <Card.Content>
            <Feed events={events}/>
          </Card.Content>
        </Card>
      </div>
    )
  }
}

export default Home;
