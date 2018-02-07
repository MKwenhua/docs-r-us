import React from 'react';
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import 'stylesheet/BigCalendar.css';

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment))

const CalendarDisplay = props => (
  <BigCalendar
    {...props}
    selectable
    events={props.events}
    step={60}
    defaultView='week'
    onSelectEvent={props.viewAppointment}
    onSelectSlot={slotInfo => {
      console.log('slotInfo', slotInfo)
      }
    }
    defaultDate={new Date()}/>
)

export default CalendarDisplay;
