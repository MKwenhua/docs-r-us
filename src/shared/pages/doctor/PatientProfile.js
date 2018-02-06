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
    const { match, patients, display, syncing, files = [] } = this.props;
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
       <Segment className={ display === 'info' ? '' : 'hidden'}>
         <code>
           {JSON.stringify(patient, null, 4)}
         </code>
       </Segment>
       <Segment className={ display === 'appointments' ? '' : 'hidden'}>
         <h1>appointments</h1>
       </Segment>
       <Segment className={ display === 'records' ? '' : 'hidden'}>
         <h1>records</h1>
       </Segment>
      </div>
    )
  }
}

export default PatientProfile;
