import * as React from 'react';
import { Route, IndexRoute } from 'react-router';
import PulseApp from './containers/PulseApp';
import MyEvents from './containers/MyEvents';
import OtherEvents from './containers/OtherEvents';
export default (React.createElement(Route, {"path": '/', "component": PulseApp}, React.createElement(IndexRoute, {"components": { myEvents: MyEvents, otherEvents: OtherEvents }}), React.createElement(Route, {"path": 'my-events', "components": { myEvents: MyEvents }}), React.createElement(Route, {"path": 'other-events', "components": { otherEvents: OtherEvents }})));
//# sourceMappingURL=routes.js.map