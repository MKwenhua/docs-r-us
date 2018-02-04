import React, {PureComponent} from 'react';
import { Search, Grid, Header } from 'semantic-ui-react'
import CalendarDisplay from 'component/CalendarDisplay';

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

export default AppointmentsCalendar;
