import React, {PureComponent} from 'react';
import { Search, Grid, Header } from 'semantic-ui-react'
import CalendarDisplay from 'component/CalendarDisplay';

class AppointmentsCalendar extends PureComponent {
  mapEvents = events => events.map(event => ({
    ...event,
    start: new Date(event.start),
    end: new Date(event.end)
  }))
  render() {
    const { patients, events, dispatch } = this.props;
    console.log('AppointmentsCalendar this.props', this.props);
    return (
      <div>
       <CalendarDisplay events={this.mapEvents(events)} dispatch={dispatch} patients={patients}/>
      </div>
    )
  }
}

export default AppointmentsCalendar;
