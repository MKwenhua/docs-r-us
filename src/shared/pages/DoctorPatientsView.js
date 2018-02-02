import React, {PureComponent} from 'react';
import {Statistic} from 'semantic-ui-react'

class DoctorPatientsView extends PureComponent {
  render() {
    return (
      <div>
        <Statistic>
          <Statistic.Value>5,550</Statistic.Value>
          <Statistic.Label>Blood Pressure</Statistic.Label>
        </Statistic>
      </div>
    )
  }
}

export {DoctorPatientsView};
