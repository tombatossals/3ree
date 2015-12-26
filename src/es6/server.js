/// <reference path="../../typings/tsd.d.ts" />
import * as path from 'path';
import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as http from 'http';
import * as socketio from 'socket.io';
import * as api from './server/api/http';
import * as eventService from './server/api/service/event';
import * as uni from './server/app';
const app = express();
const httpServer = http.createServer(app);
const port = 3000;
var io = socketio(httpServer);
app.set('views', path.join(__dirname, 'server', 'views'));
app.set('view engine', 'ejs');
/**
 * Server middleware
 */
app.use(require('serve-static')(path.join(__dirname, 'dist')));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
/**
 * API Endpoints
 */
app.get('/api/0/events', api.getEvents);
app.post('/api/0/events', api.addEvent);
app.post('/api/0/events/:id', api.editEvent);
app.delete('/api/0/events/:id', api.deleteEvent);
app.get('/favicon.ico', (req, res) => res.sendFile(path.join(__dirname, 'images', 'favicon.ico')));
/**
 * Universal Application endpoint
 */
app.get('*', uni.handleRender);
eventService.liveUpdates(io);
httpServer.listen(port);
//# sourceMappingURL=server.js.map