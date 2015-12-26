import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import EventList from '../components/EventList';
import * as PulseActions from '../actions/PulseActions';
let { Component } = React;
class MyEvents extends Component {
    render() {
        let actions = {
            editEvent: this.props.editEvent,
            deleteEvent: this.props.deleteEvent
        };
        return (React.createElement(EventList, {"events": this.props.events, "userId": this.props.userId, "actions": actions}));
    }
}
MyEvents.propTypes = {
    editEvent: React.PropTypes.func.isRequired,
    deleteEvent: React.PropTypes.func.isRequired,
    userId: React.PropTypes.string,
    events: React.PropTypes.array
};
export default connect(state => ({
    events: state.pulseApp.events,
    userId: state.pulseApp.userId
}), dispatch => bindActionCreators(PulseActions, dispatch))(MyEvents);
//# sourceMappingURL=MyEvents.js.map