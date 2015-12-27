/// <reference path="../../../../../typings/tsd.d.ts" />
import * as r from 'rethinkdb';
import * as xss from 'xss';
var config = require('../config');
function connect() {
    return r.connect(config);
}
export function liveUpdates(io) {
    console.log('Setting up listener...');
    connect()
        .then(conn => {
        r
            .table('pulses')
            .changes().run(conn, (err, cursor) => {
            console.log('Listening for changes...');
            cursor.each((err, change) => {
                console.log('Change detected', change);
                io.emit('event-change', change);
            });
        });
    });
}
export function getEvents() {
    return connect()
        .then(conn => {
        return r
            .table('pulses')
            .orderBy('id').run(conn)
            .then(cursor => {
            return cursor.toArray((err, rows) => {
                return rows;
            });
        });
    });
}
export function addEvent(event) {
    return connect()
        .then(conn => {
        event.created = new Date();
        event.text = xss(event.text);
        return r
            .table('pulses')
            .insert(event).run(conn)
            .then(response => {
            return Object.assign({}, event, { id: response.generated_keys[0] });
        });
    });
}
export function editEvent(id, event) {
    event.updated = new Date();
    event.text = xss(event.text);
    return connect()
        .then(conn => {
        return r
            .table('pulses')
            .get(id).update(event).run(conn)
            .then(() => event);
    });
}
export function deleteEvent(id) {
    return connect()
        .then(conn => {
        return r
            .table('pulses')
            .get(id).delete().run(conn)
            .then(() => ({ id: id, deleted: true }));
    });
}
//# sourceMappingURL=event.js.map