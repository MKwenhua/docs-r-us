import React, {PureComponent} from 'react';
import {
  Card,
  Icon,
  Button,
  Menu,
  List,
  Image,
  Modal,
  Dimmer,
  Loader,
  Segment
} from 'semantic-ui-react';
import moment from 'moment';
import FileUploader from 'component/FileUploader';
import RecordsList from 'component/RecordsList';
import AppointmentsList from 'component/AppointmentsList';
import PatientInfo from 'component/PatientInfo';
import 'stylesheet/FileUploader.css';
import {
  CDN_URI,
  EXIT_PATIENT_VIEW,
  PATIENT_TAB_SELECTED
} from 'constants';


class PatientProfile extends PureComponent {
  componentWillUnmount() {
    this.props.dispatch({type: EXIT_PATIENT_VIEW })
  }
  toggleDisplay = display => () => this.props.dispatch({
    type: PATIENT_TAB_SELECTED,
    payload: display
  })
  render() {
    console.log('PatientProfile props', this.props);
    const { match, patients, appointments, display, dispatch, syncing, files = [] } = this.props;
    const patient = patients.byId[match.params.id];
    return (
      <div>
        <h1>{patient.fullName}</h1>
      <Menu pointing secondary>
         <Menu.Item name='Info' active={display === 'info'} onClick={this.toggleDisplay('info')} />
         <Menu.Item name='Appointments' active={display === 'appointments'} onClick={this.toggleDisplay('appointments')} />
         <Menu.Item name='Records' active={display === 'records'} onClick={this.toggleDisplay('records')} />
         <Menu.Menu position='right'>
           <Menu.Item name='Upload Records' active={display === 'upload'} onClick={this.toggleDisplay('upload')} />
         </Menu.Menu>
      </Menu>
      <Segment className={ display === 'upload' ? '' : 'hidden'}>
        <FileUploader
          syncing={syncing}
          files={files}
          dispatch={this.props.dispatch}
          patientId={patient.id}
          action={`/patients/${patient.id}`}
          method='post' />
       </Segment>
       <section className={ display === 'info' ? '' : 'hidden'}>
         <PatientInfo dispatch={dispatch} { ...patient } />
       </section>
       <Segment className={ display === 'appointments' ? '' : 'hidden'}>
         <AppointmentsList dispatch={dispatch} patient={patient} appointments={appointments} />
       </Segment>
       <Segment className={ display === 'records' ? '' : 'hidden'}>
         <RecordsList dispatch={dispatch} patient={patient}/>
       </Segment>
      </div>
    )
  }
}

export default PatientProfile;
