import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AsyncBar from '../components/AsyncBar';
import * as PulseActions from '../actions/PulseActions';
class PulseApp extends Component {
    render() {
        let actions = {
            editEvent: this.props.editEvent,
            deleteEvent: this.props.deleteEvent
        };
        return className = "Pulse-Container" >
            />
            < section;
        className = 'Pulse-addEventForm' >
            onSubmit;
        {
            this.props.addEvent;
        }
        userId = { this: .props.userId };
        textLabel = 'What happened?';
        valueLabel = 'Rating' /  >
            /section>
            < AsyncBar;
        isWorking = { this: .props.isWorking };
        error = { this: .props.error } /  >
            { this: .props.myEvents };
        {
            this.props.otherEvents;
        }
        /div>;
        ;
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