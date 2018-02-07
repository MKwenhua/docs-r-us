import React, {PureComponent} from 'react';
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import 'stylesheet/BigCalendar.css';

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment))

const CalendarDisplay = props => (
<BigCalendar
  {...props}
  events={props.events}
  step={15}
  timeslots={8}
  defaultView='week'
  defaultDate={new Date()}/>
)

export default CalendarDisplay;
