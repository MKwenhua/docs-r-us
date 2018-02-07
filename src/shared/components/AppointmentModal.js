import React from 'react';
import {Link} from 'react-router-dom'
import {Dropdown, Button, Image, Modal, TextArea} from 'semantic-ui-react'
import moment from 'moment';
import {
  EDIT_APPOINTMENT_STATUS,
  CHANGE_APPOINTMENT_STATUS,
  APPOINTMENT_VIEW_BACK,
  EDIT_APPOINTMENT_EVENT,
  REQUEST_APPOINTMENT_CHANGE,
  APPOINTMENT_RECORD_UPDATED,
  CDN_URI
} from 'constants';

class AppointmentModal extends React.PureComponent {
  submitAppointmentChange = e => {
    const { status, response } = this.props;
    fetch(`/appointments/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ status, response })
    }).then(res => this.props.dispatch({
      type: APPOINTMENT_RECORD_UPDATED,
      id: id,
      payload: {}
    })).catch(err => console.log('APPOINTMENT_RECORD_UPDATED err', err))
  }
  updateAppointmentStatus = status => e => this.props.dispatch({
    type: EDIT_APPOINTMENT_STATUS,
    payload: status
  })
  updateComment = e => this.props.dispatch({
    type: EDIT_APPOINTMENT_EVENT,
    response: e.target.value.trim()
  })
  sendForUpdate = e => this.props.dispatch({ type: REQUEST_APPOINTMENT_CHANGE })
  goBack = e => this.props.dispatch({ type: APPOINTMENT_VIEW_BACK })
  render() {
    const {description, purpose, response, start, end,step, status, title, patientId, id, patient} = this.props;
    return (
      <Modal open={patientId !== undefined} >
        <Modal.Header>{purpose}</Modal.Header>
        <Modal.Content>
          <Modal.Description className={ step === 'view' ? '' : 'hidden'}>
            <Header>{title}</Header>
            <p>{description}</p>
          </Modal.Description>
          <Modal.Description className={ step === 'confirm' ? '' : 'hidden'}>
            <Header>Confirm Changes</Header>
            <b>Status:</b>
            <p>{status}</p>
            <label>Optional</label>
            <TextArea onKeyUp={ this.updateComment } defaultValue={response} placeholder='Leave comment for why. . . ' />
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          {
            status === 'pending' &&
            <div>
            <Button color='black' content='Decline' onClick={this.updateAppointmentStatus('rejected')} />
            <Button icon='check' content='Accept' labelPosition='right' onClick={this.updateAppointmentStatus('accepted')} />
          </div>
          }
          {
            status !== 'pending' &&
              <Button content='Cancel' onClick={this.updateAppointmentStatus('canceled')} />
          }
          {
            step === 'confirm' &&
            <div>
             <Button floated='left' content='Go Back' icon='arrow left' color='teal' onClick={this.goBack } />
             <Button icon='check' content='Confirm' labelPosition='right' onClick={this.submitAppointmentChange} />
           </div>
          }
        </Modal.Actions>
      </Modal>
    )
  }
}

export default AppointmentModal;
