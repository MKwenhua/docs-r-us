import React, { PureComponent } from 'react';
import { Icon, Button, List, Header, Image, Modal, Dimmer, Loader } from 'semantic-ui-react';
import 'stylesheet/FileUploader.css';
import Dropzone from 'react-dropzone';
import moment from 'moment';
import {
  CDN_URI,
  PATIENT_FILE_REMOVED,
  CANCEL_FILE_UPLOAD,
  PATIENT_FILES_DROPPED,
  PATIENT_FILES_UPLOADING,
  PATIENT_FILES_UPLOADED
} from 'constants';

const uploadPreviewSrc = ({preview, type}) => type.includes('image') ? preview : `${CDN_URI}record-upload-icon.png`;

class FileUploader extends PureComponent {
  fileDrop = files =>  {
    console.log('files', files);
    this.props.dispatch({type: PATIENT_FILES_DROPPED, payload: files});
  }
  uploadToS3 = e => {
    e.preventDefault();
    const { action, files } = this.props;
    const formData = new FormData(document.forms['uploadForm']);
    files.forEach(file => {
      formData.append(file.name, file, file.name);
    });
    fetch(action, {
      method: 'POST',
      body: formData
    })
    .then(response => {
      console.log('upload response', response);
      this.props.dispatch({ type: PATIENT_FILES_UPLOADED });
    })
    .catch(error => {
      console.log(error);
    });
    this.props.dispatch({ type: PATIENT_FILES_UPLOADING });
  }
  removeFile = index => e => this.props.dispatch({
    type: PATIENT_FILE_REMOVED,
    payload: this.props.files.filter((fl, i) => index !== i)
  })
  previewUploads = files => files.map((file, i) => (
    <List.Item key={i}>
      <List.Content floated='right'>
         <a><Icon onClick={this.removeFile(i)} name='remove' size='large' /></a>
      </List.Content>
     <Image size='mini' src={uploadPreviewSrc(file)} />
     <List.Content>
       <List.Header as='a'>{file.name}</List.Header>
       <List.Description>content-type: <b>{file.type}</b><span style={{marginLeft: '20px'}}> Last Modified: <b> {moment(new Date(file.lastModified), "YYYYMMDD").fromNow()}</b></span></List.Description>
     </List.Content>
   </List.Item>
  ))
  cancelUpload = () => this.props.dispatch({
    type: CANCEL_FILE_UPLOAD
  })
  render() {
    const { syncing, files, dispatch, action, method } = this.props;
    return (
      <section>
        <form
          name='uploadForm'
          onSubmit={this.uploadToS3}
          encType='multipart/form-data'
          action={action}
          method={method}>
          <Header textAlign='center'>Upload Records</Header>
          <Dropzone
            name='files'
            className='dropzone-element'
            activeClassName='dropzone-element-active'
            acceptClassName='dropzone-element-accept'
            rejectClassName='dropzone-element-reject'
            onDrop={this.fileDrop}>
             <Header textAlign='center' color='grey'>Just Drag And Drop Files</Header>
           </Dropzone>
       </form>
       <Modal open={ files.length > 0}>
         <Modal.Header>Files To Be Uploaded</Modal.Header>
         <Modal.Content>
           <Dimmer blurring active={syncing}>
            <Loader indeterminate>Uploading Files</Loader>
          </Dimmer>
          <List>
            {this.previewUploads(files)}
          </List>
          </Modal.Content>
          <Modal.Actions>
             <Button secondary onClick={this.cancelUpload} labelPosition='right' content='Cancel' />
             <Button color='blue' onClick={this.uploadToS3} type='submit' icon='checkmark' labelPosition='right' content='Upload' />
           </Modal.Actions>
        </Modal>
      </section>
    )
  }

}

export default FileUploader;
