/// <reference path="../../../../typings/tsd.d.ts" />

import * as React from 'react';
import * as moment from 'moment';
import EventInput from './EventInput';

let { PropTypes, Component } = React;

interface IEventItemProps {
    id: any,
    row: number,
    event: any,
    key: number,
    editable: boolean,
    editEvent?(event: any),
    deleteEvent?(event: any)   
}

interface IEventItemState {
    editing: boolean    
}

export default class EventItem extends Component<IEventItemProps, IEventItemState> {
  static propTypes = {
    id: PropTypes.any.isRequired,
    row: PropTypes.number.isRequired,
    event: PropTypes.object.isRequired,
    editable: PropTypes.bool,
    editEvent: PropTypes.func,
    deleteEvent: PropTypes.func
  };

  constructor(props, context){
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
    } else {
      this.props.editEvent(event);
    }
    this.setState({ editing: false });
  }

  render() {
    const { row, id, event, editEvent, deleteEvent } = this.props;

    let element, className = (row % 2 === 0) ? 'even' : 'odd';
    let modified = (event.updated) ? event.updated : event.created;

    if (this.state.editing) {
      element = (
        <EventInput textLabel={event.text} 
                    value={event.value}
                    userId={event.userId} 
                    editing={this.state.editing}
                    valueLabel='Rating'
                    onSubmit={ (event) => this.handleSave(Object.assign({}, event, { id: id })) } />
      );
    } else {
      let del = (this.props.editable) ? 
        <button className='destroy pure-button' onClick={ () => deleteEvent(event) } /> :
        null;
      element = (
        <div className='Pulse-eventItem'>
          <p className='rowNumber'>{row+1}.</p>
          <p className='title' onClick={this.handleClick}>
            {event.text}
          </p>
          {del}
          <p className='created'>{moment(modified).fromNow()}</p>
          <p className='outcome'>{event.value}</p>
        </div>
      );
    }

    return (
      <li className={className}>{element}</li>
    );
  }
}