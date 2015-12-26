import { PropTypes, Component } from 'react';
export default class EventTicker extends Component {
    render() {
        const { events, userId, actions } = this.props;
        const otherEvents = events.filter(row => row.userId !== userId);
        let cumulative = otherEvents.reduce((x, event) => event.value + x, 0);
        let average = (otherEvents.length > 0) ? Math.round(cumulative / otherEvents.length) : 0;
        let editable = false;
        return className = 'Pulse-eventList' >
            className;
        'Pulse-eventList-summary' >
            Other;
        Events < /span>
            < span;
        className = 'val' > { otherEvents: .length } < /span>
            < span > Avg. < /span>
            < span;
        className = 'val' > { average } < /span>
            < span > Cum. < /span>
            < span;
        className = 'val' > { cumulative } < /span>
            < /div>
            < div;
        className = 'Pulse-eventList-list' >
            { otherEvents: .slice(0, this.props.length).map((event, key) => key, { key }, row = { key }, id = { event: .id }, event = { event }, editable = { editable } /  >
                ) }
            < /ul>
            < /div>
            < /section>;
        ;
    }
}
EventTicker.propTypes = {
    events: PropTypes.array.isRequired,
    length: PropTypes.number.isRequired
};
//# sourceMappingURL=EventTicker.js.map