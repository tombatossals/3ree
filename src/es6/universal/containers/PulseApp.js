import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from '../components/Header';
import AsyncBar from '../components/AsyncBar';
import EventInput from '../components/EventInput';
import * as PulseActions from '../actions/PulseActions';
let { Component } = React;
class PulseApp extends Component {
    render() {
        let actions = {
            editEvent: this.props.editEvent,
            deleteEvent: this.props.deleteEvent
        };
        return (React.createElement("div", {"className": "Pulse-Container"}, React.createElement(Header, null), React.createElement("section", {"className": 'Pulse-addEventForm'}, React.createElement(EventInput, {"onSubmit": this.props.addEvent, "userId": this.props.userId, "textLabel": 'What happened?', "valueLabel": 'Rating'})), React.createElement(AsyncBar, {"isWorking": this.props.isWorking, "error": this.props.error}), this.props.myEvents, this.props.otherEvents));
    }
}
PulseApp.propTypes = {
    addEvent: React.PropTypes.func.isRequired,
    editEvent: React.PropTypes.func.isRequired,
    deleteEvent: React.PropTypes.func.isRequired,
    userId: React.PropTypes.string,
    events: React.PropTypes.array,
    isWorking: React.PropTypes.bool,
    error: React.PropTypes.any,
};
export default connect(state => ({
    events: state.pulseApp.events,
    userId: state.pulseApp.userId,
    isWorking: state.pulseApp.isWorking,
    error: state.pulseApp.error
}), dispatch => bindActionCreators(PulseActions, dispatch))(PulseApp);
//# sourceMappingURL=PulseApp.js.map