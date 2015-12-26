import { Route } from 'react-router';
import PulseApp from './containers/PulseApp';
import MyEvents from './containers/MyEvents';
import OtherEvents from './containers/OtherEvents';
export default path = '/';
component = { PulseApp } >
    components;
{
    {
        myEvents: MyEvents, otherEvents;
        OtherEvents;
    }
}
/>
    < Route;
path = 'my-events';
components = {};
{
    myEvents: MyEvents;
}
/>
    < Route;
path = 'other-events';
components = {};
{
    otherEvents: OtherEvents;
}
/>
    < /Route>;
;
//# sourceMappingURL=routes.js.map