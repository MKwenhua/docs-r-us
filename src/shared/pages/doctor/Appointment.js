import React, {PureComponent} from 'react';
import { Form, Message, Button } from 'semantic-ui-react'
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import DatePicker from 'react-datepicker';
import moment from 'moment';
//import 'react-datepicker/dist/react-datepicker.css';

const createAppointment = gql`
  mutation createAppointment($date: String!, $purpose: String!, $time: String!,
    $description: String!, $patientId: String!, $doctorId: String!) {
    createAppointment(date: $date,
      purpose: $purpose,
      time: $time,
      description: $description,
      patientId: $patientId,
      doctorId: $doctorId) {
        id
        date
        time
        status
        canceled
        purpose
        text
        patientId
        doctorId
      }
  }
`;

class CreateAppointment extends PureComponent {
  constructor (props) {
   super(props)
   this.state = {
     formSuccess: false,
     startDate: moment(),
     purpose: '',
     description: ''
   };
  }
  thingHappened = (e) => {
    this.props.mutate({
      variables: {
        date: this.state.startDate,
        time: this.state.startDate,
        purpose: this.state.purpose,
        description: this.state.dicription,
        paientId: this.props.paientId,
        doctorId: this.props.doctorId,
        repoFullName: 'apollographql/apollo-client'
      }
    }).then(({ data }) => {
        console.log('got data', data);
      }).catch((error) => {
        console.log('there was an error sending the query', error);
      });
  }
  formSubmitted = e => {
    e.preventDefault();
    console.log('formSubmitted e', e);
    this.setState({
      formSuccess: true,
      purpose: this.purpose.value.trim(),
      description: this.description.value.trim()
    })
  }
  datePicked = date => {
    console.log('datePicked date', date);
    this.setState({
      startDate: date
    })
  }
  render() {
    console.log('createAppointment this.props', this.props);
    console.log('createAppointment this.state', this.state);
    const { formSuccess, startDate } = this.state;
    return (
      <div>
        <Form size='big' success={formSuccess} onSubmit={this.formSubmitted}>
          <Form.Group widths='equal'>
            <Form.Field label='Purpose' ref={ purpose => this.purpose = purpose } control='input' placeholder='purpose' />

          </Form.Group>
          <Form.TextArea label='Description' ref={ description => this.description = description } placeholder='Tell us more about you...' />
          <DatePicker
             selected={ startDate }
              onChange={this.datePicked}
          />
          <Button type='submit'>Submit</Button>
          <Message
            success
            header='Form Completed'
            content="You're all signed up for the newsletter"
          />

        </Form>
      </div>
    )
  }
}

export default graphql(createAppointment)(CreateAppointment);


// class NewEntry extends Component {
//   onClick() {
//     this.props.mutate({
//       variables: { repoFullName: 'apollographql/apollo-client' }
//     })
//       .then(({ data }) => {
//         console.log('got data', data);
//       }).catch((error) => {
//         console.log('there was an error sending the query', error);
//       });
//   }
//
//   render() {
//     return <div onClick={this.onClick.bind(this)}>Click me</div>;
//   }
// }
//
//
//
// const NewEntryWithData = graphql(submitRepository)(NewEntry);
