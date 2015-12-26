import * as React from 'react';
import { IndexLink, Link } from 'react-router';
let { PropTypes, Component } = React;
export default class Header extends Component {
    render() {
        return (React.createElement("div", null, React.createElement("header", {"className": 'Pulse-header'}, React.createElement("h1", null, "Pulse"), React.createElement("div", {"className": 'Pulse-links'}, React.createElement(IndexLink, {"to": '/', "activeClassName": 'active'}, "All Events"), React.createElement(Link, {"to": '/my-events', "activeClassName": 'active'}, "My Events"), React.createElement(Link, {"to": '/other-events', "activeClassName": 'active'}, "Other Events")))));
    }
}
//# sourceMappingURL=Header.js.map