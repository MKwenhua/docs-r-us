import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom'
import {
  Feed,
  Divider,
  Header,
  Icon,
  Statistic
} from 'semantic-ui-react'
import moment from 'moment';
import {CDN_URI} from 'constants';
import {
  ParseJson
} from 'helpers';

const recordSrc = ({src, type}) => type.includes('image') ? (CDN_URI + src) : `${CDN_URI}record-upload-icon.png`;
const updatedSince = ({updatedAt}) => moment(new Date(updatedAt), "YYYYMMDD").fromNow();

const compareDates = (a, b) => {
  if (a.updatedAt < b.updatedAt)
    return -1;
  if (a.updatedAt > b.updatedAt)
    return 1;
  return 0;
}

const RecordToSortedList = records => (
  Object.values(records).sort(compareDates)
);

const recordsQty = data => ({
  value: Object.keys(data).length,
  label: 'Qty of Records'
});

const lastUpdate = data => ({
  value: moment(
    new Date(
      Math.max(
      Object.keys(data).map(recordKey => (
        new Date(data[recordKey].updatedAt).getTime()
      ))
    )
  ), "YYMMDD").fromNow(),
  label: 'Most Recent Update'
});

const BloodPressure = data => ({
  value: {
    content: (
      <span>
        180
        <Icon name='heart'/>
      </span>
    )
  },
  label: 'Blood Pressure'
})

const Something = data => ({value: 838383, label: 'A Stat'})

const calcStats = data => [
  recordsQty,
  lastUpdate,
  BloodPressure
].map(statFn => statFn(data));

class RecordsList extends PureComponent {
  mapRecords = records => records.map(record => ({
    date: updatedSince(record),
    image: recordSrc(record),
    meta: record.type,
    summary: 'Some summary of the record'
  }))
  render() {
    const {dispatch, patient} = this.props;
    const patientRecords = ParseJson(patient.records);
    const statList = calcStats(Object.values(patientRecords));
    return (
      <section>
        <Statistic.Group size='tiny' widths='three' items={statList}/>
        <Header>
          Patient Records
        </Header>
        <Divider />
        <Feed id='recordFeed' events={this.mapRecords(RecordToSortedList(patientRecords))}/>
      </section>
    )
  }
}

export default RecordsList;
