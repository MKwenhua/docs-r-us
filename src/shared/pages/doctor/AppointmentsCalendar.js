import React, {PureComponent} from 'react';
import { Search, Grid, Header } from 'semantic-ui-react'
import CalendarDisplay from 'component/CalendarDisplay';
import AppointmentModal from 'component/AppointmentModal';
import {
  VIEW_APPOINTMENT
} from 'constants';

const addHours = date => h => (
  new Date(date.setHours(date.getHours() + h))
)

class AppointmentsCalendar extends PureComponent {
  mapEvents = appointments => appointments.allIds.map(eventId => ({
    ...appointments.byId[eventId],
    start: new Date(appointments.byId[eventId].time),
    end: addHours(new Date(appointments.byId[eventId].time))(1)
  })).filter(event => event.status !== 'rejected' || event.status !== 'canceled')
  viewAppointment = event => this.props.dispatch({
    type: VIEW_APPOINTMENT,
    payload: event
  })
  render() {
    const { patients, appointments, selectedEvent, dispatch } = this.props;
    console.log('AppointmentsCalendar this.props', this.props);
    return (
      <div>
       <CalendarDisplay events={this.mapEvents(appointments)} dispatch={dispatch} viewAppointment={this.viewAppointment} patients={patients}/>
       <AppointmentModal {...selectedEvent} dispatch={dispatch}/>
      </div>
    )
  }
}

export default AppointmentsCalendar;
