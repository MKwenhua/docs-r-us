import React, {PureComponent} from 'react';
import { Search, Grid, Header } from 'semantic-ui-react'
import CalendarDisplay from 'component/CalendarDisplay';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const firstQuery = gql`
{
  allDoctors {
    id
    fullName
    appointments {
      id
      date
    }
  }
}
`

class AppointmentsCalendar extends PureComponent {
  render() {
    console.log('AppointmentsCalendar this.props', this.props);
    return (
      <div>
       <CalendarDisplay />
      </div>
    )
  }
}

export default graphql(firstQuery)(AppointmentsCalendar);
