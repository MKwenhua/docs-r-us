import React, {PureComponent} from 'react';
import {Feed, Card, Icon, Container} from 'semantic-ui-react'
const items = [
  {
    header: 'Project Report - April',
    description: 'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
    meta: 'ROI: 30%',
    centered: true
  },
  {
    header: 'Project Report - May',
    description: 'Bring to the table win-win survival strategies to ensure proactive domination.',
    meta: 'ROI: 34%',
    centered: true
  },
  {
    header: 'Project Report - June',
    description: 'Capitalise on low hanging fruit to identify a ballpark value added activity to beta test.',
    meta: 'ROI: 27%',
    centered: true
  },
]

const events = [{
  date: '1 Hour Ago',
  image: '/assets/images/avatar/small/elliot.jpg',
  meta: '4 Likes',
  summary: 'Elliot Fu added you as a friend',
}, {
  date: '4 days ago',
  image: '/assets/images/avatar/small/helen.jpg',
  meta: '1 Like',
  summary: 'Helen Troy added 2 new illustrations',
  extraImages: [
    '/assets/images/wireframe/image.png',
    '/assets/images/wireframe/image-text.png',
  ],
}, {
  date: '3 days ago',
  image: '/assets/images/avatar/small/joe.jpg',
  meta: '8 Likes',
  summary: 'Joe Henderson posted on his page',
  extraText: "Ours is a life of constant reruns. We're always circling back to where we'd we started.",
}, {
  date: '4 days ago',
  image: '/assets/images/avatar/small/justen.jpg',
  meta: '41 Likes',
  summary: 'Justen Kitsune added 2 new photos of you',
  extraText: 'Look at these fun pics I found from a few years ago. Good times.',
  extraImages: [
    '/assets/images/wireframe/image.png',
    '/assets/images/wireframe/image-text.png',
  ],
}]

class DoctorHome extends PureComponent {
  render() {
    return (
      <div>
        <Card.Group itemsPerRow='3' items={items} />
        <Card fluid color='red'>
          <Card.Content>
            <Card.Header>
              Recent Activity
            </Card.Header>
          </Card.Content>
          <Card.Content>
            <Feed events={events} />
          </Card.Content>
        </Card>
      </div>
    )
  }
}

export {DoctorHome};
