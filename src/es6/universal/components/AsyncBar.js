import * as React from 'react';
let { PropTypes, Component } = React;
;
export default class AsyncBar extends Component {
    render() {
        let spinner = (this.props.isWorking) ? this.renderSpinner() : null;
        let error = (this.props.error) ? this.renderError() : null;
        return (React.createElement("section", {"className": 'Pulse-async'}, spinner, error));
    }
    renderSpinner() {
        return (React.createElement("div", {"className": "Pulse-async-spinner"}, "Loading…"));
    }
    renderError() {
        return (React.createElement("p", {"className": "Pulse-async-error"}, this.props.error));
    }
}
AsyncBar.propTypes = {
    isWorking: PropTypes.bool,
    error: PropTypes.string
};
//# sourceMappingURL=AsyncBar.js.map