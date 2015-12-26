import * as React from 'react';

let { PropTypes, Component } = React;

interface IAsyncBarProps {
    isWorking: boolean,
    error: string
};

export default class AsyncBar extends Component<IAsyncBarProps, {}> {
  static propTypes = {
    isWorking: PropTypes.bool,
    error: PropTypes.string
  };

  public render():JSX.Element {
    let spinner = (this.props.isWorking) ? this.renderSpinner() : null;
    let error = (this.props.error) ? this.renderError() : null;

    return (
      <section className='Pulse-async'>
        {spinner}
        {error}
      </section>
    );
  }

  public renderSpinner():JSX.Element {
    return (
      <div className="Pulse-async-spinner">
        Loading…
      </div>
    );
  }

  public renderError():JSX.Element {
    return (
      <p className="Pulse-async-error">
        {this.props.error}
      </p>
    );
  }
}