import { PropTypes, Component } from 'react';
export default class EventItem extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            editing: false
        };
    }
    handleClick() {
        if (this.props.editable) {
            this.setState({ editing: true });
        }
    }
    handleSave(event) {
        if (event.text.length === 0) {
            this.props.deleteEvent(event);
        }
        else {
            this.props.editEvent(event);
        }
        this.setState({ editing: false });
    }
    render() {
        const { row, id, event, editEvent, deleteEvent } = this.props;
        let element, className = (row % 2 === 0) ? 'even' : 'odd';
        let modified = (event.updated) ? event.updated : event.created;
        if (this.state.editing) {
            element = text = { event: .text };
            value = { event: .value };
            userId = { event: .userId };
            editing = { this: .state.editing };
            valueLabel = 'Rating';
            onSubmit = {}(event);
            this.handleSave(Object.assign({}, event, { id: id }));
        }
        />;
        ;
    }
}
EventItem.propTypes = {
    id: PropTypes.any.isRequired,
    row: PropTypes.number.isRequired,
    event: PropTypes.object.isRequired,
    editable: PropTypes.bool,
    editEvent: PropTypes.func,
    deleteEvent: PropTypes.func
};
{
    let del = (this.props.editable) ?
        className :  = 'destroy pure-button', onClick = {}();
    deleteEvent(event);
}
/> :;
null;
element = className = 'Pulse-eventItem' >
    className;
'rowNumber' > { row: +1 }. < /p>
    < p;
className = 'title';
onClick = { this: .handleClick } >
    { event: .text }
    < /p>;
{
    del;
}
className;
'created' > { moment(modified) { }, fromNow() { } } < /p>
    < p;
className = 'outcome' > { event: .value } < /p>
    < /div>;
;
return className = { className } > { element } < /li>;
;
//# sourceMappingURL=EventItem.js.map