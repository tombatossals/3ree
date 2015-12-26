import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import EventTicker from '../components/EventTicker';
import * as PulseActions from '../actions/PulseActions';
let { Component } = React;
class OtherEvents extends Component {
    render() {
        return (React.createElement(EventTicker, {"events": this.props.events, "userId": this.props.userId, "length": 3}));
    }
}
OtherEvents.propTypes = {
    userId: React.PropTypes.string,
    events: React.PropTypes.array
};
export default connect(state => ({
    events: state.pulseApp.events,
    userId: state.pulseApp.userId
}), dispatch => bindActionCreators(PulseActions, dispatch))(OtherEvents);
//# sourceMappingURL=OtherEvents.js.map