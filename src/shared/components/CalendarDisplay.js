import React, {PureComponent} from 'react';
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import 'stylesheet/BigCalendar.css';

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment))

class CalendarDisplay extends PureComponent {
  render() {
    const { events, patients, dispatch} = this.props;
    return (
      <BigCalendar
        {...this.props}
        events={events}
        step={15}
        timeslots={8}
        defaultView='week'
        defaultDate={new Date()}/>
      )
  }
}

export default CalendarDisplay;
