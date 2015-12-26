import * as React from 'react';
import EventItem from './EventItem';
let { PropTypes, Component } = React;
export default class EventTicker extends Component {
    render() {
        const { events, userId, actions } = this.props;
        const otherEvents = events.filter(row => row.userId !== userId);
        let cumulative = otherEvents.reduce((x, event) => event.value + x, 0);
        let average = (otherEvents.length > 0) ? Math.round(cumulative / otherEvents.length) : 0;
        let editable = false;
        return (React.createElement("section", {"className": 'Pulse-eventList'}, React.createElement("div", {"className": 'Pulse-eventList-summary'}, React.createElement("span", null, "Other Events"), React.createElement("span", {"className": 'val'}, otherEvents.length), React.createElement("span", null, "Avg."), React.createElement("span", {"className": 'val'}, average), React.createElement("span", null, "Cum."), React.createElement("span", {"className": 'val'}, cumulative)), React.createElement("div", {"className": 'Pulse-eventList-list'}, React.createElement("ul", null, otherEvents.slice(0, this.props.length).map((event, key) => React.createElement(EventItem, {"key": key, "row": key, "id": event.id, "event": event, "editable": editable}))))));
    }
}
EventTicker.propTypes = {
    events: PropTypes.array.isRequired,
    length: PropTypes.number.isRequired
};
//# sourceMappingURL=EventTicker.js.map