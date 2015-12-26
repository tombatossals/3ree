import * as React from 'react';
import { VALUE_CLASSES } from '../constants/ActionTypes';

let { PropTypes, Component } = React;

interface IEventInputOnSubmit {
    text: string,
    value: number,
    userId: string
}

interface IEventInputProps {
    onSubmit(params:IEventInputOnSubmit),
    userId: string,
    textLabel: string,
    valueLabel: string,
    value?: number,
    editing?: boolean
};

interface IEventInputState {
    text?: string,
    value?: number,
    errors?: {
        [index: number]: string;
    }
}

export default class EventInput extends Component<IEventInputProps, IEventInputState>  {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    userId: PropTypes.string.isRequired,
    textLabel: PropTypes.string,
    valueLabel: PropTypes.string,
    editing: PropTypes.bool
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      errors: [],
      text: this.props.textLabel || '',
      value: this.props.value || 50
    };
  }

  handleSubmit(e) {
    let errors;
    e.preventDefault();

    if (this.state.text.length === 0) {
      errors = ['You have not said what happened!'];
    }

    if (this.state.value < 1 || this.state.value > 100) {
      errors = [...errors, 'You have somewhere set an invalid value!'];
    }

    if (errors && errors.length > 0) {
      this.setState({errors: errors});
    } else {
      this.props.onSubmit({text: this.state.text, value: this.state.value, userId: this.props.userId});
      this.setState({text: '', value: 50});
    }
  }

  handleTextChange(e) {
    this.setState({ text: e.target.value });
  }

  handleValueChange(e) {
    this.setState({ value: parseInt(e.target.value, 10) });
  }

  render() {
    let self = this;
    let saveText = (this.props.editing) ? 'Save' : 'Add';
    let className = Object.keys(VALUE_CLASSES).reduce((prev:string, current:string) => {
      if (self.state.value <= VALUE_CLASSES[current]) {
        return VALUE_CLASSES[current];
      } else {
        return VALUE_CLASSES[prev];
      }
    });

    return (
      <form className='Pulse-eventInput pure-form'>
        <fieldset>
          <input type='text' placeholder={this.props.textLabel} autoFocus={true} value={this.state.text} onChange={this.handleTextChange} />
          <label htmlFor='value'>{this.props.valueLabel}</label>
          <input className={className} type='range' id='value' min='1' max='100' value={this.state.value.toString()} onChange={this.handleValueChange} /> 
          <span className='Pulse-eventInput-value'>{this.state.value}</span>
          <button type='submit' className='save pure-button' onClick={this.handleSubmit}>{saveText}</button>
        </fieldset>
      </form>
    );
  }
}