/// <reference path="express/express.d.ts" />
/// <reference path="node/node.d.ts" />
/// <reference path="react/react-dom.d.ts" />
/// <reference path="react/react.d.ts" />
/// <reference path="webpack/webpack.d.ts" />
/// <reference path="rethinkdb/rethinkdb.d.ts" />
/// <reference path="serve-static/serve-static.d.ts" />
/// <reference path="bluebird/bluebird.d.ts" />
/// <reference path="mime/mime.d.ts" />
/// <reference path="socket.io/socket.io.d.ts" />
/// <reference path="body-parser/body-parser.d.ts" />
/// <reference path="redux/redux.d.ts" />
/// <reference path="redux-thunk/redux-thunk.d.ts" />
/// <reference path="react-redux/react-redux.d.ts" />
/// <reference path="history/history.d.ts" />
/// <reference path="react-router/history.d.ts" />
/// <reference path="redux-logger/redux-logger.d.ts" />
/// <reference path="redux-devtools/redux-devtools.d.ts" />
/// <reference path="react-router/react-router.d.ts" />
/// <reference path="socket.io-client/socket.io-client.d.ts" />
/// <reference path="node-uuid/node-uuid.d.ts" />
/// <reference path="node-uuid/node-uuid-base.d.ts" />
/// <reference path="node-uuid/node-uuid-cjs.d.ts" />
/// <reference path="superagent/superagent.d.ts" />
/// <reference path="moment/moment.d.ts" />
/// <reference path="moment/moment-node.d.ts" />

declare module "xss" {
    var constructor: any;
	export = constructor;
}


declare module "redux-router" {
    export function reduxReactRouter(history: any);
    export function routerStateReducer();
    export function ReduxRouter();
    
}

declare module "redux-router/server" {
    export function reduxReactRouter(params: any);
    export function match(url: string, callback: any);
}
