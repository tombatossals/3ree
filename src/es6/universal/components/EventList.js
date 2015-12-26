import * as React from 'react';
import EventItem from './EventItem';
let { PropTypes, Component } = React;
export default class EventList extends Component {
    render() {
        const { events, userId, actions } = this.props;
        const myEvents = events.filter(row => row.userId === userId);
        let list;
        let editable = true;
        let cumulative = myEvents.reduce((x, event) => event.value + x, 0);
        let average = (myEvents.length > 0) ? Math.round(cumulative / myEvents.length) : 0;
        if (myEvents.length > 0) {
            list = myEvents.map((event, key) => React.createElement(EventItem, React.__spread({"key": key, "row": key, "id": event.id, "editable": editable, "event": event}, actions)));
        }
        else {
            list = React.createElement("li", null, React.createElement("div", {"className": 'Pulse-eventItem empty'}, React.createElement("p", null, "No events recorded!")));
        }
        return (React.createElement("section", {"className": 'Pulse-eventList'}, React.createElement("div", {"className": 'Pulse-eventList-summary'}, React.createElement("span", null, "Your Events"), React.createElement("span", {"className": 'val'}, myEvents.length), React.createElement("span", null, "Avg."), React.createElement("span", {"className": 'val'}, average), React.createElement("span", null, "Cum."), React.createElement("span", {"className": 'val'}, cumulative)), React.createElement("div", {"className": 'Pulse-eventList-list'}, React.createElement("ul", null, list))));
    }
}
EventList.propTypes = {
    events: PropTypes.array.isRequired,
    userId: PropTypes.string.isRequired,
    actions: PropTypes.object.isRequired
};
//# sourceMappingURL=EventList.js.map