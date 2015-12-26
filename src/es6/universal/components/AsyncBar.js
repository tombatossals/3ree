import { PropTypes, Component } from 'react';
export default class AsyncBar extends Component {
    render() {
        let spinner = (this.props.isWorking) ? this.renderSpinner() : null;
        let error = (this.props.error) ? this.renderError() : null;
        return className = 'Pulse-async' >
            { spinner };
        {
            error;
        }
        /section>;
        ;
    }
    renderSpinner() {
        return className = "Pulse-async-spinner" >
            Loading;
        /div>;
        ;
    }
    renderError() {
        return className = "Pulse-async-error" >
            { this: .props.error }
            < /p>;
        ;
    }
}
AsyncBar.propTypes = {
    isWorking: PropTypes.bool,
    error: PropTypes.string
};
//# sourceMappingURL=AsyncBar.js.map