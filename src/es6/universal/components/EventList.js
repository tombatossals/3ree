import { PropTypes, Component } from 'react';
export default class EventList extends Component {
    render() {
        const { events, userId, actions } = this.props;
        const myEvents = events.filter(row => row.userId === userId);
        let list;
        let editable = true;
        let cumulative = myEvents.reduce((x, event) => event.value + x, 0);
        let average = (myEvents.length > 0) ? Math.round(cumulative / myEvents.length) : 0;
        if (myEvents.length > 0) {
            list = myEvents.map((event, key) => key, { key }, row = { key }, id = { event: .id }, editable = { editable }, event = { event }, {}, ...actions);
        }
        />;
        ;
    }
}
EventList.propTypes = {
    events: PropTypes.array.isRequired,
    userId: PropTypes.string.isRequired,
    actions: PropTypes.object.isRequired
};
{
    list = className;
    'Pulse-eventItem empty' >
        No;
    events;
    recorded;
    !/p>
        < /div>
        < /li>;;
}
return className = 'Pulse-eventList' >
    className;
'Pulse-eventList-summary' >
    Your;
Events < /span>
    < span;
className = 'val' > { myEvents: .length } < /span>
    < span > Avg. < /span>
    < span;
className = 'val' > { average } < /span>
    < span > Cum. < /span>
    < span;
className = 'val' > { cumulative } < /span>
    < /div>
    < div;
className = 'Pulse-eventList-list' >
    { list }
    < /ul>
    < /div>
    < /section>;
;
//# sourceMappingURL=EventList.js.map