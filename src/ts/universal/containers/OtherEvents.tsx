import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import EventTicker from '../components/EventTicker';

import * as PulseActions from '../actions/PulseActions';

let { Component } = React;

interface IOtherEventsProps {
    editEvent(),
    deleteEvent(),
    userId: string,
    events: [any]
}

class OtherEvents extends Component<IOtherEventsProps, {}> {
  static propTypes:React.ValidationMap<any> = {
    userId: React.PropTypes.string,
    events: React.PropTypes.array
  };

  render() {
    return (
      <EventTicker events={this.props.events} userId={this.props.userId} length={3} />
    );
  }
}

/**
 * Expose "Smart" Component that is connect-ed to Redux
 */
export default connect(
  state => ({
    events: state.pulseApp.events,
    userId: state.pulseApp.userId
  }), 
  dispatch => bindActionCreators(PulseActions, dispatch)
)(OtherEvents);