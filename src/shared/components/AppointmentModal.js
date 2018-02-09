import React from 'react';
import {Link} from 'react-router-dom'
import {
  Dropdown,
  Header,
  Button,
  Image,
  Modal,
  Form,
  Label,
  TextArea
} from 'semantic-ui-react'
import moment from 'moment';
import {
  EDIT_APPOINTMENT_STATUS,
  APPOINTMENT_VIEW_BACK,
  EDIT_APPOINTMENT_EVENT,
  CLOSE_APPOINTMENT_MODAL,
  REQUEST_APPOINTMENT_CHANGE,
  APPOINTMENT_RECORD_UPDATED,
  CDN_URI
} from 'constants';

class AppointmentModal extends React.PureComponent {
  submitAppointmentChange = e => {
    const {status, response, id} = this.props;
    fetch(`/appointments/${id}`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({status, response})
    }).then(response => response.json()).then(json => this.props.dispatch({
      type: APPOINTMENT_RECORD_UPDATED,
      id: id,
      payload: JSON.parse(json)
    })).catch(err => console.log('APPOINTMENT_RECORD_UPDATED err', err))
  }
  updateAppointmentStatus = status => e => this.props.dispatch({
    type: EDIT_APPOINTMENT_STATUS,
    payload: status
  })
  close = e => this.props.dispatch({type: CLOSE_APPOINTMENT_MODAL})
  updateComment = e => this.props.dispatch({
    type: EDIT_APPOINTMENT_EVENT,
    response: e.target.value.trim()
  })
  sendForUpdate = e => this.props.dispatch({type: REQUEST_APPOINTMENT_CHANGE})
  goBack = e => this.props.dispatch({type: APPOINTMENT_VIEW_BACK})
  render() {
    const {
      description,
      purpose,
      response,
      start,
      end,
      step,
      status,
      title,
      patientId,
      id,
      patient
    } = this.props;
    return (
      <Modal open={patientId !== undefined}>
        <Modal.Header>
          <Image circular avatar src={`${CDN_URI}patient_info_photo.jpg`}/> {' Appointment Purpose: '}
          {purpose}
        </Modal.Header>
        <Modal.Content>
          <Modal.Description className={step === 'view' ? '' : 'hidden'}>
            <Header>
              {title}
            </Header>
            <Header as='h4' floated='right'>
              Time:
              <Header.Subheader>
                {`${moment(start).format('ll')} at: ${moment(start).format('LT')}`}
              </Header.Subheader>
            </Header>
            <Header as='h4'>
              Description:
              <Header.Subheader>
                {description}
              </Header.Subheader>
            </Header>
          </Modal.Description>
          <Modal.Description className={step === 'confirm' ? '' : 'hidden'}>
            <Header>Confirm Changes</Header>
            <Header as='h4' floated='right'>
              Status:
              <Header.Subheader>
                <Label basic color='blue'>{status}</Label>
              </Header.Subheader>
            </Header>
            <Form>
              <label>Optional</label>
              <TextArea onKeyUp={this.updateComment} fluid defaultValue={response} placeholder='Leave comment for why. . . '/>
            </Form>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          {
            status === 'pending' &&
          <div>
            <Button floated='left' content='close' color='grey' onClick={this.close}/>
            <Button color='grey' content='Decline' onClick={this.updateAppointmentStatus('rejected')}/>
            <Button icon='check' color='green' content='Accept' labelPosition='right' onClick={this.updateAppointmentStatus('accepted')}/>
          </div>
          }

          {
            (status !== 'pending' && step !== 'confirm') &&
            <Button content='Cancel' onClick={this.updateAppointmentStatus('canceled')}/>
          }

          {
            step === 'confirm' &&
           <div>
            <Button floated='left' content='Go Back' labelPosition='left' icon='arrow left' color='teal' onClick={this.goBack}/>
            <Button icon='send' content='Confirm' labelPosition='right' color='blue' onClick={this.submitAppointmentChange}/>
           </div>
         }
        </Modal.Actions>
      </Modal>
    )
  }
}

export default AppointmentModal;
